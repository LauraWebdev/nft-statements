<template>
    <header>
        <div class="wrapper">
            <router-link to="/" class="brand">
                <h1><span>NFT</span>statements</h1>
                <p>A publicly available and filterable list of companies, projects and individuals and their stance on NFTs</p>
            </router-link>

            <nav>
                <router-link to="/">
                    <span class="mdi mdi-format-list-text"></span>
                    <span>INDEX</span>
                </router-link>
                <router-link to="/faq">
                    <span class="mdi mdi-frequently-asked-questions"></span>
                    <span>FAQ</span>
                </router-link>
                <router-link to="/api">
                    <span class="mdi mdi-widgets-outline"></span>
                    <span>API</span>
                </router-link>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        & .wrapper {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 20px;
            padding: 40px 0px;
            align-items: center;

            & .brand {
                display: flex;
                align-items: center;
                grid-gap: 20px;
                text-decoration: none;

                & h1 {
                    margin: 0;
                    font-weight: 400;
                    letter-spacing: -0.075em;
                    font-size: 18px;
                    color: #000;

                    span {
                        color: var(--color-primary-base);
                        font-weight: 600;
                        letter-spacing: -0.05em;
                        margin-right: 5px;
                        font-size: 24px;
                    }
                }
                & p {
                    max-width: 400px;
                    color: rgba(0,0,0,0.4);
                }
            }

            & nav {
                display: flex;
                grid-gap: 30px;

                & a {
                    color: rgba(0,0,0,0.6);
                    display: flex;
                    grid-gap: 10px;
                    align-items: center;
                    text-decoration: none;

                    & span:nth-child(1) {
                        font-size: 24px;
                    }
                    & span:nth-child(2) {
                        font-weight: bold;
                    }

                    &:hover {
                        opacity: 0.6;
                    }

                    &.router-link-exact-active {
                        color: var(--color-primary-base);
                    }
                }
            }
        }
    }
</style>
