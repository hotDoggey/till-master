<template>
    <!-- prettier-ignore -->
    <PageHeader logoPath="..\assets\logo.png" title="Name Of Site"/>
    <nav>
        <router-link to="/">Home</router-link> | <router-link :to="{ name: 'about' }">About</router-link> |
        <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    </nav>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>

    <!-- router-view is where the content of each component page is displayed, as nav is separate it will always be shown at the top of all pages -->
    <router-view />
</template>

<script>
import PageHeader from "./components/page_header.vue";

export default {
    name: "App",
    components: {
        PageHeader,
    },
    methods: {
        redirect() {
            this.$router.push({ name: "home" });
        },
        back() {
            this.$router.go(-1);
        },
        forward() {
            this.$router.go(1);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
}
</style>
