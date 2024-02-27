import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import QuizQuestion from './QuizQuestion.vue';
import type { Quiz } from '../../../types';

const mockQuiz: Quiz = {
  questionText: 'What is 2 + 2?',
  answers: [
    { _id: 'answer1', text: '4' },
    { _id: 'answer2', text: '22' },
  ],
};

describe('QuizQuestion', () => {
  it('renders correctly', () => {
    const wrapper = mount(QuizQuestion, {
      props: {
        quiz: mockQuiz,
        selectedAnswer: null,
      },
    });

    expect(wrapper.text()).toContain(mockQuiz.questionText);

    for (const answer of mockQuiz.answers) {
      expect(wrapper.text()).toContain(answer.text);
    }
  });
});
