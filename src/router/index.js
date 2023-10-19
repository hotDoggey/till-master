import { createRouter, createWebHistory } from "vue-router";
import NotFound404 from "../views/NotFound404.vue";
// import ComponentsDump from "@/modules/small_components_dump/Module.vue";

const routes = [
    // the rest of the views are found in the different modules
    // 404 catch all
    { path: "/", redirect: "/till_main" },
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
