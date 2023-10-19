const debug = 0;
const Module = () => import("./Module.vue");
const xPage = () => import("./views/xPage.vue");

const moduleRoute = {
    path: "/xPage",
    component: Module,
    children: [
        /* fk me! the below path in the children should be idek what, ig the whole path starting from first /slash */
        { name: "xPage", path: "/xPage", component: xPage },
    ],
};

export default (router) => {
    router.addRoute(moduleRoute);
};
