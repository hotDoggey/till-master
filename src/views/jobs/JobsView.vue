<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <h2>{{ job.title }}</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jobs: [
                { title: "Web Dev", id: 1, details: "lorem" },
                { title: "Game Dev", id: 2, details: "lorem" },
                { title: "Software Dev", id: 3, details: "lorem" },
            ],
        };
    },
};
</script>
<style></style>
