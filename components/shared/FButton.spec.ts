import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FButton from './FButton.vue';

describe('CustomButton', () => {
  it('emits the click event when clicked', async () => {
    const wrapper = mount(FButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
});
