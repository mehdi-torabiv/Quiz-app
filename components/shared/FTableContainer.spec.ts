import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FTableContainer from './FTableContainer.vue';

describe('TableContainer', () => {
  const headers = ['Name', 'Age', 'City'];
  const userData = [
    { Name: 'John Doe', Age: '30', City: 'New York' },
    { Name: 'Jane Doe', Age: '25', City: 'Los Angeles' },
  ];

  it('renders correctly with props', () => {
    const wrapper = mount(FTableContainer, {
      props: { headers, userData },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
