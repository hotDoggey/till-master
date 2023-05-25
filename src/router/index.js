import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyFormsView from "../views/myForms/AllFormsView.vue";
import FormDetailsView from "../views/myForms/FormDetailsView.vue";
import NotFound404 from "../views/NotFound404.vue";

const routes = [
    {
        path: "/myforms",
        name: "myform",
        component: MyFormsView,
    },
    {
        path: "/home",
        name: "home",
        component: HomeView,
    },
    {
        path: "/form/:id",
        name: "formDetails",
        component: FormDetailsView, 
        props: true, //Here, the props: true property tells Vue to automatically pass the route params as props to the FormDetails component.
    },
    // redirect if we change name or they enter wrong page address
    {
        path: "/all-forms", // path is what we are redirecting from
        redirect: "/myforms",
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
