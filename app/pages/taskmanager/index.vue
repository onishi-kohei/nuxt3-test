<template>
  <h1>task</h1>
  <h2>test</h2>
  <h1>{{ count }}</h1>
  <v-btn @click="increment">Increment</v-btn>
  <v-btn @click="decrement">Decrement</v-btn>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>
