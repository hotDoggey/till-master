<template>
    <div class="page-container">
        <!-- popup component -->
        <create-user-popup
            :popupOpenState="createUserPopupOpen"
            @closeCreateUserPopup="createUserPopupOpen = false"
        ></create-user-popup>

        <!-- Create user button -->
        <div class="add-user-action-btn">
            <v-btn @click="createUserPopupOpen = true">Add a user</v-btn>
        </div>

        <div class="table-container">
            <!-- Users Listing -->
            <v-table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>Role</th>
                        <th>Date Created</th>
                        <th>Open Tabs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.name">
                        <td>{{ user.userId }}</td>
                        <td>{{ user.forename }}</td>
                        <td>{{ user.surname }}</td>
                        <td>{{ user.role }}</td>
                        <td>{{ user.dateCreated }}</td>
                        <td>{{ user.openTabs }}</td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script>
import CreateUserPopup from "./CreateUserPopup.vue";
export default {
    beforeDestroy() {
        // Remove scrollbar on leaving
        this.$root.setYScrollVisibilityTo(false);
    },
    components: { CreateUserPopup },
    data() {
        return {
            createUserPopupOpen: false,
            newForename: "",
            newSurname: "",
            newUsername: "",
            newPassword: "",
            newRole: "admin",

            successMessage: "",
            users: [
                {
                    userId: "13684",
                    forename: "David",
                    surname: "Jones",
                    role: "Admin",
                    dateCreated: "11/10/2023",
                    openTabs: "0",
                },
                {
                    userId: "13685",
                    forename: "Emily",
                    surname: "Smith",
                    role: "User",
                    dateCreated: "11/10/2023",
                    openTabs: "2",
                },
                {
                    userId: "13686",
                    forename: "Michael",
                    surname: "Johnson",
                    role: "User",
                    dateCreated: "11/10/2023",
                    openTabs: "1",
                },
                {
                    userId: "13687",
                    forename: "Emma",
                    surname: "Williams",
                    role: "Admin",
                    dateCreated: "11/10/2023",
                    openTabs: "3",
                },
            ],
        };
    },
    methods: {
        async onCreateUser() {
            // create a payload object with entered information on form
            let payload = {
                newForename: this.newForename,
                newSurname: this.newSurname,
                newUsername: this.newUsername,
                newPassword: this.newPassword,
                ownedTabs: [],
                openTabs: [],
                newRole: this.newRole,
                dateCreated: "09/10/23",
            };
            // run vuex action for createUser using the payload
            let result = await this.$store.dispatch("createUser", payload);
            // TODO: Add a spinner to button?
            // TODO: Make the shown message look better than just text - popup/modal?
            console.log("result: ", result);
            this.successMessage = result;
        },
    },
};
</script>

<style scoped>
.page-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

/* TABLE STYLES */
.table-container {
    width: 55%;
    margin: 0 auto; /* Center the table */
}
th,
td {
    padding: 0.125rem 1.25rem;
}
.add-user-action-btn {
    width: 55%;
    display: flex;
    justify-content: center;
    padding: 1rem 0; /* Add padding to the button */
}
</style>
