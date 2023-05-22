<template>
    <div class="main-content">
        <h1>Form Details Page</h1>
        <p>Editing form: {{ id }}</p>
        <p>Editing form: {{ form.title }}</p>
        <!-- <p>Editing form: {{ $route.params.formObj }}</p> -->

        <div class="left-container container" ref="left">
            <h3>Form Contents</h3>
        </div>
        <div class="right-container container" ref="right"></div>
    </div>
</template>

<script>
export default {
    name: "formDetails",
    props: ["id", "form"],
    data() {
        return {
            formContents: [
                `<div class="form-section">
                    <div class="section-element title">Forename:</div>
                    <input class="section-element single-line-input"></input>
                    <div class="section-element-controls">
                        <button class="button edit-section-button">Edit ⇨</button>
                        <button class="button delete-section-button">❌</button>
                    </div>
                </div>`,
                `<div class="form-section">
                    <div class="section-element title">Surname:</div>
                    <input class="section-element single-line-input"></input>
                    <div class="section-element-controls">
                        <button class="button edit-section-button">Edit ⇨</button>
                        <button class="button delete-section-button">❌</button>
                    </div>
                </div>`,
            ],
        };
    },
    mounted() {
        console.log(this.form);
        this.$refs.left.innerHTML += this.formContents[0];
        this.$refs.left.innerHTML += this.formContents[1];
        let right = this.$refs.right;
    },
};
</script>

<style>
.main-content {
    display: flex;
    justify-content: space-evenly;
}
h3 {
    font-weight: bold;
    text-decoration: underline;
}
.form-section {
    margin: 5px;
    border: 1px solid rgb(68, 66, 68);
    border-radius: 5px;
}

.section-element {
    margin: 5px;
}

.selection {
    background-color: rgba(74, 74, 74, 0.282);
}

.section-element-controls {
    position: relative;
    float: right;
    margin-right: 5px;
}
.edit-controls {
    border: 2px solid rgb(79, 175, 0);
    margin: 5px;
}
.container {
    border: 2px solid rgb(21, 0, 255);
    width: 40%;
}
</style>
