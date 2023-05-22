<template>
    <div class="page_footer">
        <span class="footer_content">{{ footer_content }}</span>
        <a href="https://tic-tac-toes-lol.netlify.app/"
            >Link to my other uselss page lol</a
        >
    </div>
</template>

<script>
export default {
    props: [`footer_content`],
    // data() {
    //     return {
    //         showBar: false,
    //         buffer: 50,
    //     };
    // },
    // mounted() {
    //     window.addEventListener("scroll", this.handleScroll);
    // },
    // beforeDestroy() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // },
    // methods: {
    //     handleScroll() {
    //         const distanceFromTop = window.pageYOffset + window.innerHeight;
    //         const documentHeight = document.body.scrollHeight;

    //         if (distanceFromTop >= documentHeight - this.buffer) {
    //             this.showBar = true;
    //         } else {
    //             this.showBar = false;
    //         }
    //     },
    // },
};
</script>

<style scoped>
.page_footer {
    display: flex;
    padding: 0pt 10pt 0pt 30pt;
    background: var(--primary-color);
    color: whitesmoke;
}
.page_footer > * {
    /* border: 15px solid orange;  <<< uncomment this to see effect of *star* */
    /* border: 15px solid orange; */
    margin: 15px;
}
a {
    color: aqua;
}
</style>
