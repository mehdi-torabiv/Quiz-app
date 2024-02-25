<!-- FInput.vue -->
<template>
  <div class="input-wrapper">
    <label :for="inputId" class="text-left">{{ label }}</label>
    <input :type="type" v-model="inputValue" :id="inputId" :placeholder="placeholder" :class="inputClass" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';

/**
 * FInput component provides a styled input field with an optional label.
 * @component FInput
 * @prop {String} type - The type of input field (e.g., 'text', 'email', 'password').
 * @prop {String} placeholder - The placeholder text for the input field.
 * @prop {String} inputClass - Additional CSS class(es) to apply to the input field.
 * @prop {String} label - The label text for the input field.
 */
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});

const inputId = ref(`f-input-${Math.random().toString(36).substr(2, 9)}`);
const inputValue = ref('');
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
