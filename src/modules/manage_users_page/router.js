const debug = 0;
const Module = () => import("./Module.vue");
const ManageUsersPage = () => import("./views/ManageUsersPage.vue");
import rerouteToLogin from "../1Mod_HelperScripts/rerouteToLogin.js"; // A conditional function which checks if the user is logged in, and if not redirects to login page

if (debug) console.log("2. in router.js within the small_components module, imported ");

// simplified module route type compared to blank module and others - dont actually need children if only one
const moduleRoute = {
    name: "manage_users",
    path: "/manage_users",
    component: ManageUsersPage,
    // beforeEnter: rerouteToLogin,
    // above check was moved to main router.js file, in the beforeEach section
    // TODO: update the above to factor in type of user, e.g. admin only can access the manage users page
};

export default (router) => {
    if (debug) console.log(ManageUsersPage);
    router.addRoute(moduleRoute);
    if (debug) console.log(router.getRoutes());
};
