<template>
    <div class="singe-tab-details-container">
        <div class="tab-details">
            <!-- Container1 -->
            <div class="container1 visual-border">
                <h2 class="container-title">Menu</h2>
                <div class="menu-items-container">
                    <div v-for="item in menuItems" class="menu-item visual-border">
                        <img :src="item.itemImgURL" :alt="item.name" class="menu-item-img" />
                        <div class="menu-item-title">{{ item.name }}</div>
                        <div class="menu-item-price">{{ displayableStrFromPrice(item.price) }}</div>
                    </div>
                </div>

                <!-- numpad -->
                <div class="numpad-container">
                    <change-quantity-numpad
                        v-if="showQuantityNumpad"
                        @closeQuantityNumpad="showQuantityNumpad = false"
                        :currentlySelectedDetails="{ currentTab, selectedItemId }"
                    ></change-quantity-numpad>
                </div>
            </div>

            <!-- Container2 -->
            <div class="container2 visual-border items-container">
                <h2 class="container-title">Table {{ currentTab.tableId }}</h2>

                <div class="tab-items-list">
                    <!-- TODO: Make overflow-y work -->
                    <div
                        v-for="item in currentTab.items"
                        :key="item.itemId"
                        :class="[
                            'tab-item-row',
                            'pa-2',
                            { selectedItem: selectedItemId === item.itemId },
                        ]"
                        @click="newSelectedItemInTab(item.itemId)"
                    >
                        <div class="item-name">
                            {{ _menuItemNameFromId(item.itemId) }}
                        </div>
                        <!-- TODO: fix missaligntment if adding more than 9 -->
                        <div class="item-price-quantity">
                            {{ displayableStrFromPrice(_menuItemPriceFromId(item.itemId)) }} |
                            {{ item.quantity }}
                        </div>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="tab-total-text pb-2">Total: £{{ getTotalTabValue }}</div>
                <!-- List of menu items on the current tab (price, quantity) -->
            </div>
        </div>

        <!-- Container3 -->
        <div class="container3 visual-border action-buttons">
            <!-- Change Qantity Button -->
            <div
                class="action-btn"
                @click="showQuantityNumpad = !showQuantityNumpad"
                v-if="selectedItemId"
            >
                <font-awesome-icon class="icon-pad-right" icon="hashtag" />Change Quantity
            </div>
            <!-- Remove Selected Button -->
            <div class="action-btn" @click="removeItemFromTab" v-if="selectedItemId">
                <font-awesome-icon class="icon-pad-right" icon="trash" />Remove Selected
            </div>
            <!-- Close Tab Button -->
            <div class="action-btn" @click="createTabPopupOpen = true">
                <font-awesome-icon class="icon-pad-right" icon="sack-dollar" />Close Tab
            </div>
        </div>
    </div>
</template>

<script>
import ChangeQuantityNumpad from "./ChangeQuantityNumpad.vue";
export default {
    props: ["selectedTabId"],
    components: {
        ChangeQuantityNumpad,
    },
    // data() {
    //     return {
    //         selectedItemId: 12,
    //     };
    // },
    data: function () {
        // make data a function, this allows you to get access to this. and therefore the store within here
        return {
            menuItems: this.$store.state.menuItems,
            showQuantityNumpad: false,
        };
    },
    watch: {
        // clicking to a new tab needs to reset the numpad popup
        selectedItemId(newId, oldId) {
            if (newId === 0) this.showQuantityNumpad = false;
        },
    },
    computed: {
        selectedItemId() {
            return this.$store.state.selectedItemId;
        },
        // get the currently selected tab using the ID from the prop and by looking at the store
        currentTab() {
            this.newSelectedItemInTab(0); // reset the selected item once a new tab is opened or loaded
            return this.$store.getters.tabDetailsById(this.selectedTabId);
        },
        getTotalTabValue() {
            let total = 0;
            this.currentTab.items.forEach((item) => {
                let price = this.$store.getters.menuItemPriceFromId(item.itemId);
                total += price * item.quantity;
            });
            return total.toFixed(2);
        },
    },
    methods: {
        newSelectedItemInTab(newId) {
            this.showQuantityNumpad = false;
            this.$store.commit("setSelectedItemId", newId);
        },
        _menuItemNameFromId(id) {
            return this.$store.getters.menuItemNameFromId(id);
        },
        displayableStrFromPrice(price) {
            return `£${price.toFixed(2)}`;
        },
        _menuItemPriceFromId(id) {
            return this.$store.getters.menuItemPriceFromId(id);
        },
        // Remove an item from tab
        removeItemFromTab() {
            // check an item is actually selected
            if (this.selectedItemId) {
                let payload = {
                    tabId: this.selectedTabId,
                    itemId: this.selectedItemId,
                    newQuantity: 0,
                };
                console.log("payload: ", payload);
                // store mutation (commit) changeItemQuantity
                this.$store.commit("changeItemQuantity", payload);

                // end with clearing the selected item
                this.newSelectedItemInTab(0);
            }
        },
    },
};
</script>

