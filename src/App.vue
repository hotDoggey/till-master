<template>
    <!-- prettier-ignore   -->
    <PageHeader title="Till Master" :loggedInUser="loggedInUser"/>
    <!-- {forename:'David',surname:'Jones',id:1755864} -->
    <v-app>
        <!-- wrapping with a vuetify app tag -->
        <!-- router-view is where the content of each component page is displayed, 
            as nav is separate it will always be shown at the top of all pages -->
        <router-view />
    </v-app>
    <!-- <PageFooter
    id="page-footer"
    footer_content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumcum animi suscipit. Quae aut reprehenderit dicta
        repellendssimus corporis quas sit amet optio fugiat numquam omnis iure."
></PageFooter> -->
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            loggedInUser: this.$store.state.loggedInUser,
        };
    },
    mounted() {},
    beforeDestroy() {},
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
:root {
    --primary-color: #dde0e3;
    --primary-color-darker: hsl(from var(--primary-color) h s calc(l - 10%));
    --color-primary-darker: color-mix(in srgb, var(--primary-color), #000 60%);
    --secondary-color: #466b91;
    --secondary-color-D: #2e5174;
    --text-color: #44688c;
    --text-color-D: #c5d4e3;
    --btn-text-color-L: #dde0e3;
    --color-three: #e6dae8;
    --selected-color: #939292;
    overflow-y: hidden; /* hide main scrollbar */
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text-color);
}

button {
    background-color: var(--secondary-color);
    margin: 0 10px;
    padding: 10px;
    border-width: 1px;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: var(--secondary-color-D);
}

#app {
    min-height: 100vh;
}

#page-footer {
    position: sticky;
    top: 100%;
    background-color: #333;
    color: #fff;
}
#page-footer.show {
    bottom: 0; /* move the bar up to show it */
}

nav a.router-link-exact-active {
    color: rgb(238, 34, 34);
}

.no-link-style {
    text-decoration: none;
    color: var(--text-color);
}
/* used to hide stuff all around the application */
.hidden {
    display: none !important;
}
.visual-border {
    border: 1px solid black; /* for ez visualization */
}
</style>
