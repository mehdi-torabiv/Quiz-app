import type { ApiResponse, UpdateScoreboardResponse } from '#build/interfaces';
import type { Scoreboard } from '#build/types';

type udpateScoreboardPayload = {
  username: string;
  email: string;
  correctCount: number | string;
};

export class ScoreboardApi {
  public static async getScoreboard(): Promise<ApiResponse<Scoreboard[]>> {
    try {
      const data = await $fetch('/api/scoreboard', {
        method: 'GET',
      });
      return data;
    } catch (error) {
      console.error('Failed to get scoreboard:', error);
      throw error;
    }
  }

  public static async updateScoreboard({
    username,
    email,
    correctCount,
  }: udpateScoreboardPayload): Promise<ApiResponse<UpdateScoreboardResponse>> {
    try {
      const data = await $fetch('/api/scoreboard', {
        method: 'POST',
        body: { username, email, score: correctCount },
      });
      return data;
    } catch (error) {
      console.error('Failed to update scoreboard:', error);
      throw error;
    }
  }
}
