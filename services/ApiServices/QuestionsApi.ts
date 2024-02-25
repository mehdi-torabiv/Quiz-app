export class QuestionsApi {
  public static async getQuestions() {
    const { data } = await useFetch(`/api/questions`, {
      server: true,
      lazy: true,
      method: 'GET',
    });

    return data.value;
  }
  public static async submitAnswers(selectedAnswerIndices: (number | null)[]) {
    const { data } = await useFetch(`/api/questions`, {
      server: true,
      lazy: true,
      method: 'POST',
      body: selectedAnswerIndices,
    });

    return data.value;
  }
}
