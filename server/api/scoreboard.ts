import setResponse from '../utils/set-response';
import Scoreboard from '~/server/models/scoreboard';

async function calculatePercentile(userRank: number, totalScores: number): Promise<string> {
  const percentile = (userRank / totalScores) * 100;
  let notificationMessage = '';
  if (percentile >= 90) {
    notificationMessage = 'You are in the top 10% of users.';
  } else if (percentile >= 75) {
    notificationMessage = 'You are in the top 25% of users.';
  } else if (percentile >= 50) {
    notificationMessage = 'You are in the top 50% of users.';
  } else {
    notificationMessage = 'You are in the bottom 50% of users.';
  }
  return notificationMessage;
}

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    try {
      const scoreboards = await Scoreboard.find().sort({ score: -1 }).limit(10);
      return setResponse(event, { statusCode: 200, statusMessage: 'OK', data: scoreboards });
    } catch (error) {
      console.error('Error fetching scoreboards:', error);
      return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong' });
    }
  } else if (event.node.req.method === 'POST') {
    try {
      const { score, email, username } = await readBody(event);

      if (!email || !username) {
        return setResponse(event, { statusCode: 400, statusMessage: 'Invalid input data' });
      }

      const existingScoreboard = await Scoreboard.findOne({ $or: [{ email }, { username }] });

      if (existingScoreboard) {
        existingScoreboard.score = score;
        await existingScoreboard.save();

        const allScores = await Scoreboard.find({}).sort({ score: -1 });

        const userRank = allScores.findIndex((entry) => entry._id === existingScoreboard._id) + 1;

        const notificationMessage = await calculatePercentile(userRank, allScores.length);

        return setResponse(event, {
          statusCode: 200,
          statusMessage: 'Score updated',
          data: {
            existingScoreboard,
            notificationMessage,
          },
        });
      } else {
        const scoreboardData = {
          score,
          email,
          username,
        };
        const newScoreboard = new Scoreboard(scoreboardData);
        await newScoreboard.save();

        const allScores = await Scoreboard.find({}).sort({ score: -1 });

        const userRank = allScores.length + 1;

        const notificationMessage = await calculatePercentile(userRank, allScores.length);

        return setResponse(event, {
          statusCode: 201,
          statusMessage: 'Scoreboard created',
          data: {
            newScoreboard,
            notificationMessage,
          },
        });
      }
    } catch (error) {
      console.error('Error saving/updating scoreboard:', error);
      return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong' });
    }
  } else {
    return setResponse(event, { statusCode: 405, statusMessage: 'Method Not Allowed' });
  }
});
