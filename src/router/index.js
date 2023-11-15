import { createRouter, createWebHistory } from "vue-router";
import NotFound404 from "../views/NotFound404.vue";
import store from "@/store";
// import ComponentsDump from "@/modules/small_components_dump/Module.vue";

// create the router instance
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [],
});

// define routes and a 404 catch all (fyi the rest of the views/routes are found in the different modules)
router.routes = [
    // "/" redirects to the homepage of till_main
    { path: "/", redirect: "/till_main" },
    // 404 catch all
    {
        path: "/:catchAll(.*)",
        name: "notFound404",
        component: NotFound404,
    },
];

// Function to check logged in state of user and prevent access to pages unless signed in
const goToLoginIfNotAuthenticated = (to, _from, next) => {
    if (!store.getters.loggedInState && to.name !== "login") {
        console.log(`User tried accessing a page without logging in. Redirecting to login Screen.`);
        // Redirect to login page
        next("/login");
    } else {
        // Proceed to the intended route
        next();
        // NOTE: There may be more restrictions for the other pages, e.g. manage users page might have an additional check for only admin roles - see that module's folder and router options
    }
};

// Ensure authentication is required for accessing the user dependent pages, redirect to login page if not signed in
router.beforeEach((to, from, next) => {
    goToLoginIfNotAuthenticated(to, from, next);
});

export default router;
