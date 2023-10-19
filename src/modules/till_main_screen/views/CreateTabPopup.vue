<template>
    <!-- Create Tab Popup -->
    <v-dialog persistent v-model="modelValue" v-if="popupOpenState" width="600">
        <v-card class="pa-4">
            <v-card-title class="headline grey lighten-2"> Create New Tab </v-card-title>
            <v-form action="submit" class="login-form" @submit.prevent>
                <!-- Select Table Number -->
                <v-select
                    v-model="_selectedTableId"
                    :items="availableTables"
                    item-value="tableId"
                    item-title="tableNumber"
                    :rules="[(v) => !!v || 'Table Number is required']"
                    label="Table Number"
                    required
                ></v-select>
            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    :disabled="_selectedTableId === '' ? true : false"
                    type="submit"
                    @click="createTab"
                >
                    Create
                </v-btn>
                <v-btn color="primary" text @click="cancelCreate"> Cancel </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["popupOpenState"],
    data() {
        return {
            modelValue: true,
            _selectedTableId: "",
        };
    },
    computed: {
        availableTables() {
            //TODO: make sure we cant create a tab for a table which already has an open tab
            return this.$store.state.availableTables; // is an array of objects that each look like: { tableId: 1, tableNumber: 1 },
        },
        selectedTableObj() {
            // TODO: Delete if unused by the end
            return this.$store.state.availableTables.find(
                (x) => x.tableId === this._selectedTableId
            );
        },
        formIsValid() {
            return _selectedTableId ? true : false;
        },
    },

    methods: {
        createTab() {
            // TODO: see why the validation of form doesnt work - can submit with blank table
            // set up date created time
            let curretTimeUTC = Date.now(); // TODO: this will be the id for now- change to firebase id once that is imprlementd
            let currentTimeStr = this.dateInHhMmYyyyMmDd(curretTimeUTC);

            // Create newTab using entered table number and other details
            let newTab = {
                id: curretTimeUTC,
                tableId: this._selectedTableId,
                createdTimestamp: currentTimeStr,
                createdTimestampUTC: curretTimeUTC,
                items: ["Gin", "Soda", "Lemonade", "Malibu", "Fries"], // TODO: remove once
                items2: [
                    // TODO: make this an empty array to start with
                    { itemId: 126, quantity: 1 },
                    { itemId: 127, quantity: 1 },
                    { itemId: 125, quantity: 7 },
                    { itemId: 128, quantity: 1 },
                    { itemId: 131, quantity: 1 },
                    { itemId: 123, quantity: 1 },
                ],
            };

            // create an entry in the vue store
            this.$store.commit("addTab", newTab);

            // close popup and clear selected table
            console.log("CREATED tab, closing popup", newTab);
            this._selectedTableId = "";
            this.$emit("createdTab", curretTimeUTC);
        },
        cancelCreate() {
            // close popup and clear selected table
            console.log("only closing popup, no tab was created");
            this._selectedTableId = "";
            this.$emit("closeCreateTabPopup");
        },
        // Function to retrun a human readable string e.g. "16:46 10/10/2023"
        dateInHhMmYyyyMmDd(isoDate) {
            // convert the given isoDate to a date obj
            const date = new Date(isoDate);
            // function to add 0 to single digit numbers
            const padTwoDigits = (num) => num.toString().padStart(2, "0");

            // created the string parts
            const timeStr = `${padTwoDigits(date.getHours())}:${padTwoDigits(date.getMinutes())}`;
            const dateStr = `${date.getFullYear()}/${padTwoDigits(
                date.getMonth() + 1
            )}/${padTwoDigits(date.getDate())}`;

            // return the string parts together
            return `${timeStr} ${dateStr}`;
        },
    },
};
</script>

<style></style>
