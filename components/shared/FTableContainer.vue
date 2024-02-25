<template>
  <table class="table-container">
    <FTableContainerHead :headers="headers" />
    <FTableContainerBody :data="userData" :headers="headers" />
  </table>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  userData: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.table-container {
  min-width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
}

th,
td {
  padding: 1rem;
  &:first-child {
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-left: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}

th {
  background-color: white;
  text-align: left;
  margin-bottom: 10px;
}

tbody tr {
  background-color: white;
  margin-bottom: 10px;
}
</style>
