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
import { QuestionsApi } from '../services/ApiServices/QuestionsApi';

/**
 * A Vue component for displaying quiz questions and navigation buttons to move between questions.
 * It utilizes a dynamic import for the QuizQuestion type and leverages the QuestionsApi service
 * to fetch and display a list of quiz questions. Navigation through the questions is managed by
 * computed properties and methods that update the current question index.
 */

/**
 * The list of questions for the quiz, stored as a reactive Vue reference.
 * Each question is an object containing the question text, an array of answers,
 * and the correct answer.
 *
 * @type {Ref<QuizQuestion[]>} questions - A reactive reference to an array of QuizQuestion objects.
 */
const questions: Ref<QuizQuestion[]> = ref<QuizQuestion[]>([]);

// Fetch quiz questions from the API and transform the response for use in the component.
const data = await QuestionsApi.getQuestions();
questions.value = transformApiResponse(data);

/**
 * The current index of the question being displayed, stored as a reactive Vue reference.
 * This index is used to determine which question to show in the QuizQuestion component.
 *
 * @type {Ref<number>} currentQuestionIndex - A reactive reference to the current question index.
 */
const currentQuestionIndex: Ref<number> = ref(0);

/**
 * Computed property that determines if there is a next question in the quiz.
 *
 * @returns {boolean} True if there is a next question available, false otherwise.
 */
const hasNextQuestion = computed((): boolean => currentQuestionIndex.value < questions.value.length - 1);

/**
 * Computed property that determines if there is a previous question in the quiz.
 *
 * @returns {boolean} True if there is a previous question available, false otherwise.
 */
const hasPrevQuestion = computed((): boolean => currentQuestionIndex.value > 0);

/**
 * Advances to the next question in the quiz if one is available.
 * This is triggered by user interaction with the QuizNavigation component.
 */
const gotoNextQuestion = (): void => {
  if (hasNextQuestion.value) {
    currentQuestionIndex.value += 1;
  }
};

/**
 * Goes back to the previous question in the quiz if one is available.
 * This is triggered by user interaction with the QuizNavigation component.
 */
const gotoPrevQuestion = (): void => {
  if (hasPrevQuestion.value) {
    currentQuestionIndex.value -= 1;
  }
};
</script>
