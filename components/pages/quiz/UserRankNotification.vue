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
/**
 * Component to display the quiz results with a custom message and the count of correct answers.
 * Offers a button to try the quiz again by navigating to the root path.
 *
 * @component
 *
 * @props message {string} - The custom message to display based on the user's quiz performance.
 * @props correctCount {number} - The number of questions the user answered correctly. Defaults to 0.
 */
import { withDefaults, defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The message to display to the user, reflecting on their performance.
     * @type {string}
     */
    message: string;
    /**
     * The number of correct answers provided by the user.
     * @type {number}
     * @default 0
     */
    correctCount: number;
  }>(),
  {
    correctCount: 0,
  },
);
</script>
