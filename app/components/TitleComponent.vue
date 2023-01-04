<template>
  <div>
    <h2>double</h2>
    <div>{{ double }}</div>
    <h2>triple</h2>
    <div>{{ triple }}</div>
    <v-btn elevation="2" outlined>button</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  async setup() {
    const count = ref(2)
    const triple = computed(() => count.value * 3)
    return {
      count,
      triple
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  }
})
</script>