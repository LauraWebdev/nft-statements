<template>
    <div class="view-faq">
        <article>
            <h1>What is this?</h1>
            <p>Todo.</p>
        </article>
        <article>
            <h1>Why?</h1>
            <p>Todo.</p>
        </article>
        <article>
            <h1>How can I help?</h1>
            <p>Todo.</p>
        </article>
        <article>
            <h1>Who created this?</h1>
            <p>Todo.</p>
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
        }
    }
}
</style>
