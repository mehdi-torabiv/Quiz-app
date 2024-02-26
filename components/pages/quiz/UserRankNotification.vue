<template>
  <FCard v-if="message" padding="12" class="text-center">
    <FTypographi tag="h1" size="3xl"> You answered {{ correctCount }} correctly! </FTypographi>
    <FTypographi tag="p" size="3xl">
      {{ message }}
    </FTypographi>
    <FButton class="mt-8 text-white" size="xl" color-class="bg-success" @click="$router.push('/')">Try Again</FButton>
  </FCard>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    message: string;
    correctCount: number;
  }>(),
  {
    correctCount: 0,
  },
);
</script>
