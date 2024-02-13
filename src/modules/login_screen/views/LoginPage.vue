<template>
    <h1 class="pt-16">Login</h1>

    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="6" class="pt-12 v-col-custom">
                <v-form action="submit" @submit.prevent="attemptLogin" class="login-form">
                    <v-text-field
                        v-model="username"
                        :rules="[(v) => !!v || 'You must enter a Username.']"
                        label="Username"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        type="password"
                        :rules="[(v) => !!v || 'You must enter a Password.']"
                        label="Password"
                        required
                    ></v-text-field>

                    <div class="text-center">
                        <v-btn type="submit" class="mt-6 login-btn">Login</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>

    <div class="demo-text hint-text allow-text-selection">
        <p>Demo version. Use the following details to login and view the rest of the system:</p>
        <p>Username: test_admin_user123@example.com</p>
        <p>Password: 123456</p>
        <p></p>
    </div>
    <div v-if="isLoading">Loading...</div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
    },
    mounted() {},
    methods: {
        async attemptLogin() {
            // create a payload object with entered information on form
            let payload = {
                username: this.username,
                password: this.password,
            };

            // when adding the spinner i will prob have to use the promise it returns with a race thing to time out after x seconds
            let result = await this.$store.dispatch("signUserIn", payload);
            console.log("result within loginpage.vue!: ", result);
            this.$router.push({ name: "till_main" });
        },
    },
};
</script>

<style>
.login-form {
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
}
.login-btn {
    width: 100%; /* Adjust the width as needed */
    margin: 0 auto; /* center the button */
}
.demo-text {
    padding-top: 6rem;
}
</style>
