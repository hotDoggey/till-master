<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="10" lg="8">
                <!-- popup component -->

                <v-alert
                    v-if="showSuccess"
                    type="success"
                    icon="false"
                    text="User was created successfully!"
                    closable
                ></v-alert>
                <create-user-popup
                    :popupOpenState="createUserPopupOpen"
                    @closeCreateUserPopup="createUserPopupOpen = false"
                    @createdUser="showSuccessOn4sTimer"
                ></create-user-popup>

                <!-- Create user button -->
                <v-row justify="end">
                    <v-col class="text-right pt-10 pr-2 pb-5">
                        <v-btn @click="createUserPopupOpen = true">Add a user</v-btn>
                    </v-col>
                </v-row>

                <!-- Users Listing -->

                <div class="table-container">
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
                    <div class="demo-text hint-text">
                        <p @click="resetTabsForDemo" ref="resetText">
                            Note: This is only an example list with hard coded user data. At this
                            point I have not yet implemented the full user management functionality.
                            Only logging in and creating a user is supported at this time.
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CreateUserPopup from "./CreateUserPopup.vue";
export default {
    components: { CreateUserPopup },
    data() {
        return {
            createUserPopupOpen: false,
            showSuccess: false,
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
                    role: "Till User",
                    dateCreated: "11/10/2023",
                    openTabs: "2",
                },
                {
                    userId: "13686",
                    forename: "Michael",
                    surname: "Johnson",
                    role: "Till User",
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
            dKeyPressed: false,
        };
    },
    methods: {
        async showSuccessOn4sTimer() {
            this.showSuccess = true;
            // timer for 4s
            await setTimeout(() => {
                // on end of timer
                this.showSuccess = false;
            }, 4000);
        },
        resetTabsForDemo() {
            if (this.dKeyPressed) this.$store.dispatch("resetTabsForDemo");
        },
    },
    mounted() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "d") {
                this.dKeyPressed = true;
            }
        });
        document.addEventListener("keyup", (event) => {
            if (event.key === "d") {
                this.dKeyPressed = false;
            }
        });
    },
    // Optional: Remove the key event listeners when the component is destroyed
    beforeDestroy() {
        document.removeEventListener("keydown", this.keyDownHandler);
        document.removeEventListener("keyup", this.keyUpHandler);
    },
};
</script>

<style scoped></style>
