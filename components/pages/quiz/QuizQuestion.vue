<template>
  <div>
    <FCard class="quiz-question__card">
      <FTypographi tag="h1" class="text-container">
        {{ quiz.questionText }}
      </FTypographi>
    </FCard>
    <div class="questions-container">
      <FButton
        v-for="(answer, index) in quiz.answers"
        :key="index"
        size="xl"
        class="questions-container__button"
        @click="handleSelectedAnswer(index)"
      >
        {{ answer.text }}
      </FButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { type Quiz, type QuizAnswer } from '../../../types';

const props = defineProps<{
  quiz: Quiz;
  selectedAnswer?: QuizAnswer | null;
}>();

const emit = defineEmits(['selected-answer']);

function handleSelectedAnswer(answerIndex: number | string) {
  emit('selected-answer', answerIndex);
}
</script>

<style scoped lang="less">
.quiz-question__card {
  padding: 4rem;
  text-align: center;
  .text-container {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    font-size: 1px;
    .text-container {
      font-size: 1.3rem;
    }
  }
}

.questions-container {
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1rem;
  .questions-container__button {
    width: 100%;
    margin-top: 1rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0rem;

    .questions-container__button {
      width: 100%;
      margin-top: 1rem;
    }
  }
}
</style>
