<template>
  <div class="container">
    <FCard class="px-6 py-6 w-1/2 center-xy">
      <div class="flex flex-col">
        <FTypographi tag="h1" size="5xl" class="text-center">Welcome to Fast track Quiz app!</FTypographi>
        <div class="flex flex-row jusitfy-between space-x-2 pt-12">
          <FButton color-class="bg-info" class="text-white w-1/2" size="lg" @click="$router.push('/scoreboard')"
            >See Ranking</FButton
          >
          <FButton
            v-if="isUserLoggedIn"
            color-class="bg-secondary"
            class="text-white w-1/2"
            size="lg"
            @click="$router.push('/quiz')"
            >Try Again</FButton
          >
          <FButton
            v-else
            color-class="bg-secondary"
            class="text-white w-1/2"
            size="lg"
            @click="$router.push('/register')"
            >Register</FButton
          >
        </div>
        <div class="my-2">
          <FButton color-class="bg-warning" class="text-white w-full" size="lg" @click="$router.push('/about')">
            About us
          </FButton>
        </div>
      </div>
    </FCard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { StorageService } from '../services/StorageService';
import type { User } from '../utils/interfaces';

useHead({
  title: 'Home',
  meta: [{ name: 'description', content: 'Quiz app for Fast-track' }],
});

const user = ref<User | null>(null);

onMounted(() => {
  const localStorageUser = StorageService.readLocalStorage<User>('user') ?? null;
  console.log(localStorageUser);
  user.value = localStorageUser;
});

const isUserLoggedIn = computed(() => !!user.value);
</script>
