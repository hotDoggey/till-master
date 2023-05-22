<template>
    <h1>My Forms</h1>
    <div v-for="form in forms" :key="form.id" class="form">
        <router-link
            :to="{
                name: 'formDetails',
                params: { id: form.id },
                props: { form: form },
            }"
        >
            <h2>{{ form.title }}</h2>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            forms: [
                { title: "Form 1", id: 1, details: "lorem" },
                { title: "Form 2", id: 2, details: "lorem" },
                { title: "Form 3", id: 3, details: "lorem" },
            ],
        };
    },
};
</script>
<style>
.form h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.form h2:hover {
    background: #ddd;
}

form a {
    text-decoration: none;
}
</style>
