const debug = 0;
const Module = () => import("./Module.vue");
const LoginPage = () => import("./views/LoginPage.vue");

const moduleRoute = {
    path: "/login",
    component: Module,
    children: [
        /* fk me! the below path in the children should be idek what, ig the whole path starting from first /slash */
        { name: "login", path: "/login", component: LoginPage },
    ],
};

export default (router) => {
    router.addRoute(moduleRoute);
};
