<template>
    <v-toolbar class="toolbar">
        <!-- Logged In User Details -->
        <div class="user-details">
            <div class="user-full-name">
                Logged in as: <br />{{ loggedInUserFullName }} {{ loggedInUserId }}
            </div>
        </div>
        <v-spacer></v-spacer>

        <!-- Title and Icon -->
        <v-toolbar-title>
            <router-link class="no-link-style" to="/till_main">
                <font-awesome-icon icon="fa-solid fa-money-bill-1-wave" size="2xl" />
                <h2 class="title">
                    {{ title }}
                </h2>
            </router-link>
        </v-toolbar-title>

        <!-- Navigation Links -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <nav class="nav-links">
                <router-link to="/till_main">Till Home</router-link> |
                <router-link to="/manage_users">Manage Users</router-link> |
                <router-link to="/login">Login</router-link> |
                <div class="logout">Log out</div>
            </nav>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    props: [`title`, `loggedInUser`],
    computed: {
        loggedInUserFullName() {
            const returnText = `${this.loggedInUser.forename} ${this.loggedInUser.surname}`;
            return returnText;
        },
        loggedInUserId() {
            return this.loggedInUser.id;
        },
    },
};
</script>

<style scoped>
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
img.logo {
    height: 35px;
    width: 35px;
    border-radius: 20%;
}
.title {
    height: 40%;
    margin: auto;
}
nav {
    padding-top: auto;
}
nav a {
    font-weight: bold;
}
.nav-links {
    margin: auto;
    margin-right: 3rem;
}
.logout {
    font-weight: 1rem;
    font-weight: bold;
    display: inline-block;
}
.user-details {
    font-weight: 1rem;
    text-decoration: underline;
    font-weight: bold;
    display: block;
    margin-left: 2rem;
}
.toolbar {
    padding: 1.25rem;
    color: var(--text-color) !important;
}

.nav-links * {
    text-decoration: none;
    color: var(--text-color);
}

nav a.router-link-exact-active {
    color: rgb(238, 34, 34);
}
</style>
