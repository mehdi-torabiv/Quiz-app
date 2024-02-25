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
  } else if (event.node.req.method === 'POST') {
    try {
      const selectedAnswerIndices = await readBody(event);

      const questions = await Question.find();

      let correctCount = 0;

      questions.forEach((question, index) => {
        if (selectedAnswerIndices[index] === question.correctAnswer) {
          correctCount++;
        }
      });

      return setResponse(event, { statusCode: 200, statusMessage: 'OK', data: { correctCount } });
    } catch (error) {
      return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong' });
    }
  }
});
