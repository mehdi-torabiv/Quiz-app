<template>
  <button
    :class="['base-button', colorClass, variantClass, sizeClass, customClass]"
    v-bind="$attrs"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

/**
 * Props for the Button component.
 * @typedef {Object} ButtonProps
 * @property {String} [colorClass=bg-primary] - The class to set the button's background color. Must start with 'bg-'.
 * @property {String} [variant=contained] - The button's variant ('outlined', 'contained', 'text').
 * @property {String} [size=md] - The size of the button ('xs', 'sm', 'md', 'lg', 'xl').
 * @property {Boolean} [disabled=false] - Whether the button is disabled.
 * @property {String} [type=button] - The type of button ('button', 'submit', 'reset').
 * @property {String} [ariaLabel] - Aria label for accessibility.
 * @property {String} [customClass] - The class to set custom class from parent.
 */

/** @type {ButtonProps} */
const props = defineProps({
  colorClass: {
    type: String,
    default: 'bg-primary',
    validator: (value: string) => typeof value === 'string' && value.startsWith('bg-'),
  },
  variant: {
    type: String,
    default: 'contained',
    validator: (value: string) => typeof value === 'string' && ['outlined', 'contained', 'text'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => typeof value === 'string' && ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
  disabled: Boolean,
  type: {
    type: String,
    default: 'button',
  },
  ariaLabel: String,
  customClass: String,
});

/**
 * Computes the class for the button variant.
 * @returns {String} The class based on the button variant.
 */
const variantClass = computed(() => {
  switch (props.variant) {
    case 'outlined':
      return 'outlined';
    case 'text':
      return 'text';
    default:
      return 'contained';
  }
});

/**
 * Computes the class for the button size.
 * @returns {String} The class based on the button size.
 */
const sizeClass = computed(() => `size-${props.size}`);

const emit = defineEmits(['click']);

/**
 * Handles click event on the button.
 */
const handleClick = () => {
  emit('click');
};
</script>

<style lang="less" scoped>
.base-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
  &.outlined {
    background-color: transparent;
    border: 1px solid currentColor;
  }
  &.contained {
    border: 0;
  }
  &.text {
    background-color: transparent;
    border: none;
  }
  &.size-xs {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
  &.size-sm {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
  &.size-md {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  &.size-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
  }
  &.size-xl {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
  }
}

.base-button:hover {
  filter: brightness(90%);
}

.base-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
