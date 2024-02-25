// tests/unit/FInput.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FInput from './FInput.vue';

describe('FInput component', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FInput);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.props('type')).toBe('text');
    expect(wrapper.props('placeholder')).toBe('');
    expect(wrapper.props('inputClass')).toBe('');
    expect(wrapper.props('label')).toBe('');
  });

  it('renders input field with specified props', async () => {
    const type = 'email';
    const placeholder = 'Enter your email';
    const inputClass = 'custom-class';
    const label = 'Email Address';

    const wrapper = mount(FInput, {
      props: {
        type,
        placeholder,
        inputClass,
        label,
      },
    });

    expect(wrapper.find('input').attributes('type')).toBe(type);
    expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder);
    expect(wrapper.find('input').classes()).toContain(inputClass);
    expect(wrapper.find('label').text()).toBe(label);
  });
});
