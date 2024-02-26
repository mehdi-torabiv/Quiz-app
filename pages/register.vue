<template>
  <div class="container">
    <FCard class="w-1/2 text-center center-xy">
      <FTypographi tag="h1" size="3xl" class="pt-5">Register yourself!</FTypographi>
      <div class="flex flex-col p-12 space-y-5">
        <div class="text-left">
          <FInput v-model="user.username" type="text" label="Username" />
          <span v-if="usernameError" class="text-error text-sm">{{ usernameError }}</span>
        </div>

        <div class="text-left">
          <FInput v-model="user.email" type="text" label="Email" />
          <span v-if="emailError" class="text-error text-sm">{{ emailError }}</span>
        </div>

        <FButton :disabled="isFormInvalid" @click="register">Register</FButton>
      </div>
    </FCard>
  </div>
</template>

<script lang="ts" setup>
import type { userType } from '../utils/types';
import { UsersApi } from '../services/ApiServices/UsersApi';
import { StorageService } from '../services/StorageService';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

useHead({
  title: 'Register',
  meta: [{ name: 'description', content: 'Quiz app for Fast-track' }],
});

const user = ref<userType>({
  username: '',
  email: '',
});

const isFormInvalid = computed(() => {
  return user.value.username === '' || user.value.email === '' || emailError.value !== '';
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailError = computed(() => {
  if (user.value.email && !emailPattern.test(user.value.email)) {
    return 'Please enter a valid email address.';
  }
  return '';
});

const usernameError = computed(() => {
  if (user.value.username && user.value.username.length < 3) {
    return 'Username must be at least 3 characters long.';
  }
  return '';
});

const router = useRouter();
const redirectToQuiz = () => {
  router.push('/quiz');
};

const register = async () => {
  if (isFormInvalid.value) return;

  try {
    const response = await UsersApi.createNewUser(user.value.username, user.value.email);

    const data = response?.data;
    if (data) {
      StorageService.writeLocalStorage('user', data);
      redirectToQuiz();
    } else {
      console.error('No data received in the response');
    }
  } catch (e) {
    console.log('Error: ', e);
  }
};
</script>
