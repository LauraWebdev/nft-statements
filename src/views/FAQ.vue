<template>
    <div class="view-faq">
        <article>
            <h1>What is this?</h1>
            <p>NFTstatements is a public list of projects, companies and individuals and their stance on NFTs. This project aims to inform consumers about their interest and/or involvement in crypto tokens. To learn more why NFTs are so dangerous to our environment, a pyramid-scheme, a dangerous unregulated marked and full of scams, feel free to visit <a href="https://web3isgoinggreat.com/" target="_blank">https://web3isgoinggreat.com</a> as well as <a href="https://www.usenix.org/publications/loginonline/web3-fraud" target="_blank">https://www.usenix.org/publications/loginonline/web3-fraud</a></p>
        </article>
        <article>
            <h1>Why?</h1>
            <p>It's becoming increasingly more difficult to remember which company, project or person was for or against NFTs. This project aims to provide this information in a manner that is easy to filter & search.</p>
        </article>
        <article>
            <h1>How can I help?</h1>
            <p>If you think we are missing a project or we made a mistake, you can always <a href="https://github.com/LauraWebdev/nft-statements" target="_blank">create an issue</a> on our GitHub repository. NFTstatements is completely free and open-source, all content is licensed under the GNU 3 license.</p>
        </article>
        <article>
            <h1>Who created this?</h1>
            <p>NFTstatements was created by Laura Heimann. The content, comes from various crowd-sourcing contributors of the project.</p>
        </article>
    </div>
</template>

<style lang="scss" scoped>
.view-faq {
    display: grid;
    grid-gap: 20px;

    & article {
        border: 1px solid rgba(0,0,0,0.14);
        border-radius: 4px;

        & h1 {
            font-size: 20px;
            margin: 0;
            padding: 20px 20px 0px;
        }
        & p {
            margin: 0;
            padding: 10px 20px 20px;
            color: rgba(0,0,0,0.4);
            line-height: 1.5em;

            & a {
                color: var(--color-primary-base);

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
