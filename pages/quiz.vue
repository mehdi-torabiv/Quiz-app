<template>
  <div class="container center-xy w-1/2 mx-auto">
    <QuizQuestion
      v-if="questions.length > 0"
      :quiz="questions[currentQuestionIndex]"
      @selected-answer="handleSetSelectedAnswer"
    />
    <QuizNavigation
      @next="gotoNextQuestion"
      @prev="gotoPrevQuestion"
      @back-to-main="backToMain"
      @submit="submitQuiz"
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
 * @file This file contains a Vue component for displaying quiz questions and navigating through them.
 * It demonstrates fetching data from an API, managing state with reactive references, and handling user interactions.
 */

/**
 * @section State and Data Fetching
 */

/**
 * Reactive reference to an array of QuizQuestion objects, representing the list of questions for the quiz.
 * Initially empty and populated by fetching data from an API.
 * @type {Ref<QuizQuestion[]>}
 */
const questions: Ref<QuizQuestion[]> = ref([]);

// Fetch quiz questions from the API and populate the `questions` reactive reference.
const data = await QuestionsApi.getQuestions();
questions.value = transformApiResponse(data);

/**
 * Reactive reference for storing user-selected answers. Initialized with null values, indicating unanswered questions.
 * @type {Ref<(number | null)[]>}
 */
const answers: Ref<(number | null)[]> = ref<(number | null)[]>(new Array(questions.value.length).fill(null));

/**
 * Reactive reference to track the current index of the question being displayed.
 * @type {Ref<number>}
 */
const currentQuestionIndex: Ref<number> = ref(0);

/**
 * @section Computed Properties for Navigation
 */

/**
 * Determines if there is a next question available in the quiz.
 * @returns {boolean}
 */
const hasNextQuestion = computed((): boolean => currentQuestionIndex.value < questions.value.length - 1);

/**
 * Determines if there is a previous question available in the quiz.
 * @returns {boolean}
 */
const hasPrevQuestion = computed((): boolean => currentQuestionIndex.value > 0);

/**
 * @section Event Handlers
 */

/**
 * Advances to the next question in the quiz if available.
 */
const gotoNextQuestion = (): void => {
  if (hasNextQuestion.value) {
    currentQuestionIndex.value += 1;
  }
};

/**
 * Returns to the previous question in the quiz if available.
 */
const gotoPrevQuestion = (): void => {
  if (hasPrevQuestion.value) {
    currentQuestionIndex.value -= 1;
  }
};

/**
 * Stores the selected answer for the current question in the quiz.
 * @param {QuizAnswer} selectedAnswer - The answer selected by the user.
 */
function handleSetSelectedAnswer(selectedAnswer: number) {
  answers.value[currentQuestionIndex.value] = selectedAnswer;
}

/**
 * @section Navigation
 */

// Utilize Vue Router for programmatically navigating the user.
const router = useRouter();

/**
 * Navigates the user back to the main page.
 */
const backToMain = (): void => {
  console.log('Back to main');
  router.push('/');
};

/**
 * Handles the submission of the quiz, such as validating answers and potentially sending them to a server.
 */
const submitQuiz = async (): Promise<void> => {
  try {
    QuestionsApi.submitAnswers(answers.value);
  } catch (error) {
    console.error('Error submitting quiz:', error);
  }
};
</script>
