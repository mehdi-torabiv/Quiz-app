<template>
  <div>
    <FCard padding="20" class="my-12">
      <FTypographi tag="h1" size="4xl" class="text-center">
        {{ quiz.questionText }}
      </FTypographi>
    </FCard>
    <div class="flex flex-wrap justify-between flex-1 space-x-3 my-12">
      <FButton v-for="(answer, index) in quiz.answers" :key="index" size="xl" class="w-1/3 bg-white my-4">
        {{ answer.text }}
      </FButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { type Quiz } from '../../utils/types';

const props = defineProps<{
  quiz: Quiz;
}>();
</script>
