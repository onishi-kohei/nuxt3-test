<template>
  <div>
    <h1>Filter</h1>
    <div class="text-red-700">{{ state.count }}</div>
  </div>
</template>
<script setup lang="ts">
const counterStore = useCounterStore();
const { state } = counterStore;
</script>