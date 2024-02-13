import { createStore } from "vuex";
import {
    firebaseApp,
    firestoreDB,
    collection,
    tabsColRef,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    firebaseAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithCustomToken,
} from "./mainjsHelpers/FirestoreSetup";

export default createStore({
    state: {
        // to use firestore, uncomment out the action in App.vue and change the 2 possition to lower one, change selectedTabId var below to null
        allTabs: [],
        resetDemoTabsTo: [
            {
                id: 213,
                tableId: 2,
                createdTimestamp: "16:46 10/10/2023",
                items: [
                    { itemId: 128, quantity: 12 },
                    { itemId: 129, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 126, quantity: 5 },
                    { itemId: 123, quantity: 2 },
                    { itemId: 124, quantity: 2 },
                    { itemId: 130, quantity: 3 },
                    { itemId: 131, quantity: 1 },
                ],
            },
            {
                id: 352,
                tableId: 3,
                createdTimestamp: "18:45 10/10/2023",
                items: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 7 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 131, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            {
                id: 353,
                tableId: 3,
                createdTimestamp: "18:46 10/10/2023",
                items: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 131, quantity: 8 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            {
                id: 354,
                tableId: 4,
                createdTimestamp: "18:47 10/10/2023",
                items: [
                    { itemId: 131, quantity: 1 },
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 5 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            {
                id: 355,
                tableId: 4,
                createdTimestamp: "18:48 10/10/2023",
                items: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 131, quantity: 1 },
                    { itemId: 125, quantity: 4 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            // {
            //     id: 356,
            //     tableId: 4,
            //     createdTimestamp: "18:46 10/10/2023",
            //     items: [
            //         { itemId: 126, quantity: 1 },
            //         { itemId: 127, quantity: 1 },
            //         { itemId: 125, quantity: 1 },
            //         { itemId: 124, quantity: 2 },
            //         { itemId: 128, quantity: 1 },
            //         { itemId: 123, quantity: 1 },
            //     ],
            // },
            // {
            //     id: 357,
            //     tableId: 4,
            //     createdTimestamp: "18:46 10/10/2023",
            //     items: [
            //         { itemId: 126, quantity: 1 },
            //         { itemId: 127, quantity: 1 },
            //         { itemId: 125, quantity: 1 },
            //         { itemId: 128, quantity: 1 },
            //         { itemId: 124, quantity: 2 },
            //         { itemId: 123, quantity: 1 },
            //     ],
            // },
            // {
            //     id: 358,
            //     tableId: 1,
            //     createdTimestamp: "18:46 10/10/2023",
            //     items: [
            //         { itemId: 126, quantity: 1 },
            //         { itemId: 127, quantity: 1 },
            //         { itemId: 124, quantity: 2 },
            //         { itemId: 125, quantity: 1 },
            //         { itemId: 128, quantity: 1 },
            //         { itemId: 123, quantity: 1 },
            //     ],
            // },
            {
                id: 359,
                tableId: 1,
                createdTimestamp: "18:46 10/10/2023",
                items: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 124, quantity: 2 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            {
                id: 360,
                tableId: 1,
                createdTimestamp: "18:46 10/10/2023",
                items: [
                    { itemId: 124, quantity: 2 },
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
        ],
        // to test logging in comment out below details and leave as empty {}
        loggedInUser: {
            // customData: {
            //     ownedTabs: [355, 356, 357],
            //     openTabs: [355, 356],
            //     forename: "David",
            //     surname: "Jones",
            //     role: "admin",
            // },
            // uid: "DUimqnbJbMY9SSzKhhyYcZMYke73",
            // email: "biser951+firetest12@gmail.com",
            // emailVerified: false,
            // isAnonymous: false,
            // providerData: [
            //     {
            //         providerId: "password",
            //         uid: "biser951+firetest12@gmail.com",
            //         displayName: null,
            //         email: "biser951+firetest12@gmail.com",
            //         phoneNumber: null,
            //         photoURL: null,
            //     },
            // ],
            // stsTokenManager: {
            //     refreshToken:
            //         "AMf-vBxdSGDshhMwllbu_vQG2xm4zfdhU60JGuagCdyLuA0emLwtkD9KdTSLs_amLeBLRA4vC1s06EDd_sCiKUsTynzSanAhvgeTRDJtyY3CBNQ9t0-CpIVQ7XuZXykaglfcgENFz3iLJT8w-sobKJIvGW-wUvo9Xw0V5oYawi_xCU9uxb5qWGiEwY0TVsTqHrVUCXbxCrWIRzJw6nfDgVCp66Hhb_9zIg",
            //     accessToken:
            //         "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZDA3YmJjM2Q3NWM2OTQyNzUxMGY2MTc0ZWIyZjE2NTQ3ZDRhN2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGlsbC1tYW5hZ2VyIiwiYXVkIjoidGlsbC1tYW5hZ2VyIiwiYXV0aF90aW1lIjoxNjk4MTU4ODkwLCJ1c2VyX2lkIjoiRFVpbXFuYkpiTVk5U1N6S2hoeVljWk1Za2U3MyIsInN1YiI6IkRVaW1xbmJKYk1ZOVNTektoaHlZY1pNWWtlNzMiLCJpYXQiOjE2OTgxNTg4OTAsImV4cCI6MTY5ODE2MjQ5MCwiZW1haWwiOiJiaXNlcjk1MStmaXJldGVzdDEyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiaXNlcjk1MStmaXJldGVzdDEyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.tIFAMZ0F0_Q_KDzAgiO4t1OeJXL2NBjIHz8rpRcijlgcpm9_8NFsRs7jH8xJ4Y7QEAxwPb2u1HIMyrnt3opUszZyPSt_rM_5Cujr9U2X8s4qRaoj6c-EQCK-eNCMGf61w2yl1B44gfmue5Ha6rbYhdIQXIM9GTOjzG-jOD2u9eIr-iFiN876Ayt4nOR6g1j3dQE7PBXt67R08QcIh2sAtNxlGsdOVUdAmCPjAdRmBdCYVATtRxZMaDb2pzAxu21S5HGb6wbyeHqKfwhXli2n73H1CPMDUR_aF5KSKc3vU3s9J3soHERGugAl2uUpxKJR5NG48APmh85HXjn8L33HHw",
            //     expirationTime: 1698162490747,
            // },
            // createdAt: "1698158890732",
            // lastLoginAt: "1698158890732",
            // apiKey: "AIzaSyA8zWUKjmu7mL_cW8t9sM5S6ZJhMDdik3s",
            // appName: "[DEFAULT]",
        },
        userAccessToken: null,
        allUsers: [],
        allUsersDetails: [],
        availableTables: [
            { tableId: 1, tableNumber: 1 },
            { tableId: 2, tableNumber: 2 },
            { tableId: 3, tableNumber: 3 },
            { tableId: 4, tableNumber: 4 },
        ],
        menuItems: [
            {
                itemId: 123,
                price: 6.99,
                name: "Fries",
                category: "food",
                itemImgURL:
                    "https://i.pinimg.com/474x/d3/a7/ed/d3a7ed6f0cf0288318aae4cf88fd4af1.jpg",
            },
            {
                itemId: 124,
                price: 3.5,
                name: "Fanta",
                category: "drink",
                itemImgURL:
                    "https://www.tokfood.com/image/cache/catalog/brands/fanta-logo1-256x256.jpg",
            },
            {
                itemId: 125,
                price: 3.5,
                name: "Coke",
                category: "drink",
                itemImgURL: "https://logowik.com/content/uploads/images/237_cocacola.jpg",
            },
            {
                itemId: 126,
                price: 5.99,
                name: "Malibu",
                category: "drink",
                itemImgURL:
                    "https://cdn.iconscout.com/icon/free/png-256/free-malibu-283573.png?f=webp",
            },
            {
                itemId: 127,
                price: 2.99,
                name: "Lemonade",
                category: "drink",
                itemImgURL:
                    "https://cdn.iconscout.com/icon/premium/png-256-thumb/lemonade-9237042-7535633.png?f=webp",
            },
            {
                itemId: 128,
                price: 4.99,
                name: "Gin",
                category: "drink",
                itemImgURL:
                    "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjQwOTIzZjE1NzA1NWZhYWZjNDU3NGFjMTRkMGZmMzM4Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=2d1261d744b35c8f53a0091497d63745143c588b3f4b4321da27f66cf5bac4bd",
            },
            {
                itemId: 129,
                price: 3.0,
                name: "Soda",
                category: "drink",
                itemImgURL:
                    "https://www.shutterstock.com/image-illustration/unbranded-regular-brushed-aluminum-can-260nw-1393696640.jpg",
            },
            {
                itemId: 130,
                price: 5.99,
                name: "Whiskey",
                category: "drink",
                itemImgURL:
                    "https://i.pinimg.com/originals/ab/93/11/ab9311c67670d84b590be4ec4ccdc7d1.jpg",
            },
            {
                itemId: 131,
                price: 4.5,
                name: "Apple Cider",
                category: "drink",
                itemImgURL:
                    "https://www.shutterstock.com/image-illustration/cider-bottle-apple-fruit-sketch-260nw-1560922523.jpg",
            },
        ],
        selectedTabId: null, //213,
        selectedItemId: 0,
        isLoading: false,
        error: null,
        initalLoad: true,
    },
    getters: {
        // Get the selected tab to show on main screen
        selectedTabId: (state) => state.selectedTabId,

        // Get tab details by id from state
        tabDetailsById: (state) => (id) => state.allTabs.find((x) => x.id === id), // confusing way of writing that (with two =>) but that's how it works

        // Get table number by id from state
        tableNumberFromId: (state) => (id) =>
            state.availableTables.find((x) => x.tableId === Number(id)).tableNumber,

        // Get menu item name by id from state
        menuItemNameFromId: (state) => (id) => state.menuItems.find((x) => x.itemId === id).name,
        // Get menu item price by id from state
        menuItemPriceFromId: (state) => (id) => state.menuItems.find((x) => x.itemId === id).price,

        // Get logged in user obj
        loggedInUser: (state) => state.loggedInUser,

        // return true or false based on if a user is logged in (used for navigation visibility )
        loggedInState: (state) => !!state.loggedInUser?.uid,

        // return current error message
        error: (state) => state.error,
    },
    // Mutations: Commit things to the store
    mutations: {
        // Add a tab to state
        addTab: (state, tab) => state.allTabs.push(tab),

        // Delete a tab from store
        deleteTab: (state, tabId) =>
            (state.allTabs = state.allTabs.filter((tab) => tab.id !== tabId)),

        // Change the selected tab in till main screen
        changeSelectedTabId: (state, newTabId) => (state.selectedTabId = newTabId),

        // Set selectedItemId to new val
        setSelectedItemId: (state, newId) => (state.selectedItemId = newId),

        // Set the logged in user to the new give object
        setLoggedInUser: (state, user) => {
            state.loggedInUser = user;
            console.log("user: ", user);

            // set access token as well
            let userAccessToken = user.stsTokenManager.accessToken;
            sessionStorage.setItem("userAccessToken", userAccessToken);
            state.userAccessToken = userAccessToken;
        },

        // Add a user to firestore
        addUserToAllUsers: (state, user) => {
            state.allUsers.push(user);
        },

        // store the additional details for the user (name, dob...) later this will change to go to the database as well so we store it
        addUserDetails: (state, additionalDetails) => {
            state.allUsersDetails.push(additionalDetails);
        },

        // Set loggedInUser to an empty object
        logUserOut: (state) => {
            // set user object to empty {}
            state.loggedInUser = {};

            // set userAccessToken in store and session storage to also a blank value null
            sessionStorage.setItem("userAccessToken", null);
            state.userAccessToken = null;
        },

        // set a global loading state
        setLoading: (state, payload) => (state.isLoading = payload),

        // set a global error message state
        setError: (state, payload) => (state.error = payload),

        // clear global error message
        clearError: (state) => (state.error = null),
        deleteItemFromTab: (state, payload) => {
            // find the tab we are editing
            let tab = state.allTabs.find((x) => x.id === payload.tabId);

            // delete item
            tab.items = tab.items.filter((item) => item.itemId !== payload.itemId);
            state.selectedItemId = 0; // clear selected item id if its been deleted
        },

        // // change quantity of an item in a tab (zero will remove it)
        // changeItemQuantity: (state, payload) => {
        //     // find the tab we are editing
        //     let tab = state.allTabs.find((x) => x.id === payload.tabId);

        //     // delete item if zero
        //     if (payload.newQuantity === 0) {
        //         tab.items = tab.items.filter((item) => item.itemId !== payload.itemId);
        //         state.selectedItemId = 0; // clear selected item id if its been deleted
        //     }
        //     //change to new quant
        //     else if (payload.newQuantity > 0) {
        //         // change quantity
        //         let item = tab.items.find((item) => item.itemId === payload.itemId);
        //         item.quantity = payload.newQuantity;
        //     } else {
        //         // Set error message
        //         state.error = "Invalid value passed to changeItemQuantity() mutation";
        //     }
        // },

        // add an item to the tab (when menu item is clicked)
        addItemToTab: (state, payload) => {
            // find the tab we are editing
            let tab = state.allTabs.find((x) => x.id === payload.tabId);

            // add the item to that tab's items list
            tab.items.push(payload.item);
        },

        // change quantity of an item in a tab
        changeItemQuantity: (state, payload) => {
            // find the tab we are editing
            let tab = state.allTabs.find((x) => x.id === payload.tabId);

            // change quantity
            let item = tab.items.find((item) => item.itemId === payload.itemId);
            item.quantity = payload.newQuantity;
        },
    },
    // Actions: perform operations such as async api calls etc.
    actions: {
        // Add an item to the tab (when menu item is clicked)
        addItemToTab: async ({ commit, dispatch, state }, payload) => {
            commit("addItemToTab", payload);

            // find the tab we are editing
            let tab = state.allTabs.find((x) => x.id === payload.tabId);

            // create a refrence to the document we want to update later in the firestore
            const docRef = doc(firestoreDB, "tabs", payload.tabId);

            // Firestore action to set data there
            let statusMessage = await dispatch("updateFirestoreTab", {
                docRef: docRef,
                newItems: tab.items,
            });
        },

        // change quantity of an item in a tab (zero will remove it)
        changeItemQuantity: async ({ commit, dispatch, state }, payload) => {
            // find the tab we are editing
            let tab = state.allTabs.find((x) => x.id === payload.tabId);

            // create a refrence to the document we want to update later in the firestore
            const docRef = doc(firestoreDB, "tabs", payload.tabId);
            console.log("payload: ", payload);

            // delete item if zero
            if (payload.newQuantity === 0) {
                // delete the item from the tab first, then dispatch an update with the new items array
                commit("deleteItemFromTab", payload);

                // Firestore action to set data there
                let statusMessage = await dispatch("updateFirestoreTab", {
                    docRef: docRef,
                    newItems: tab.items,
                });
                console.log("statusMessage: ", statusMessage);
            }
            //change to new quant
            else if (payload.newQuantity > 0) {
                // change quantity
                commit("changeItemQuantity", payload);
                // Firestore action to set data there
                let statusMessage = await dispatch("updateFirestoreTab", {
                    docRef: docRef,
                    newItems: tab.items,
                });
                console.log("statusMessage: ", statusMessage);
            } else {
                // Set error message
                state.error = "Invalid value passed to changeItemQuantity() action";
            }
        },

        // An imporvement would be to not update on each user action but use a x-second timer to reduce number of api calls. Would do it as follows:
        // changeItemQuantity: async ({ commit, state }, payload) => {
        // TODO: on the tab level, have a property changesNeedsSendingToFirestore,
        // toggle this to true once a change is made and start 5s timer. timer is
        // reset to 5s each time there is a change in the tab. if timer reaches 0, then
        // action below is tirggered to update any tabs with that property set to True
        //
        // add a blocking popup from chrome on exit of page to stop exit if there are still commits to be done!
        // },

        // Action that is triggered by the onSnapshot method in App.vue that updates the allTabs property every time data is changed in firestore
        updateTabsFromFSSnapshot: async ({ commit, state }, snapshot) => {
            let newAllTabs = [];
            snapshot.docs.forEach((tab) => {
                let id = tab.id;
                let payload = {
                    ...tab.data(),
                    id,
                };
                newAllTabs.push(payload);
            });
            console.log("newAllTabs: ", newAllTabs);
            state.allTabs = newAllTabs;

            if (state.initalLoad) {
                state.selectedTabId = state.allTabs[0]?.id;
                state.initalLoad = false;
            }
        },

        // Add a tab to firestore database collection and the vuex store allTabs property
        addTabToFirestoreAndStore: async ({ commit, state }, newTab) => {
            // commit the change to the firebase database, addDoc function takes 1. ReferenceToCollection 2. an object to add
            await addDoc(tabsColRef, newTab)
                .then((creatgedDocRef) => {
                    // add the id returned from firestore
                    newTab.id = creatgedDocRef.id;

                    // commit the change to the vuex store as well now with the new id
                    // commit("addTab", newTab);
                    // console.log("newTab saved to firestore: ", newTab);

                    // Set newly created tab as the selected one in store, so it shows on main page ready for editing
                    commit("changeSelectedTabId", newTab.id);
                })
                .catch((err) => console.log(err));
        },

        // Delete a tab from firestore and the vuex store allTabs property (should be an admin only action)
        deleteTab: async ({ commit, state }, tabId) => {
            // set up a ref to the exact doc to delete (takes 3 args: db, "nameOfColl", idToDelete)
            const docRef = doc(firestoreDB, "tabs", tabId);
            deleteDoc(docRef)
                .then(() => {
                    // change the selected tab id to a new one
                    let newIdIfPossible = state.allTabs[0]?.id;
                    state.selectedTabId = newIdIfPossible ? newIdIfPossible : 0;
                })
                .catch((err) => console.log(err));
        },

        // update firestore tab
        updateFirestoreTab: async (_cidn, { docRef, newItems }) => {
            console.log("newItems: ", newItems);
            let statusMessage = "";
            await updateDoc(docRef, { items: newItems })
                .then((returnedFromFirestore) => {
                    statusMessage = "updated successfully in firestore";
                })
                .catch((err) => {
                    console.log(err);
                    statusMessage = `update was unsuccessful: ${err.message}`;
                });
            return statusMessage;
        },

        // Action to create a user in firestore
        createUser: async ({ commit, state }, payload) => {
            console.log("in craeteUser Action, payload is: ", payload);

            // begin loading spinner
            commit("setLoading", true);

            // clear error
            commit("clearError");

            let result;
            // add to firestore using the firebaseAuth defined in mainjs
            await createUserWithEmailAndPassword(
                firebaseAuth,
                payload.newUsername,
                payload.newPassword
            )
                .then((userCredential) => {
                    // stop loading spinner
                    commit("setLoading", false);

                    // Sign up SUCCESSFUL
                    const user = userCredential.user;

                    // Add user to all users array
                    commit("addUserToAllUsers", user);

                    // Add additional details about the user to the separate array
                    let additionalDetails = {
                        uid: user.uid,
                        ownedTabs: [],
                        openTabs: [],
                        forename: payload.newForename,
                        surname: payload.newSurname,
                        role: payload.newRole,
                        dateCreated: user.createdAt,
                    };
                    commit("addUserDetails", additionalDetails); // later this will change to go to the database as well so we store it
                    console.log("stored allUsers: ", state.allUsers);
                    result = true;
                })
                .catch((error) => {
                    // stop loading spinner
                    commit("setLoading", false);

                    // save error message to error property in store
                    commit("setError", error.message);
                    result = null;
                });
            return result;
        },
        signUserIn: async ({ commit }, payload) => {
            let result;

            // begin loading spinner
            commit("setLoading", true);

            // perform firestore action to sign user in with email and pass
            await signInWithEmailAndPassword(firebaseAuth, payload.username, payload.password)
                .then((userCredential) => {
                    // stop loading spinner
                    commit("setLoading", false);

                    const user = userCredential.user;
                    console.log("USSSER: ", user);
                    console.log("user as returned from firestore signin method: ", user);
                    commit("setLoggedInUser", user);
                    result = `Logged in successfully with account ${user.email}`;

                    // clear any error messages from the error property in store
                    commit("clearError");
                })
                .catch((error) => {
                    // stop loading spinner
                    commit("setLoading", false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("errorCode: ", errorCode);
                    console.log("errorMessage: ", errorMessage);
                    result = errorMessage;

                    // save error message to error property in store
                    commit("setError", result);
                });

            return result;
        },
        // signUserInWithToken: async ({ commit }, userAccessToken) => {
        //     console.log("userAccessToken: ", userAccessToken);
        //     let result;

        //     // begin loading spinner
        //     commit("setLoading", true);

        //     // perform firestore action to sign user in with Token
        //     await signInWithCustomToken(firebaseAuth, userAccessToken)
        //         .then((userCredential) => {
        //             // stop loading spinner
        //             commit("setLoading", false);

        //             const user = userCredential.user;
        //             console.log(
        //                 "user as returned from firestore signin method with stored token: ",
        //                 user
        //             );
        //             commit("setLoggedInUser", user);
        //             result = `Logged in successfully with account ${user.email}`;
        //         })
        //         .catch((error) => {
        //             // stop loading spinner
        //             commit("setLoading", false);
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             console.log("errorCode: ", errorCode);
        //             console.log("errorMessage: ", errorMessage);
        //             result = errorMessage;

        //             // save error message to error property in store
        //             commit("setError", result);
        //         });
        // },
        resetTabsForDemo: async ({ commit, state }) => {
            state.store.alltabs = state.store.resetDemoTabsTo;
            // TODO: upload to firebase here
        },
    },

    // The end of Vue Store
});
