import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import QuizNavigation from './QuizNavigation.vue';

describe('NavigationButtons', () => {
  it('renders "Back to Main" button when hasPrev is false', () => {
    const wrapper = mount(QuizNavigation, {
      props: { hasPrev: false, hasNext: false },
    });
    expect(wrapper.text()).toContain('Back to Main');
  });

  it('renders "Previous" button when hasPrev is true', () => {
    const wrapper = mount(QuizNavigation, {
      props: { hasPrev: true, hasNext: false },
    });
    expect(wrapper.text()).toContain('Previous');
  });

  it('renders "Next" button when hasNext is true', () => {
    const wrapper = mount(QuizNavigation, {
      props: { hasNext: true, hasPrev: false },
    });
    expect(wrapper.text()).toContain('Next');
  });

  it('renders "Submit" button when hasNext is false', () => {
    const wrapper = mount(QuizNavigation, {
      props: { hasNext: false, hasPrev: true },
    });
    expect(wrapper.text()).toContain('Submit');
  });
});
