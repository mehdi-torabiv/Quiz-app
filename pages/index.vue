<script lang="ts" setup></script>

<template>
  <div class="container">
    <FCard class="px-6 py-6 w-1/2 center-xy">
      <div class="flex flex-col">
        <FTypographi tag="h1" size="5xl" class="text-center">Welcome to Fast track Quiz app!</FTypographi>
        <div class="flex flex-row jusitfy-between space-x-2 pt-12">
          <FButton color-class="bg-info" class="text-white w-1/2" size="lg">See Ranking</FButton>
          <FButton color-class="bg-secondary" class="text-white w-1/2" size="lg" @click="$router.push('/quiz')"
            >Start Quiz</FButton
          >
        </div>
      </div>
    </FCard>
  </div>
</template>

<style></style>
