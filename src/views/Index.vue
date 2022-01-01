<template>
    <div class="view-index">
        <div v-if="state === 'loading'">
            Loading...
        </div>
        <div v-if="state === 'done'">
            <table border="1px solid black" style="width: 100%;" cellpadding="5px">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Company</th>
                        <th>Person</th>
                        <th width="100px">Does NFT?</th>
                        <th width="100px">Interested?</th>
                        <th width="50px"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.slug">
                        <td>{{ item.project }}</td>
                        <td>{{ item.company }}</td>
                        <td>{{ item.person }}</td>
                        <td style="text-align: center">{{ item.nftStance.doesNFT ? 'Yes' : 'No'}}</td>
                        <td style="text-align: center">{{ item.nftStance.interested ? 'Yes' : 'No'}}</td>
                        <td><router-link :to="`/detail/${item.slug}`">Detail</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
    name: 'ViewIndex',
    components: {
        //HelloWorld,
    },
    data() {
        return {
            items: [],
            state: 'loading',
        };
    },
    mounted() {
        this.loadContent().then(() => {
            this.state = 'done';
        });
    },
    methods: {
        loadContent() {
            return new Promise(async (resolve, reject) => {
                this.state = 'loading';
                console.log('Loading Content');

                axios.get(process.env.BASE_URL + 'content/index.json').then(data => {
                    let items = data.data.items;

                    items.forEach(async item => {
                        console.log('Loading ' + item);
                        let itemData = await axios.get(process.env.BASE_URL + 'content/' + item + '.json');
                        itemData.data.slug = item;
                        this.items.push(itemData.data);
                    });

                    console.log('Done Content Loading');

                    resolve();
                }).catch(e => {
                    console.error(e);
                    reject();
                });
            });
        },
    },
};
</script>
