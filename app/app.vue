<template>
  <div>
    <Html lang="ja">
      <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="`This is ${title} page`" />
      </Head>
    </Html>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const title = 'Hello Nuxt3!!'
</script>
