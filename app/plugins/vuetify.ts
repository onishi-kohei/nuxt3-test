import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify()

  app.vueApp.use(vuetify)
})
