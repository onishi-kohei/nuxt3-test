import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/tailwind.css'],
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
      transpile: ['vuetify']
  },
})