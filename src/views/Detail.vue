<template>
    <div class="view-detail">
        <div v-if="data !== null && state === 'done'">
            <h1>{{ data.company }}</h1>
            <h2>{{ data.project }}</h2>
            <h3>{{ data.person }}</h3>
            <p>"{{ data.nftStance.quote }}"</p>
            <p>Does NFT? {{ data.nftStance.doesNFT ? 'Yes' : 'No' }}</p>
            <p>Is interested? {{ data.nftStance.interested ? 'Yes' : 'No' }}</p>
            <hr />
            <h3>Sources</h3>
            <ul>
                <li v-for="source in data.sources" :key="source">{{ source }}</li>
            </ul>
        </div>
        <div v-if="state === 'error'">Error loading, try again later.</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ViewDetail',
    components: {
    },
    data() {
        return {
            data: null,
            state: 'loading',
        };
    },
    mounted() {
        this.loadContent();
    },
    methods: {
        loadContent() {
            this.state = 'loading';

            console.log('Loading ' + this.$route.params.slug);
            axios.get(process.env.BASE_URL + 'content/' + this.$route.params.slug + '.json').then(data => {
                this.data = data.data;
                this.state = 'done';
            }).catch(e => {
                this.state = 'error';
                console.error(e);
            });
        },
    },
};
</script>
