import type { ApiResponse, User } from '../../interfaces';

export class UsersApi {
  public static async getUsers(): Promise<ApiResponse<User[]>> {
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

  public static async createNewUser({ username, email }: Omit<User, '_id'>): Promise<ApiResponse<User>> {
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
