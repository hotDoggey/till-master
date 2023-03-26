import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobsView from "../views/jobs/JobsView.vue";
import JobDetailsView from "../views/jobs/JobDetailsView.vue";
import NotFound404 from "../views/NotFound404.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/jobs",
        name: "jobs",
        component: JobsView,
    },
    {
        path: "/jobs/:id",
        name: "jobDetails",
        component: JobDetailsView,
        props: true,
    },
    // redirect
    {
        path: "/all-jobs", // path is what we are redirecting from
        redirect: "/jobs",
    },
    // 404 catch all
    {
        path: "/:catchAll(.*)",
        name: "notFound404",
        component: NotFound404,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
