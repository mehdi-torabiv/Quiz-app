<template>
  <div class="container">
    <FCard class="regirster-container text-center center-xy">
      <FTypographi tag="h1" class="regirster-container__title pt-5">Register yourself!</FTypographi>
      <div class="regirster-container__buttons p-5">
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
import type { userType } from '../types';
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
    const response = await UsersApi.createNewUser({ username: user.value.username, email: user.value.email });

    if (response) {
      StorageService.writeLocalStorage('user', response.data);
      redirectToQuiz();
    } else {
      console.error('No data received in the response');
    }
  } catch (e) {
    console.log('Error: ', e);
  }
};
</script>

<style scoped lang="less">
.regirster-container {
  width: 40%;
  .regirster-container__title {
    font-size: 2rem;
  }
  .regirster-container__buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .regirster-container {
    width: 90%;
    .regirster-container__title {
      font-size: 1.3rem;
    }
    .regirster-container__buttons {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
}

@media (min-width: 769px) and (max-width: 1400px) {
  .regirster-container {
    width: 80%;
  }
}
</style>
