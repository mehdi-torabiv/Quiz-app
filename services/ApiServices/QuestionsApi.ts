export class QuestionsApi {
  public static async getQuestions() {
    const { data } = await useFetch(`/api/questions`, {
      server: true,
      lazy: true,
    });

    return data.value;
  }
}
