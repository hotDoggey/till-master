import { createApp } from "vue";
import RootComponentApp from "./App.vue";
import router from "./router";
import store from "./store.js"; // Import the Vuex store
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import { FontAwesomeIcon } from "./mainjsHelpers/FontAwesomeSetup"; // Import from the FontAwesomeSetup module
import { firebaseApp, firebaseAuth } from "./mainjsHelpers/FirestoreSetup"; // Import the named export 'app' from the firebase.js file
import userIsLoggedInMixin from "./mainjsHelpers/userIsLoggedInMixin.js";

//-- <MODULES> --//
// giving just the folder will automatically find and exec the index.js
import till_main_screenModule from "./modules/till_main_screen";
import manage_users_page_module from "./modules/manage_users_page";
import login_screen_module from "./modules/login_screen";
import Blank_module_dont_modify from "./modules/2Blank_module_dont_modify";

// register modules utility function:
import { registerModules } from "./register-modules";

// run the util function with my object of modules:
registerModules({
    till_main_screenModule: till_main_screenModule,
    manage_users_page_module: manage_users_page_module,
    login_screen_module: login_screen_module,
    Blank_module_dont_modify: Blank_module_dont_modify,
});
//-- </MODULES> --//

//-- <Vuetify> --//
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});
//-- </Vuetify> --//

const app = createApp(RootComponentApp);

// Adding a global function/object to the Vue prototype, this is accessible anywhere in the rest of the app and components using this.$xxx
// TODO: remove if not needed due to doing most of auth stuff in the store.js
app.config.globalProperties.$firebaseApp = firebaseApp;
app.config.globalProperties.$firebaseAuth = firebaseAuth;

// Add golobal components to the app before mounting it
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("PageHeader", PageHeader);
app.component("PageFooter", PageFooter);

// Add Router
app.use(router);

// Add Vuetify
app.use(vuetify);

// Use the Vuex store
app.use(store);

// loggedInState mixin for visibility - now available as plain property for easy access in all components
app.mixin(userIsLoggedInMixin);

// Mount the app, prob dont need to assign to vm variable
const vm = app.mount("#app");

// MY GLOBAL COMPONENTS
/* <PageHeader title="Name Of Site"/> */
/* <font-awesome-icon icon="icon-name" size="lg" color="#f00" /> */

// another way to make an object usable elsewhere is to export it from here
// and import it and use as is within another section of the app

// export const router = new VueRouter({
//     mode: 'hash',
//     base: "./",
//     routes: [
//         { path: "/", component: welcome},
//         { path: "/welcome", component: welcome},

//     ]
// })

// Within the other place in the application, import and use as normal
// import {router} from "../main.js"

// export const someAction = ({commit}) => {

//     router.push("/welcome");
// }
