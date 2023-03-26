<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ $route.params.id }}</p>
</template>

<script>
export default {
  params: ["id"],
  data() {
    //dont need this anymore as we are passing this info as a prop
    // return {
    //     id: this.$route.params.id,
    // };
  },
};
</script>

<style></style>
