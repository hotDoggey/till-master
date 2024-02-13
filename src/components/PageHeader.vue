<template>
    <v-toolbar class="toolbar">
        <!-- Logged In User Details -->
        <div class="user-details" v-if="userIsLoggedIn">
            <div class="lia-text">Logged in as: <br /></div>
            <div class="user-email">
                {{ loggedInUserEmail }}<br />
                <!-- Logged in as: <br />{{ loggedInUserFullName }} {{ loggedInUserEmail }} -->
            </div>
        </div>

        <!-- Title and Icon -->
        <v-toolbar-title class="title-and-icon">
            <router-link class="no-link-style" to="/till_main">
                <font-awesome-icon icon="fa-solid fa-money-bill-1-wave" size="2xl" />
                <h2 class="title">
                    {{ title }}
                </h2>
            </router-link>
        </v-toolbar-title>

        <!-- Navigation Links -->
        <v-toolbar-items class="navigation" v-if="userIsLoggedIn">
            <nav class="nav-links">
                <router-link to="/till_main">Till Home | </router-link>
                <router-link to="/manage_users">Manage Users | </router-link>
                <!-- <router-link to="/login" v-if="!userIsLoggedIn">Login</router-link> -->
                <div class="logout" @click="logOut">Log out</div>
            </nav>
        </v-toolbar-items>
    </v-toolbar>
    <div class="error-message" v-if="stateErrorMsg">Error message: {{ stateErrorMsg }}</div>
</template>

<script>
export default {
    props: [`title`, `loggedInUser`],
    data() {
        return {};
    },
    computed: {
        loggedInUserFullName() {
            const returnText = `${this.loggedInUser.customData.forename} ${this.loggedInUser.customData.surname}`;
            return returnText;
        },
        loggedInUserId() {
            return this.loggedInUser.createdAt;
        },
        loggedInUserEmail() {
            return this.loggedInUser.email;
        },
        stateErrorMsg() {
            return this.$store.state.error;
        },
    },
    methods: {
        logOut() {
            this.$store.commit("logUserOut");
            this.$router.push("login");
        },
    },
};
</script>

<style scoped>
.toolbar {
    padding: 1.25rem;
    color: var(--text-color) !important;
}
.top-ribon {
    display: flex;
    padding: 0pt 10pt 0pt 30pt;
    background: var(--primary-color);
    color: var(--text-color);
    align-items: center;
}
.top-ribon > * {
    /* border: 15px solid orange; */
    margin: 15px;
}

.user-details {
    font-weight: 1rem;
    font-weight: bold;
    display: block;
    margin-left: 2rem;
}

img.logo {
    height: 35px;
    width: 35px;
    border-radius: 20%;
}
.title {
    height: 40%;
    margin: auto;
}

.nav-links {
    margin: auto;
    padding-right: 1rem;
}
.nav-links * {
    text-decoration: none;
    color: var(--text-color);
}

nav a.router-link-exact-active {
    color: rgb(238, 34, 34);
}
nav {
    padding-top: auto;
}
nav a {
    font-weight: bold;
}
.logout {
    font-weight: 1rem;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
}
.error-message {
    color: red;
}
</style>
