import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
      transpile: ['vuetify']
  },
})