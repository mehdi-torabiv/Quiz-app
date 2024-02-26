export class ScoreboardApi {
  public static async getScoreboard() {
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
  }: {
    username: string;
    email: string;
    correctCount: number | string;
  }) {
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
