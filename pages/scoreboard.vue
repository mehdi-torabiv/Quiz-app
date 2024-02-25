<template>
  <div class="container center-xy">
    <FTypographi tag="h1" size="3xl" class="text-white"> Ranking Scoreboard </FTypographi>
    <FTableContainer :headers="['username', 'email', 'score']" :userData="transformedData" />
  </div>
</template>

<script lang="ts" setup>
import { ScoreboardApi } from '../services/ApiServices/ScoreboardApi';
import { ref } from 'vue';

const transformedData = ref([]);

const data = await ScoreboardApi.getScoreboard();
transformedData.value = transformApiResponse(data);
</script>
