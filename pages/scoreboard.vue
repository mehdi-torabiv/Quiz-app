<template>
  <div class="container center-xy">
    <FTypographi tag="h1" size="3xl" class="text-white"> Ranking Scoreboard </FTypographi>
    <FTableContainer :headers="['username', 'email', 'score']" :user-data="transformedData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ScoreboardApi } from '../services/ApiServices/ScoreboardApi';

useHead({
  title: 'Scoreboard',
  meta: [{ name: 'description', content: 'Quiz app for Fast-track' }],
});

const transformedData = ref([]);

const data = await ScoreboardApi.getScoreboard();
if (data) {
  transformedData.value = transformApiResponse(data.data);
}
</script>
