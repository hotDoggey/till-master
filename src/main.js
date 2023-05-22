import { createApp } from "vue";
import RootComponentApp from "./App.vue";
import router from "./router";
import PageHeader from "./components/PageHeader.vue"; 
import PageFooter from "./components/PageFooter.vue"; 
import { library } from '@fortawesome/fontawesome-svg-core' // FontAwesome core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* FontAwesome component */
import { faCarBurst, faCarOn, faUserCog, faUserSecret } from '@fortawesome/free-solid-svg-icons' /* FontAwesome import individual icons */
// import { fas } from '@fortawesome/free-solid-svg-icons' /* FontAwesome import all icons */

library.add(faCarOn, faCarBurst) /* add individual icons to the library */

const app = createApp(RootComponentApp)

// Add golobal components to the app before mounting it 
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('PageHeader', PageHeader)
app.component('PageFooter', PageFooter)


// Add Router 
app.use(router)

// Mount the app
app.mount('#app')



// MY GLOBAL COMPONENTS
/* <PageHeader title="Name Of Site"/> */ 
/* <font-awesome-icon icon="icon-name" size="lg" color="#f00" /> */

