import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import FCard from './FCard.vue';

describe('CardComponent', () => {
  it('applies computed classes based on props', () => {
    const wrapper = mount(FCard, {
      props: {
        bgColor: 'secondary',
        textColor: 'white',
        padding: '4',
        margin: '2',
      },
    });

    expect(wrapper.classes()).toContain('bg-secondary');
    expect(wrapper.classes()).toContain('text-white');
    expect(wrapper.classes()).toContain('p-4');
    expect(wrapper.classes()).toContain('m-2');
  });

  it('renders content in slots', () => {
    const wrapper = mount(FCard, {
      slots: {
        default: 'Main content',
        header: '<div>Header content</div>',
        footer: '<div>Footer content</div>',
      },
    });

    expect(wrapper.text()).toContain('Main content');
    expect(wrapper.html()).toContain('<div>Header content</div>');
    expect(wrapper.html()).toContain('<div>Footer content</div>');
  });
});
