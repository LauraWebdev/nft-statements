<template>
    <div id="app">
        <h1>NFT Statements</h1>
        <header>
            <router-link to="/">Index</router-link>
            <router-link to="/about">About</router-link>
        </header>

        <router-view />
    </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    padding: 40px;
  color: #2c3e50;
}
</style>
