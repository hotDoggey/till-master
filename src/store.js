import { createStore } from "vuex";

export default createStore({
    state: {
        dummyTabs: {
            213: {
                id: 213,
                tableId: 2,
                createdTimestamp: "16:46 10/10/2023",
                items2: [
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
            352: {
                id: 352,
                tableId: 3,
                createdTimestamp: "18:45 10/10/2023",
                items2: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 7 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 131, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            353: {
                id: 353,
                tableId: 3,
                createdTimestamp: "18:46 10/10/2023",
                items2: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 131, quantity: 8 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            354: {
                id: 354,
                tableId: 4,
                createdTimestamp: "18:47 10/10/2023",
                items2: [
                    { itemId: 131, quantity: 1 },
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 5 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            355: {
                id: 355,
                tableId: 4,
                createdTimestamp: "18:48 10/10/2023",
                items2: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 131, quantity: 1 },
                    { itemId: 125, quantity: 4 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            // 356: {
            //     id: 356,
            //     tableId: 4,
            //     createdTimestamp: "18:46 10/10/2023",
            //     items2: [
            //         { itemId: 126, quantity: 1 },
            //         { itemId: 127, quantity: 1 },
            //         { itemId: 125, quantity: 1 },
            //         { itemId: 124, quantity: 2 },
            //         { itemId: 128, quantity: 1 },
            //         { itemId: 123, quantity: 1 },
            //     ],
            // },
            // 357: {
            //     id: 357,
            //     tableId: 4,
            //     createdTimestamp: "18:46 10/10/2023",
            //     items2: [
            //         { itemId: 126, quantity: 1 },
            //         { itemId: 127, quantity: 1 },
            //         { itemId: 125, quantity: 1 },
            //         { itemId: 128, quantity: 1 },
            //         { itemId: 124, quantity: 2 },
            //         { itemId: 123, quantity: 1 },
            //     ],
            // },
            // 358: {
            //     id: 358,
            //     tableId: 1,
            //     createdTimestamp: "18:46 10/10/2023",
            //     items2: [
            //         { itemId: 126, quantity: 1 },
            //         { itemId: 127, quantity: 1 },
            //         { itemId: 124, quantity: 2 },
            //         { itemId: 125, quantity: 1 },
            //         { itemId: 128, quantity: 1 },
            //         { itemId: 123, quantity: 1 },
            //     ],
            // },
            359: {
                id: 359,
                tableId: 1,
                createdTimestamp: "18:46 10/10/2023",
                items2: [
                    { itemId: 126, quantity: 1 },
                    { itemId: 124, quantity: 2 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
            360: {
                id: 360,
                tableId: 1,
                createdTimestamp: "18:46 10/10/2023",
                items2: [
                    { itemId: 124, quantity: 2 },
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 1 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            },
        },
        loggedInUser: {
            id: 32565212,
            ownedTabs: [355, 356, 357],
            openTabs: [355, 356],
            forename: "David",
            surname: "Jones",
            role: "admin-8846217777",
            dateCreated: "09/10/23",
        },
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
    },
    getters: {
        tabDetailsById: (state) => (id) => state.dummyTabs[id], // confusing way of writing that (with two =>) but thats how it works
        tableNumberFromId: (state) => (id) =>
            state.availableTables.find((x) => x.tableId === Number(id)).tableNumber,
        menuItemNameFromId: (state) => (id) => state.menuItems.find((x) => x.itemId === id).name,
        menuItemPriceFromId: (state) => (id) => state.menuItems.find((x) => x.itemId === id).price,
    },
    mutations: {
        incrementUniqueSectionId: (state) => state.currentUniqueSectionId++,
        addTab: (state, tab) => {
            state.dummyTabs[tab.id] = tab;
        },
    },
    actions: {
        giveMeNewUniqueSectionId: ({ commit, state }) => {
            commit("incrementUniqueSectionId");
            console.log(state.currentUniqueSectionId);
            return state.currentUniqueSectionId;
        },
    },

    // Define your mutations, actions, getters, etc. here
});
