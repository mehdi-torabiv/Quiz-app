<template>
  <div class="container center-xy w-1/2 mx-auto">
    <div v-if="!showUserRankNotification">
      <QuizQuestion
        v-if="questions.length > 0"
        :quiz="questions[currentQuestionIndex]"
        @selected-answer="handleSetSelectedAnswer"
      />
      <QuizNavigation
        :has-next="hasNextQuestion"
        :has-prev="hasPrevQuestion"
        @next="gotoNextQuestion"
        @prev="gotoPrevQuestion"
        @back-to-main="backToMain"
        @submit="submitQuiz"
      />
    </div>
    <div v-else>
      <UserRankNotification :message="userRankNotificationMessage" :correctCount="userCorrectCount" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { type QuizQuestion } from '../utils/types';
import { QuestionsApi } from '../services/ApiServices/QuestionsApi';
import { StorageService } from '../services/StorageService';
import { ScoreboardApi } from '../services/ApiServices/ScoreboardApi';
import type { User } from '../utils/interfaces';

useHead({
  title: 'Quiz',
  meta: [{ name: 'description', content: 'Quiz app for Fast-track' }],
});

const showUserRankNotification = ref<boolean>(false);
const userRankNotificationMessage = ref<string>('');
const userCorrectCount = ref<number>(0);

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
  router.push('/');
};

/**
 * Handles the submission of the quiz, such as validating answers and potentially sending them to a server.
 */
const submitQuiz = async (): Promise<void> => {
  try {
    const data = await QuestionsApi.submitAnswers(answers.value);
    const { correctCount } = transformApiResponse(data);

    updateScoreboard(correctCount);
  } catch (error) {
    console.error('Error submitting quiz:', error);
  }
};

const updateScoreboard = async (correctCount: string | number) => {
  try {
    const user = StorageService.readLocalStorage<User>('user');

    if (user) {
      const data = await ScoreboardApi.updateScoreboard({
        username: user.username,
        email: user.email,
        correctCount,
      });
      const questionResult = transformApiResponse(data);

      showUserRankNotification.value = true;
      userRankNotificationMessage.value = questionResult.notificationMessage;
      userCorrectCount.value = questionResult.existingScoreboard.score;
    } else {
      console.error('User data not found in local storage');
    }
  } catch (error) {
    console.error('Error updating scoreboard:', error);
  }
};
</script>
