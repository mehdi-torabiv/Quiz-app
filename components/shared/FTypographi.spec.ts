import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FTypographi from './FTypographi.vue';

describe('TypographyComponent', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FTypographi);
    expect(wrapper.element.tagName.toLowerCase()).toBe('p');
    expect(wrapper.classes()).toContain('text-md');
  });

  it('renders correctly with specified tag and size', () => {
    const wrapper = mount(FTypographi, {
      props: {
        tag: 'h1',
        size: 'xl',
      },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('h1');
    expect(wrapper.classes()).toContain('text-xl');
  });
});