<style scoped>
/* General container */
.singe-tab-details-container {
    height: 100%; /* make it fill the whole vertical space in container */
}

.tab-details {
    display: grid;
    grid-template-columns: 60% 40%;
    height: 90%;
}
.icon-pad-right {
    margin-right: 0.4rem;
}

/* Menu Items Container 1 */
.container1 {
    display: flex;
    flex-direction: column;
    position: relative;
}
.menu-items-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0.19rem; /* (around 3px) */
    width: 100%;
    padding: 0.3rem;

    /* Responsive layout for smaller screens */
    @media (max-width: 1650px) {
        grid-template-columns: repeat(6, 1fr); /* Switch to a four column layout */
    }
    @media (max-width: 1475px) {
        grid-template-columns: repeat(5, 1fr); /* Switch to a three column layout */
    }
    @media (max-width: 1250px) {
        grid-template-columns: repeat(4, 1fr); /* Switch to a three column layout */
    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr); /* Switch to a three column layout */
    }
    @media (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr); /* Switch to a three column layout */
    }
}
.menu-item {
    width: 100%; /* Each item takes full width of its column */
    height: 120px;
    box-sizing: border-box; /* Include border and padding in the specified width and height */
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.menu-item-img {
    position: absolute;
    height: 100%;
    min-width: 100%;
    filter: brightness(50%) opacity(0.35) blur(0px);
    z-index: 0;
}

.menu-item-title,
.menu-item-price {
    position: relative; /* Ensure the text is in the normal flow */
    z-index: 1; /* Ensure text is on top of the image */
    font-size: 1.19rem;
    text-align: center; /* Center the text horizontally */
    font-weight: bold;
    color: rgb(0, 0, 0); /* Set the color for better readability */
    padding: 0 10px; /* Add some padding to the text for better visibility */
}

.numpad-container {
    width: 340px;
    height: 365px; /* 70 is entry field, each box below is 85 in 4x3 grid form*/
    position: absolute;
    bottom: 0;
    right: 0;
}

/* Items Container 2 */
.container2 {
    display: flex;
    flex-direction: column;
}
.container-title {
    padding: 0.25rem 0;
    font-size: 1.75rem;
}
.tab-items-list {
    overflow-y: auto;
    max-height: 100%;
    background-color: #ccc; /* Set a background color for the boxes */
}
.item-name {
    background-color: #ccc; /* Set a background color for the boxes */
    padding: 0;
    margin: 0;
}
.tab-item-row {
    display: flex;
    margin: 0.25rem 0.75rem;
    cursor: pointer;
    justify-content: space-between;
}
.selectedItem,
.selectedItem > * {
    background-color: var(--selected-color);
    /* Set a background color for the selected item to be lighter and contrast to the darker background */
}
.tab-total-text {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 1.5rem;
}

/* Action Buttons Container 3 */
.container3 {
    height: 10%;
    display: flex;
    justify-content: flex-end;
    padding-top: 3px;
}
.action-btn {
    color: var(--text-color-D);
    background-color: var(--secondary-color-D);
    border: solid black 2px;
    margin-bottom: 6px;
    max-height: 3.5rem;
    cursor: pointer;
    max-width: 12rem;
    min-width: 10rem;
    margin: 0.5rem;
    display: flex;
    justify-content: center; /* Horizontally center the content within the div */
    align-items: center; /* Vertically center the content within the div */
}
</style>
