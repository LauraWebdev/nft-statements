<template>
    <div id="app">
        <Header />

        <main class="wrapper">
            <router-view />
        </main>

        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
</style>
