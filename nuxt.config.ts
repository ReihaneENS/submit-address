// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Achare App',
    },
  },
  vite: {
    ssr: {
      noExternal: ['ol'],
    },
  },
  imports: {
    dirs: ["store", "plugins", "composables"],
  },
  css: [
    "~/assets/style/main.scss",
  ],
})
