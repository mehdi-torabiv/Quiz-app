// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/styles/_main.less'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
  components: {
    global: true,
    dirs: ['./components/shared', './components/pages'],
  },
  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
  },
});
