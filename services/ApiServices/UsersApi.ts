export class UsersApi {
  public static async getUsers() {
    const { data } = await useFetch('/api/users', {
      server: true,
      lazy: true,
      method: 'GET',
    });

    return data.value;
  }

  public static async createNewUser(username: string, email: string) {
    const { data } = await useFetch('/api/users', {
      server: true,
      lazy: true,
      method: 'POST',
      body: { username, email },
    });

    return data.value;
  }
}
