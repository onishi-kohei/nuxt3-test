<template>
  <div>
    <h1>INDEX</h1>
    <div class="text-red-700">{{ state.count }}</div>
    <button @click="counterStore.countUp">countUp</button>
  </div>
</template>
<script setup lang="ts">
const counterStore = useCounterStore();
const { state } = counterStore;
</script>