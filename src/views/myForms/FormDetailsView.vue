<template>
    <h1>Form Details Page</h1>
    <p>Editing form: {{ id }}</p>
    <div class="main-content">
        <div class="left-container container" ref="left">
            <h3>Form Contents</h3>
        </div>
        <div class="right-container container" ref="right">
            <div v-if="!currently_editing">
                <AddNewSectionBtn />
            </div>
            <div v-if="currently_editing">
                <h3>Edit Section</h3>
            </div>
        </div>
    </div>
</template>

<script>
import AddNewSectionBtn from "@/components/AddNewSectionBtn.vue";

export default {
    name: "formDetails",
    components: {
        AddNewSectionBtn,
    },

    props: ["id"],
    data() {
        return {
            currently_editing: undefined,
        };
    },
    mounted() {
        let form_in_store = this.$store.state.forms.find((obj) => this.id == obj.id);
        this.$refs.left.innerHTML += form_in_store.formContents[0];
        this.$refs.left.innerHTML += form_in_store.formContents[1];
        let right = this.$refs.right;
    },
    methods: {
        addSection(el) {},
    },
    components: { AddNewSectionBtn },
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
