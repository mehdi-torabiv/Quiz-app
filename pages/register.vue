<template>
  <div class="container">
    <FCard class="w-1/2 text-center center-xy">
      <FTypographi tag="h1" size="2xl"> Register your self! </FTypographi>
      <div class="flex flex-col p-12 space-y-5">
        <FInput type="text" v-model="user.username" label="Username" />
        <FInput type="text" v-model="user.email" label="Email" />
        <FButton @click="register">Register</FButton>
      </div>
    </FCard>
  </div>
</template>

<script lang="ts" setup>
import type { userType } from '../utils/types';
import { UsersApi } from '../services/ApiServices/UsersApi';
import { StorageService } from '../services/StorageService';

const user = ref<userType>({
  username: '',
  email: '',
});

const router = useRouter();

const register = async () => {
  try {
    const response = await UsersApi.createNewUser(user.value.username, user.value.email);

    // needs to fix issue with response type
    const data = response?.data;
    if (data) {
      StorageService.writeLocalStorage('user', data);
      router.push('/quiz');
    } else {
      console.error('No data received in the response');
    }
  } catch (e) {
    console.log('Error: ', e);
  }
};
</script>
