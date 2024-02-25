<template>
  <FCard v-if="message" padding="12" class="text-center">
    <FTypographi tag="h1" size="3xl">
      {{ message }}
    </FTypographi>
    <FButton class="mt-8 text-white" size="xl" color-class="bg-success" @click="$router.push('/')">Try Again</FButton>
  </FCard>
</template>

<script lang="ts" setup>
const props = defineProps<{
  message: string;
}>();
</script>
