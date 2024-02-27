<template>
  <div class="container">
    <FCard class="px-6 py-6 index-container center-xy">
      <div class="flex flex-col">
        <FTypographi tag="h1" class="index-container__title text-center">Welcome to Fast track Quiz app!</FTypographi>
        <div class="index-container__buttons pt-12">
          <FButton color-class="bg-info" class="text-white" size="lg" @click="$router.push('/scoreboard')"
            >See Ranking</FButton
          >
          <FButton
            v-if="isUserLoggedIn"
            color-class="bg-secondary"
            class="text-white"
            size="lg"
            @click="$router.push('/quiz')"
            >Try Again</FButton
          >
          <FButton v-else color-class="bg-secondary" class="text-white" size="lg" @click="$router.push('/register')"
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

<style scoped lang="less">
.index-container {
  width: 40%;
  .index-container__title {
    font-size: 2rem;
  }
  .index-container__buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    button {
      width: 50%;
    }
  }
}
@media screen and (max-width: 768px) {
  .index-container {
    width: 90%;
    .index-container__title {
      font-size: 1.3rem;
    }
    .index-container__buttons {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      button {
        width: 100%;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1400px) {
  .index-container {
    width: 80%;
  }
}
</style>
