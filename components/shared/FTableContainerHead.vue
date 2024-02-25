<template>
  <thead>
    <tr>
      <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
    </tr>
  </thead>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
});
</script>
