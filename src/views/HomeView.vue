<template>
  <div class="home">
    <h1>Homepage</h1>
    <p ref="r33">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus
      quod expedita voluptates veniam ex praesentium accusantium architecto
      blanditiis. Obcaecati dolores cum, minima harum porro numquam, debitis
      quaerat quibusdam accusantium recusandae eum placeat exercitationem amet
      hic! Debitis, possimus hic.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus
      quod expedita voluptates veniam ex praesentium accusantium architecto
      blanditiis. Obcaecati dolores cum, minima harum porro numquam, debitis
      quaerat.
    </p>
    <textarea id="editor" v-model="editorData"></textarea>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassicEditor from "../ckeditor/ckeditor.js";

export default {
  data() {
    return {
      editorData: "",
    };
  },
  name: "HomeView",
  components: {},
  mounted() {
    this.$refs.r33.innerHTML = new Date();

    console.log(ClassicEditor);
    ClassicEditor.create(this.$el.querySelector("#editor"), {
      // CKEditor configuration options here...
    })
      .then((editor) => {
        editor.setData(this.editorData);
        editor.model.document.on("change:data", () => {
          this.editorData = editor.getData();
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
