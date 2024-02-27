import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import UserRankNotification from './UserRankNotification.vue';

const routes = [{ path: '/', component: { template: 'Dummy component' } }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('UserRankNotification', () => {
  it('displays the correct message and correct count', () => {
    const wrapper = mount(UserRankNotification, {
      props: {
        message: 'Well done!',
        correctCount: 3,
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain('You answered 3 correctly!');
    expect(wrapper.text()).toContain('Well done!');
  });
});
