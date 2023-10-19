import { createApp } from "vue";
import RootComponentApp from "./App.vue";
import router from "./router";
import store from "./store.js"; // Import the Vuex store
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import { FontAwesomeIcon } from "./mainjsHelpers/FontAwesomeSetup"; // Import from the FontAwesomeSetup module

//-- <MODULES> --//
// giving just the folder will automatically find and exec the index.js
import till_main_screenModule from "./modules/till_main_screen";
import manage_users_page_module from "./modules/manage_users_page";
import login_screen_module from "./modules/login_screen";
import Blank_module_dont_modify from "./modules/Blank_module_dont_modify";

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

// Mount the app
app.mount("#app");

// MY GLOBAL COMPONENTS
/* <PageHeader title="Name Of Site"/> */
/* <font-awesome-icon icon="icon-name" size="lg" color="#f00" /> */

// firebase code:

// npm install firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA8zWUKjmu7mL_cW8t9sM5S6ZJhMDdik3s",
//   authDomain: "till-manager.firebaseapp.com",
//   projectId: "till-manager",
//   storageBucket: "till-manager.appspot.com",
//   messagingSenderId: "1050796441026",
//   appId: "1:1050796441026:web:ed46cbd835e89ccc0e6a5b",
//   measurementId: "G-PZVRX7QVYM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
