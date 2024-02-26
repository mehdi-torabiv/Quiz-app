export class UsersApi {
  public static async getUsers() {
    try {
      const data = await $fetch('/api/users', {
        method: 'GET',
      });
      return data;
    } catch (error) {
      console.error('Failed to get users:', error);
      throw error;
    }
  }

  public static async createNewUser(username: string, email: string) {
    try {
      const data = await $fetch('/api/users', {
        method: 'POST',
        body: { username, email },
      });
      return data;
    } catch (error) {
      console.error('Failed to create new user:', error);
      throw error;
    }
  }
}
