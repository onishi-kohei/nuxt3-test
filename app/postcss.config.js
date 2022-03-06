import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'node'
  },
  // buildModules: ['@nuxtjs/tailwindcss'], // <= コメントアウト
  css: ['@/assets/css/tailwind.css'],
  // ↓ 追加
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  }
})
