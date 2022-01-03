<template>
    <footer>
        <div class="wrapper">
            <div>
                <span>Created out of spite and anger by</span>
                <a
                    href="https://laura.media"
                    target="_blank"
                >Laura Heimann</a>
            </div>
            <nav>
                <a
                    href="https://laura.media/legal"
                    target="_blank"
                >LEGAL</a>
                <a
                    href="https://github.com/LauraWebdev/nft-statements"
                    target="_blank"
                >GITHUB</a>
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    & .wrapper {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;
        padding: 40px 0px;
        align-items: center;

        & > div {
            font-size: 12px;
            opacity: 0.6;

            & a {
                font-size: 18px;
                color: var(--color-primary-base);
                display: block;
                margin-top: 5px;
                text-decoration: none;
            }
        }

        & nav {
            display: flex;
            grid-gap: 30px;

            & a {
                color: rgba(0,0,0,0.6);
                text-decoration: none;
                font-weight: bold;

                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }
}
</style>
