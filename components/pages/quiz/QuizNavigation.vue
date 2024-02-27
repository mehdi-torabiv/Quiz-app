<template>
  <div class="flex flex-row justify-between">
    <div>
      <FButton v-if="hasPrev" size="xl" @click="prev">Previous</FButton>
      <FButton v-else size="xl" @click="backToMain">Back to Main</FButton>
    </div>

    <div>
      <FButton v-if="hasNext" size="xl" @click="next">Next</FButton>
      <FButton v-else size="xl" @click="submitQuiz">Submit</FButton>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Defines properties for navigation control in a quiz application.
 * Allows users to navigate between questions or submit the quiz.
 *
 * @property {Boolean} hasNext - Indicates if a next question exists.
 * @property {Boolean} hasPrev - Indicates if a previous question exists.
 *
 * @emits next - Emits when the user navigates to the next question.
 * @emits prev - Emits when the user navigates to the previous question.
 * @emits backToMain - Emits when the user chooses to go back to the main menu.
 * @emits submit - Emits when the user submits the quiz.
 */
const props = defineProps({
  hasNext: Boolean,
  hasPrev: Boolean,
});

const emit = defineEmits(['next', 'prev', 'backToMain', 'submit']);

/**
 * Triggers navigation to the next question.
 */
const next = () => emit('next');

/**
 * Triggers navigation to the previous question.
 */
const prev = () => emit('prev');

/**
 * Sends the user back to the main menu.
 */
const backToMain = () => emit('backToMain');

/**
 * Submits the quiz for evaluation.
 */
const submitQuiz = () => emit('submit');
</script>
