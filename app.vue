<template>
  <transition name="page">
    <NuxtPage />
  </transition>
</template>

<script setup>
const baseURL = useRuntimeConfig().BASE_URL;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - QuizAPP` : 'QuizAPP';
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: './manifest.json' },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Quiz app for Fast-track' },
    { hid: 'og:url', property: 'og:url', content: baseURL },
    { hid: 'og:image', property: 'og:image', content: `${baseURL}/default-og-image.jpg` },
    { hid: 'twitter:url', name: 'twitter:url', content: baseURL },
    { hid: 'twitter:image', name: 'twitter:image', content: `${baseURL}/default-twitter-card-image.jpg` },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: `${baseURL}/favicon.ico` }],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
