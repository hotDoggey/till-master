<template>
    <div class="page-container">
        <!-- Open Tabs Container -->
        <div class="open-tabs-container visual-border">
            <!-- Open Tabs List -->
            <h2 class="allow-text-selection">Open Tabs</h2>
            <div class="tabs-list-container"></div>
            <v-list class="tabs-list">
                <v-list-item
                    v-for="tab in dummyTabs"
                    :class="['mini-tab', { selectedTab: selectedTabId === tab.id }]"
                    :key="tab.id"
                    :title="'Table ' + tab.tableId + ' - ' + tab.createdTimestamp"
                    :subtitle="itemsToStr(tab.items)"
                    @click="openTab(tab.id)"
                ></v-list-item>
            </v-list>

            <!-- Create Tab Button -->
            <div class="mini-tab create-tab-btn" @click="createTabPopupOpen = true">
                <font-awesome-icon class="icon-pad-right" icon="circle-plus" />Create Tab
            </div>
        </div>

        <!-- Right Main Container -->
        <div class="singe-tab-details">
            <single-tab-view :selectedTabId="selectedTabId">
                <!-- remember you can use slots
                <template v-slot:namedSlot>
                    An image for example.
                </template>
                OR
                <template #otherNamedSlot>
                    Caption copntent
                </template>
                
                In the component, the code will look like this:
                <div>
                    <slot name="namedSlot">
                        <img src="some/url" />
                    </slot>
                </div>
                <p>
                    <slot name="otherNamedSlot"> </slot>
                </p>
            -->
            </single-tab-view>
        </div>
    </div>

    <!-- Create Tab Popup -->
    <create-tab-popup
        :popupOpenState="createTabPopupOpen"
        @closeCreateTabPopup="createTabPopupOpen = false"
        @createdTab="closePopupAndMakeSelected"
    >
        <!--  -->
    </create-tab-popup>
</template>

<script>
import CreateTabPopup from "./CreateTabPopup.vue";
import SingleTabView from "./SingleTabView.vue";
export default {
    mounted() {
        // TODO: remember I made these globals, remove if not needed due to doing most of auth stuff in the store.js
        // console.log("this.$firebaseApp: ", this.$firebaseApp);
        // console.log("this.$firebaseAuth: ", this.$firebaseAuth);
    },
    components: {
        CreateTabPopup,
        SingleTabView,
    },
    data() {
        return {
            createTabPopupOpen: false,
            selectedTabId: 213,
        };
    },
    computed: {
        // computed is the way to get vuex getters! will always update and get the latest state
        dummyTabs() {
            return this.$store.state.dummyTabs; // Get sorted tabs from store
        },
    },
    methods: {
        itemsToStr(items) {
            // console.log("why is this running??");
            // build array of item names
            let itemNamesArr = [];
            items.forEach((item) =>
                itemNamesArr.push(this.$store.getters.menuItemNameFromId(item.itemId))
            );
            let str = itemNamesArr.toString();
            return str.length >= 20 ? str.slice(0, 20) + "..." : str;
        },
        openTab(newId) {
            // changes the selectedTabId and as this is passed to the SingleTabView component as a prop, the component handles the rerender based on the new value using its computed value that gets re-evaluated
            this.selectedTabId = newId;
        },
        // Once the create tab popup creates a tab, it will emit an event that fires this function which will set the selected Tab as that one
        closePopupAndMakeSelected(newId) {
            // Close the popup
            this.createTabPopupOpen = false;
            // View newly created tab
            this.selectedTabId = newId;
        },
    },
};
</script>

<style scoped>
.page-container {
    display: flex;
    height: 800px;
    overflow-y: hidden; /* hide main scrollbar */
}

/* Left Container */
.open-tabs-container {
    flex: 1; /* Take up 1/5 (20%) of the available space */
    display: flex;
    flex-direction: column;
    gap: 10px; /* Adjust the gap between the list and create tab button */
    background-color: #ccc; /* Set a background color for the boxes */
    margin: 0.5rem;
    margin-right: 0; /* prevents doubled up margin between the two containers on the page  */
    height: 100%;
    justify-content: space-between; /* make create tab button floating at the bottom */
}

.tabs-list {
    margin: 0.5rem;
    margin-right: 0; /* remove space between scrollbar and edge of container */
    padding: 0; /* remove unaligned space between top and the scroll bar end */
    padding-right: 0.2rem; /* add space between list items and scrollbar */
    background-color: var(--primary);
    margin-right: 0.2rem;
}

.mini-tab {
    border: solid black 2px;
    background-color: var(--secondary-color-D);
    color: var(--text-color-D);
    margin-bottom: 6px;
    min-height: 4.5rem;
    cursor: pointer;
}
.mini-tab.selectedTab {
    background-color: var(--selected-color);
    border: solid rgb(59, 59, 59) 1px;
}

.create-tab-btn {
    margin: 0.5rem;
    margin-bottom: 0.75rem;
    min-height: 4rem;
    margin-top: 0;
    display: flex;
    justify-content: center; /* Horizontally center the content within the div */
    align-items: center; /* Vertically center the content within the div */
}

.icon-pad-right {
    margin-right: 0.4rem;
}

/* Right Container */
.singe-tab-details {
    flex: 4; /* Take up 4/5 (80%) of the available space */
    box-sizing: border-box; /* Include border and padding in the specified width and height */
    background-color: #ccc; /* Set a background color for the boxes */
    margin-right: 0;
    height: 100%;
    margin: 0.5rem;
}

/* Thin scrollbar track */
::-webkit-scrollbar {
    width: 6px; /* Adjust the width to make it thin or thick as desired */
}

/* Thin scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
    background: #888; /* Change the color of the thumb */
    border-radius: 6px; /* Rounded edges for the thumb */
}

/* Thin scrollbar track on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Change the color when hovering over the thumb */
}

/* Thin scrollbar track on the scrollbar track area */
::-webkit-scrollbar-track {
    background: #f0f0f0; /* Change the color of the track */
    border-radius: 6px; /* Rounded edges for the track */
}
</style>
