export class ScoreboardApi {
  public static async getScoreboard() {
    const { data } = await useFetch(`/api/scoreboard`, {
      server: true,
      lazy: true,
      method: 'GET',
    });

    return data.value;
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
    const { data } = await useFetch(`/api/scoreboard`, {
      server: true,
      lazy: true,
      method: 'POST',
      body: JSON.stringify({ username, email, score: correctCount }),
    });

    console.log({ data });

    return data.value;
  }
}
