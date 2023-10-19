const debug = 0;
const Module = () => import("./Module.vue");
const ManageUsersPage = () => import("./views/ManageUsersPage.vue");

if (debug) console.log("2. in router.js within the small_components module, imported ");

const moduleRoute = {
    path: "/till_main",
    component: Module,
    children: [
        /* fk me! the below path in the children should be idek what, ig the whole path starting from first /slash */
        { name: "manage_users", path: "/manage_users", component: ManageUsersPage },
    ],
};

export default (router) => {
    if (debug) console.log(ManageUsersPage);
    router.addRoute(moduleRoute);
    if (debug) console.log(router.getRoutes());
};
