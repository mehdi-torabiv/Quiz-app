<template>
  <transition name="page">
    <NuxtPage />
  </transition>
</template>

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
