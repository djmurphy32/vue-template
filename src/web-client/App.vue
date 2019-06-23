<template>
  <div>
    Name:
    <input v-model="name" type="text" />
    <h1>Hello Component</h1>
    <HelloComponent :name="name" :initialEnthusiasm="5" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloComponent from '@/components/Hello.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloComponent,
  },
})
</script>
