<template>
    <div class="home">
        <h1>Homepage</h1>
        <p ref="r33">will be replaced by current date & time</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            repellendus quod expedita voluptates veniam ex praesentium
            accusantium architecto blanditiis. Obcaecati dolores cum, minima
            harum porro numquam, debitis quaerat.
        </p>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "HomeView",
    components: {},
    mounted() {
        this.$refs.r33.innerHTML = new Date();
    },
};
</script>
