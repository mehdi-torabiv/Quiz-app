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
});
