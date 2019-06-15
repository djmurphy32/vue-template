<template>
  <div>
    <div>Hello {{name}}!</div>
    <input v-model="name" type="text">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  el: "#app",
  data: {
    name: "World"
  }
});
</script>