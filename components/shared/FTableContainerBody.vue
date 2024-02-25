<template>
  <tbody>
    <tr v-for="(row, rowIndex) in data" :key="rowIndex">
      <td v-for="(header, index) in headers" :key="index">{{ row[header] }}</td>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
});
</script>
