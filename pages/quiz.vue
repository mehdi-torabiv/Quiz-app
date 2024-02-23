<template>
  <div class="container center-xy w-1/2 mx-auto">
    <QuizQuestion v-if="questions.length > 0" :quiz="questions[currentQuestionIndex]" />
    <QuizNavigation
      @next="gotoNextQuestion"
      @prev="gotoPrevQuestion"
      :has-next="hasNextQuestion"
      :has-prev="hasPrevQuestion"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { type QuizQuestion } from '../utils/types';

/**
 * A Vue component for displaying quiz questions and navigation buttons
 * to move between questions.
 */
/**
 * The list of questions for the quiz.
 * Each question is an object containing the question text, an array of answers,
 * and the correct answer.
 *
 * @type {Ref<QuizQuestion[]>}
 */
const questions: Ref<QuizQuestion[]> = ref([
  {
    question: 'What is 1+1?',
    answers: ['1', '2', '3', '4'],
    correct: '2',
  },
  {
    question: 'What is 2+2?',
    answers: ['1', '2', '3', '4'],
    correct: '4',
  },
]);

/**
 * The current index of the question being displayed.
 *
 * @type {Ref<number>}
 */
const currentQuestionIndex: Ref<number> = ref(0);

/**
 * Determines if there is a next question.
 *
 * @returns True if there is a next question, false otherwise.
 */
const hasNextQuestion = computed((): boolean => currentQuestionIndex.value < questions.value.length - 1);

/**
 * Determines if there is a previous question.
 *
 * @returns True if there is a previous question, false otherwise.
 */
const hasPrevQuestion = computed((): boolean => currentQuestionIndex.value > 0);

/**
 * Advances to the next question if there is one.
 */
const gotoNextQuestion = (): void => {
  if (hasNextQuestion.value) {
    currentQuestionIndex.value += 1;
  }
};

/**
 * Goes back to the previous question if there is one.
 */
const gotoPrevQuestion = (): void => {
  if (hasPrevQuestion.value) {
    currentQuestionIndex.value -= 1;
  }
};
</script>
