<template>
  <div :class="['card', bgClass, textClass, paddingClass, marginClass]">
    <slot name="header"></slot>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

/**
 * Defines the props accepted by the CardComponent.
 * @typedef {Object} Props
 * @property {String} [bgColor] - The background color of the card. Prefix with bg- in classes.
 * @property {String} [textColor] - The text color of the card. Prefix with text- in classes.
 * @property {String} [padding] - The padding inside the card. Prefix with p- in classes.
 * @property {String} [margin] - The margin outside the card. Prefix with m- in classes.
 */
const props = defineProps({
  bgColor: String,
  textColor: String,
  padding: String,
  margin: String,
});

// Computed properties for generating class names based on props
const bgClass = computed(() => (props.bgColor ? `bg-${props.bgColor}` : 'bg-white'));
const textClass = computed(() => (props.textColor ? `text-${props.textColor}` : ''));
const paddingClass = computed(() => (props.padding ? `p-${props.padding}` : ''));
const marginClass = computed(() => (props.margin ? `m-${props.margin}` : ''));
</script>

<style scoped>
.card {
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
