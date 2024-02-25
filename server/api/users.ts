import User from '../models/users';
import setResponse from '../utils/set-response';

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    try {
      const users = await User.find();
      return setResponse(event, { statusCode: 200, statusMessage: 'OK', data: users });
    } catch (error: unknown) {
      return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong' });
    }
  } else if (event.node.req.method === 'POST') {
    try {
      const { username, email } = await readBody(event);

      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return setResponse(event, { statusCode: 400, statusMessage: 'User already exists' });
      }

      const user = new User({ username, email });
      await user.save();

      return setResponse(event, { statusCode: 201, statusMessage: 'User created successfully', data: user });
    } catch (error) {
      console.error('Error creating user:', error);
      return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong' });
    }
  }
});
