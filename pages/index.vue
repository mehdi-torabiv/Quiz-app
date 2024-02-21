<script lang="ts" setup>
import FButton from '../components/shared/FButton.vue';
import FTypographi from '../components/shared/FTypographi.vue';
import FCard from '../components/shared/FCard.vue';
</script>

<template>
  <div class="container">
    <FCard class="p-5 w-1/2 center-xy">
      <div class="flex flex-col">
        <FTypographi tag="h1" size="5xl">Welcome to Fast track Quiz app!</FTypographi>
        <div class="flex flex-row jusitfy-between space-x-2">
          <FButton color-class="bg-secondary" class="text-white w-1/2" @click="$router.push('/quiz')" size="lg"
            >Start Quiz</FButton
          >
          <FButton color-class="bg-info" class="text-white w-1/2" size="lg">See Ranking</FButton>
        </div>
      </div>
    </FCard>
  </div>
</template>

<style></style>
