import Question from '~/server/models/questions';
import setResponse from '../utils/set-response';

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    try {
      const questions = await Question.find();
      return setResponse(event, { statusCode: 200, statusMessage: 'OK', data: questions });
    } catch (error: unknown) {
      return setResponse(event, { statusCode: 200, statusMessage: 'Something went wrong' });
    }
  }
});
