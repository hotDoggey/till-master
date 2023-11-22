<template>
    <!-- Create Tab Popup -->
    <v-dialog persistent v-model="modelValue" v-if="popupOpenState" width="600">
        <v-card class="pa-4">
            <v-card-title class="headline grey lighten-2"> Create New User </v-card-title>
            <v-container>
                <v-row>
                    <v-col>
                        <!-- New user form -->
                        <v-form @submit.prevent="onCreateUser" class="add-user-form">
                            <!-- forename -->
                            <v-text-field
                                class="ma-2 pa-2"
                                v-model="newForename"
                                :rules="[(v) => !!v || 'Forename is required']"
                                label="Forename"
                                required
                            ></v-text-field>

                            <!-- surname -->
                            <v-text-field
                                class="ma-2 pa-2"
                                v-model="newSurname"
                                :rules="[(v) => !!v || 'Surname is required']"
                                label="Surname"
                                required
                            ></v-text-field>

                            <!-- email as username -->
                            <v-text-field
                                class="ma-2 pa-2"
                                v-model="newUsername"
                                type="email"
                                :rules="[(v) => !!v || 'Username is required']"
                                label="Username"
                            ></v-text-field>

                            <!-- password -->
                            <v-text-field
                                ref="passField"
                                class="ma-2 pa-2"
                                v-model="newPassword"
                                type="password"
                                :rules="[(v) => !!v || 'Password is required']"
                                label="Password"
                                required
                            ></v-text-field>

                            <!-- role -->
                            <v-select
                                class="role-dropdown"
                                v-model="newRole"
                                :items="[{ roleId: 'admin', roleName: 'Admin' }]"
                                item-value="roleId"
                                item-title="roleName"
                                :rules="[(v) => !!v || 'Role is required']"
                                label="Role"
                                required
                            ></v-select>
                            <!-- TODO: better use of this message needed - prob pass back to manage users screen -->
                            <div>{{ successMessage }}</div>
                            <v-alert v-if="error" type="error" :text="error"></v-alert>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-progress-circular
                                    v-if="isLoading"
                                    indeterminate
                                    color="primary"
                                ></v-progress-circular>
                                <v-btn
                                    color="primary"
                                    text
                                    :disabled="formIsInvalid || isLoading"
                                    type="submit"
                                >
                                    Create User
                                </v-btn>
                                <v-btn color="primary" text @click="cancelCreate"> Cancel </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["popupOpenState"],
    data() {
        return {
            modelValue: true,
            newForename: "",
            newSurname: "",
            newUsername: "",
            newPassword: "",
            newRole: "admin",
            successMessage: "",

            _selectedTableId: "",
        };
    },
    computed: {
        formIsInvalid() {
            let result =
                this.newForename === "" ||
                this.newSurname === "" ||
                this.newUsername === "" ||
                this.newPassword === "" ||
                this.newRole === ""
                    ? true
                    : false;
            return result;
        },
        error() {
            return this.$store.getters.error;
        },
        isLoading() {
            return this.$store.state.isLoading;
        },
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
            // if result is okay
            if (result) {
                this.successMessage = "Created user successfully!";
                console.log("CREATED user, closing popup", result);
                this.$emit("createdUser");
                this.cancelCreate();
            }
            // there was an error:
            else {
                // this.$store.error
            }
            // TODO: Add a spinner to button?
            // close popup and clear selected table
        },

        cancelCreate() {
            // close popup and clear selected table
            console.log("closing popup");
            this.$emit("closeCreateUserPopup");
        },
    },
};
</script>

<style>
.role-dropdown {
    width: 100%;
    padding: 0.4rem 0.9rem; /* Adjust the padding as needed */
}
</style>
