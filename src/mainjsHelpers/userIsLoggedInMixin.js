// this helper exports a mixin, this is used for setting a global property
// "userIsLoggedIn" that can be used throughout the vue application in all
// components to control visibility of sections based on whether a user is
// logged in or not (logged out link, user details, login page link etc.)

import store from "../store.js"; // Import the Vuex store

export default {
    computed: {
        userIsLoggedIn() {
            return store.getters.loggedInState;
        },
    },
};
