<template>
    <div class="top_ribon">
        <img @click="print" alt="Logo" class="logo" :src="test" />
        <h1 class="title">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: [`logoPath`, `title`],
    data() {
        return {
            test: this.logoPath,
        };
    },
    methods: {
        print() {
            console.log(typeof this.test);
        },
    },
};
</script>

<style scoped>
.top_ribon {
    display: flex;
    padding: 30pt 10pt 30pt 30pt;
    background: #2c3e50;
    color: whitesmoke;
}
.top_ribon > * {
    /* border: 15px solid orange;  <<< uncomment this to see effect of *star* */
    margin: 15px;
}
img.logo {
    height: 119px;
    width: 119px;
    border-radius: 20%;
}
.title {
    height: 80%;
    margin-top: auto;
    margin-bottom: auto;
}
</style>
