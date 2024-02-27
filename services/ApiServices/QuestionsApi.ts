import type { ApiResponse } from '#build/interfaces';
import type { Quiz } from '#build/types';

export class QuestionsApi {
  public static async getQuestions(): Promise<ApiResponse<Quiz[]>> {
    try {
      const data = await $fetch(`/api/questions`, {
        method: 'GET',
      });

      return data;
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      throw error;
    }
  }

  public static async submitAnswers(
    selectedAnswerIndices: (number | null)[],
  ): Promise<ApiResponse<{ correctCount: string }>> {
    try {
      const data = await $fetch(`/api/questions`, {
        method: 'POST',
        body: selectedAnswerIndices,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data;
    } catch (error) {
      console.error('Failed to submit answers:', error);
      throw error;
    }
  }
}
