<template>
    <div class="view-index">
        <div
            v-if="state === 'loading'"
            class="loading"
        >
            <span class="mdi mdi-loading" />
            <span>Loading,<br>please wait...</span>
        </div>
        <div
            v-if="state === 'done'"
            class="list"
        >
            <router-link
                to="/faq"
                class="help-box"
            >
                <span class="mdi mdi-help-rhombus" />
                <div>
                    <h1>We need your help!</h1>
                    <p>This list is incomplete, you can help by adding missing items.</p>
                </div>
            </router-link>

            <div class="filters">
                <input
                    v-model="filterSearchQuery"
                    type="search"
                    placeholder="Search for project, company or person..."
                    @input="searchInput"
                >
                <select
                    v-model="filterInvolved"
                    @change="applyFilters"
                >
                    <option value="0" selected>Involved & not involved</option>
                    <option value="1" selected>Only involved</option>
                    <option value="2" selected>Only not involved</option>
                </select>
                <select
                    v-model="filterInterested"
                    @change="applyFilters"
                >
                    <option value="0" selected >Interested & not interested</option>
                    <option value="1">Only interested</option>
                    <option value="2">Only not interested</option>
                </select>
            </div>

            <div class="table">
                <header>
                    <div>Project</div>
                    <div>Company</div>
                    <div>Person</div>
                    <div>Involved?</div>
                    <div>Interested?</div>
                </header>
                <router-link
                    v-for="item in shownItems"
                    :key="item.slug"
                    :to="`/detail/${item.slug}`"
                    class="item"
                >
                    <div>{{ item.project }}</div>
                    <div>{{ item.company }}</div>
                    <div>{{ item.person }}</div>
                    <div :class="{ 'active': item.nftStance.involved, 'not-active': !item.nftStance.involved}">
                        <span
                            v-if="item.nftStance.involved"
                            class="mdi mdi-check"
                        />
                        <span
                            v-if="!item.nftStance.involved"
                            class="mdi mdi-close"
                        />
                    </div>
                    <div :class="{ 'active': item.nftStance.interested, 'not-active': !item.nftStance.interested}">
                        <span
                            v-if="item.nftStance.interested"
                            class="mdi mdi-check"
                        />
                        <span
                            v-if="!item.nftStance.interested"
                            class="mdi mdi-close"
                        />
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ViewIndex',
    components: {
    },
    data() {
        return {
            shownItems: [],
            items: [],
            state: 'loading',
            filterSearchQuery: '',
            searchTimeout: null,
            filterInvolved: 0,
            filterInterested: 0,
        };
    },
    mounted() {
        this.loadContent().then(() => {
            this.state = 'done';
            this.resetFilters();
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
        searchInput() {
            if(this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout(() => {
                this.applyFilters();
            }, 500);
        },
        resetFilters() {
            this.filterSearchQuery = '';

            this.applyFilters();
        },
        applyFilters() {
            let finalItems = [];

            // Search FIlter
            if(this.filterSearchQuery !== '') {
                this.items.forEach((item) => {
                    if(item.project.toLowerCase().includes(this.filterSearchQuery.toLowerCase()) ||
                        item.company.toLowerCase().includes(this.filterSearchQuery.toLowerCase()) ||
                        item.person.toLowerCase().includes(this.filterSearchQuery.toLowerCase())) {
                        finalItems.push(item);
                    }
                });
            } else {
                finalItems = this.items;
            }

            // Involved Filter
            if(this.filterInvolved != 0) {
                let involvedFilter = [];

                finalItems.forEach((item) => {
                    if(this.filterInvolved == 1 && item.nftStance.involved) {
                        involvedFilter.push(item);
                    }
                    if(this.filterInvolved == 2 && !item.nftStance.involved) {
                        involvedFilter.push(item);
                    }
                });

                finalItems = involvedFilter;
            }

            // Interested Filter
            if(this.filterInterested != 0) {
                let interestedFilter = [];

                finalItems.forEach((item) => {
                    if(this.filterInterested == 1 && item.nftStance.interested) {
                        interestedFilter.push(item);
                    }
                    if(this.filterInterested == 2 && !item.nftStance.interested) {
                        interestedFilter.push(item);
                    }
                });

                finalItems = interestedFilter;
            }

            this.shownItems = finalItems;
        },
    },
};
</script>

<style lang="scss" scoped>
.loading {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 15px;

    & span:nth-child(1) {
        font-size: 72px;
        animation: loadingAnim 0.4s linear infinite;
        color: var(--color-primary-base);
    }
    & span:nth-child(2) {
        text-align: center;
        line-height: 1.5em;
    }
}

.help-box {
    background: var(--color-primary-bg);
    padding: 25px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    align-items: center;
    text-decoration: none;
    color: inherit;
    margin-bottom: 40px;
    transition: 0.2s ease-in-out all;

    & .mdi {
        font-size: 42px;
        color: var(--color-primary-base);
    }
    & h1 {
        font-size: 18px;
        color: rgba(0,0,0,1);
        margin: 0 0 5px;
    }
    & p {
        margin: 0;
        color: rgba(0,0,0,0.4);
    }

    &:hover {
        opacity: 0.4;
    }
}

.filters {
    display: grid;
    grid-gap: 20px;
    margin-bottom: 20px;
    grid-template-columns: 1fr auto auto;

    & input {
        border: 1px solid rgba(0,0,0,0.21);
        padding: 8px;
        border-radius: 4px;
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;

        &:focus {
            outline: 0;
            border-color: var(--color-primary-base);
        }
    }
    & select {
        border: 1px solid rgba(0,0,0,0.21);
        padding: 8px;
        border-radius: 4px;
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;

        &:focus {
            outline: 0;
            border-color: var(--color-primary-base);
        }
    }
}

.table {
    display: table;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.14);

    & header {
        display: table-row;
        border-bottom: 1px solid rgba(0,0,0,0.14);
        background: var(--color-primary-base);
        color: #fff;

        & > div {
            display: table-cell;
            padding: 10px;
            font-weight: 600;

            &:nth-child(4), &:nth-child(5) {
                text-align: center;
            }
        }
    }
    & .item {
        display: table-row;
        transition: 0.1s ease-in-out background;
        text-decoration: none;
        color: inherit;

        & > div {
            display: table-cell;
            padding: 10px;

            &:nth-child(4), &:nth-child(5) {
                width: 100px;
                font-size: 18px;
                text-align: center;

                &.active {
                    background: var(--color-bad-bg);
                }
                &.not-active {
                    background: var(--color-good-bg);
                }
            }
        }
        &:not(:last-child) {
            border-bottom: 1px solid rgba(0,0,0,0.14);
        }
        &:hover {
            background: rgba(0,0,0,0.07);
        }
    }
}

@keyframes loadingAnim {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
