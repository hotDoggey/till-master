/*  just exports a function that can be imported and added to the beforeEnter on 
    a given route to ensure a user doesnt access the login page if they are 
    already signed in - they should get redirected to till main screen */
import store from "@/store";

export default (to, from, next) => {
    // Check the condition here
    if (store.getters.loggedInState) {
        console.log(
            `User tried accessing the login page while already signed in. Redirecting to main Screen.`
        );
        // Redirect to login page
        next("/till_main");
    } else {
        // Proceed to the intended route
        next();
    }
};
