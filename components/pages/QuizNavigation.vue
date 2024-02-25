<template>
  <div class="flex flex-row justify-between">
    <div>
      <FButton v-if="hasPrev" size="xl" @click="prev">Previous</FButton>
      <FButton v-else size="xl" @click="backToMain">Back to Main</FButton>
    </div>

    <div>
      <FButton v-if="hasNext" size="xl" @click="next">Next</FButton>
      <FButton v-else size="xl" @click="submitQuiz">Submit Quiz</FButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hasNext: Boolean,
  hasPrev: Boolean,
});

const emit = defineEmits(['next', 'prev', 'backToMain', 'submit']);

const next = () => emit('next');
const prev = () => emit('prev');
const backToMain = () => emit('backToMain');
const submitQuiz = () => emit('submit');
</script>
