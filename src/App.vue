<template>
    <v-app>
        <PageHeader title="Till Master" :loggedInUser="loggedInUser" />
        <!-- wrapping with a vuetify app tag -->
        <!-- router-view is where the content of each component page is displayed, 
            as nav is separate it will always be shown at the top of all pages -->
        <router-view class="prevent-text-selection dynamic-size" />
    </v-app>
    <!-- <PageFooter
    id="page-footer"
    footer_content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumcum animi suscipit. Quae aut reprehenderit dicta
        repellendssimus corporis quas sit amet optio fugiat numquam omnis iure."
></PageFooter> -->
</template>

<script>
import { onSnapshot, tabsColRef } from "@/mainjsHelpers/FirestoreSetup"; // Import the named export 'app' from the firebase.js file

export default {
    name: "App",
    components: {},
    data() {
        return {
            /* FYI you can create a variable here and access it anywhere in the app with:
            showScrollBar: false,
            this.$root.setYScrollVisibilityTo(true) which is a method defined below*/
        };
    },

    mounted() {
        const intervalId = setInterval(() => {
            // plan:
            // 1) for each on all tabs
            // 2) if tab has needsUpdating Bool=True = run update action on firestore
        }, 5000);

        // To stop the interval (optional), you can use clearInterval
        clearInterval(intervalId);
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
    },
    beforeDestroy() {},
    methods: {
        // dont delete this, its for my future reference!
        setYScrollVisibilityTo(bool) {},
    },
    beforeCreate() {
        // Before creating the app, set up a subsciption to the AllTabs collection in firestore and update the vuex store with the tabs (this will also run every time a change is made to that firestore collection)
        // Arg1: collection, Arg2: a callback function that runs every time a snapshot is received
        // for future: prob want to move this subscription to the TillMainScreen component so its not loaded before signing in
        onSnapshot(tabsColRef, (snapshot) => {
            console.log("snapshot: ", snapshot);
            this.$store.dispatch("updateTabsFromFSSnapshot", snapshot);
        });

        // Also check for a stored token for a logged in user in session storage, log user in if found
        let userAccessToken = sessionStorage.getItem("userAccessToken");
        // if (userAccessToken) this.$store.dispatch("signUserInWithToken", userAccessToken);
    },
};
</script>

<style>
:root {
    --primary-color: #646565;
    --primary-color-darker: hsl(from var(--primary-color) h s calc(l - 10%));
    --color-primary-darker: color-mix(in srgb, var(--primary-color), #000 60%);
    --secondary-color: #466b91;
    --secondary-color-D: #2e5174;
    --text-color: #44688c;
    --text-color-D: #c5d4e3;
    --btn-text-color-L: #dde0e3;
    --color-three: #e6dae8;
    --selected-color: #939292;
    overflow-y: auto;
}
#app {
    min-height: 90%;
    max-height: 90%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text-color);
}
/* stop text selection on most things as its not needed in this type of application */
.prevent-text-selection {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}
.allow-text-selection {
    -webkit-user-select: text !important; /* Safari */
    -ms-user-select: text !important; /* IE 10 and IE 11 */
    user-select: text !important; /* Standard syntax */
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

.dynamic-size {
    height: 100%;
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
    border: 1px solid black; /* for visualization */
}
.container-title {
    padding: 0.25rem 0;
    font-size: 1.75rem;
}
.hint-text {
    color: rgb(196, 196, 197);
}
</style>
