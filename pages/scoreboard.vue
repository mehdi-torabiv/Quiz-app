<template>
  <div class="container mt-10">
    <FTypographi tag="h1" size="3xl" class="text-white"> Ranking Scoreboard </FTypographi>
    <FTableContainer :headers="['username', 'email', 'score']" :user-data="transformedData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ScoreboardApi } from '../services/ApiServices/ScoreboardApi';
import { type Scoreboard } from '../types';

useHead({
  title: 'Scoreboard',
  meta: [{ name: 'description', content: 'Quiz app for Fast-track' }],
});

const transformedData = ref<Scoreboard[]>([]);

const response = await ScoreboardApi.getScoreboard();
if (response && response.data) {
  transformedData.value = response.data;
}
</script>
