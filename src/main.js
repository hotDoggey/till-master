import { createApp } from "vue";
import App from "./App.vue";
// just specifying a folder that contains index.js will make it select that file, no need to add the whole path to the router import
import router from "./router";

createApp(App).use(router).mount("#app");
