<template>
  <component :is="props.tag" :class="`text-${props.size}`">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
/**
 * TypographyComponent dynamically renders text content based on specified HTML tags and CSS class-based sizes.
 * This approach ensures semantic HTML is used for SEO benefits and allows for consistent typography throughout the application.
 *
 * @component
 * @example
 * <TypographyComponent tag="h1" size="xl">Heading</TypographyComponent>
 * <TypographyComponent tag="p" size="md">Paragraph</TypographyComponent>
 *
 * @prop {String} tag - The HTML tag to render. It supports 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', and 'div'.
 * @prop {String} size - The size of the typography, correlating to predefined CSS classes. Supported values are 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'.
 */
import { defineProps } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'p',
    validator: (value: string) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'].includes(value),
  },
});
</script>
