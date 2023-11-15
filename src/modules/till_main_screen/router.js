const debug = 0;
const Module = () => import("./Module.vue");
const TillMainScreen = () => import("./views/TillMainScreen.vue");
import rerouteToLogin from "../1Mod_HelperScripts/rerouteToLogin.js"; // A conditional function which checks if the user is logged in, and if not redirects to login page

if (debug) console.log("2. in router.js within the small_components module, imported ");

const moduleRoute = {
    path: "/till_main",
    component: Module,
    children: [
        /* fk me! the below path in the children should be idek what, ig the whole path starting from first /slash */
        { name: "till_main", path: "/till_main", component: TillMainScreen },
    ],
    // beforeEnter: (to, from, next) => {
    //     next();
    //     // rerouteToLogin(to, from, next);
    //     //  secondConditionalFunctionHere(to, from, next)
    //     // above check was moved to main router.js file, in the beforeEach section
    //     // TODO: update the above to factor in type of user, e.g. admin only can access the manage users page
    // },
};

export default (router) => {
    if (debug) console.log(TillMainScreen);
    router.addRoute(moduleRoute);
    if (debug) console.log(router.getRoutes());
};
