/*  just exports a function that can be imported and added to the beforeEnter on 
    a given route to ensure a user doesnt access a page which they are not supposed 
    to unless signed in */
import store from "@/store";

export default (to, from, next) => {
    // Check the condition here
    if (!store.getters.loggedInState) {
        console.log(`User tried accessing a page without logging in. Redirecting to login Screen.`);
        // Redirect to login page
        next("/login");
    } else {
        // Proceed to the intended route
        next();
    }
};
