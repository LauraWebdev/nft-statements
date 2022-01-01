<template>
    <div class="view-api">
        <article>
            <h1>Get all available items</h1>
            <p>https://laurawebdev.github.io/nft-statements/content/index.json</p>
<pre>
{
  "items": [
    "square-enix",
    "valve"
  ]
}</pre>
        </article>
        <article>
            <h1>Get detail from item</h1>
            <p>https://laurawebdev.github.io/nft-statements/content/[SLUG].json</p>
<pre>
{
  "person": "Valve",
  "company": "Valve",
  "project": "Steam",
  "when": 1640995200,
  "nftStance": {
    "interested": false,
    "involved": false,
    "quote": "What you shouldn't publish on Steam: Applications built on blockchain technology that issue or allow exchange of cryptocurrencies or NFTs."
  },
  "sources": [
    "https://partner.steamgames.com/doc/gettingstarted/onboarding",
    "https://www.theverge.com/2021/10/15/22728425/valve-steam-blockchain-nft-crypto-ban-games-age-of-rust"
  ]
}</pre>
        </article>
    </div>
</template>

<style lang="scss" scoped>
.view-api {
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
            padding: 10px 20px 0px;
            color: rgba(0,0,0,0.4);
            line-height: 1.5em;
        }
        & pre {
            font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
            border-top: 1px solid rgba(0,0,0,0.14);
            white-space: pre-wrap;
            width: 100%;
            overflow-x: scroll;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0 0;
        }
    }
}
</style>
