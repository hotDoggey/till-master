<template>
    <v-form action="submit" class="login-form">
        <v-text-field
            class="max-width"
            v-model="username"
            :rules="usernameRules"
            label="Username"
        ></v-text-field>
        <v-text-field
            class="max-width"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
        ></v-text-field>

        <div class="input-group login-btn">
            <v-btn type="submit" block class="mt-2">Login</v-btn>
        </div>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            usernameRules: [
                (value) => {
                    if (value) return true;
                    return "You must enter a Username.";
                },
            ],
            passwordRules: [
                (value) => {
                    if (value) return true;
                    return "You must enter a password.";
                },
            ],
        };
    },
    mounted() {},
};
</script>

<style>
.login-form {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 3rem 35rem 0 35rem;
}

.max-width {
    text-align: left; /* Left-align labels */
    width: 100%; /* Make input fields full width */
    margin-bottom: 15px; /* add apacing between field vertically */
}
.input-group {
    width: 100%; /* Make input fields full width */
    text-align: left; /* Left-align labels */
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    font-size: 16px;
}

.login-btn {
    color: var(--btn-text-color-L);
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    padding: 1rem 1rem;
}
</style>
