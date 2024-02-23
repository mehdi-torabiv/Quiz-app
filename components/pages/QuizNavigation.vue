<template>
  <div class="flex flex-row justify-between">
    <FButton size="xl" :disabled="!hasPrev" @click="prev">Previous</FButton>
    <FButton size="xl" :disabled="!hasNext" @click="next">Next</FButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hasNext: Boolean,
  hasPrev: Boolean,
});

const emit = defineEmits(['next', 'prev']);

const next = () => emit('next');
const prev = () => emit('prev');
</script>
