import { defineNuxtConfig } from 'nuxt/config';

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
    dirs: ['./components/shared', './components/pages/quiz'],
  },
  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
    BASE_URL: process.env.BASE_URL,
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://yourdomain.com',
    gzip: true,
    i18n: {
      locales: ['en'],
      routesNameSeparator: '___',
    },
    routes: ['/', '/quiz', '/scoreboard', '/register'],
  },
});
