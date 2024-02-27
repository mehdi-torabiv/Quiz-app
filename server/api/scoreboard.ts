import setResponse from '../utils/set-response';
import Scoreboard from '~/server/models/scoreboard';

async function isUserInTopSixtyPercent(userRank: number, totalScores: number): Promise<boolean> {
  const sixtyPercentRank = Math.ceil(totalScores * 0.4);
  return userRank <= sixtyPercentRank;
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
      } else {
        const newScore = new Scoreboard({ score, email, username });
        await newScore.save();
      }

      const allScores = await Scoreboard.find({}).sort({ score: -1 });
      const userRank = allScores.findIndex((entry) => entry.email === email || entry.username === username) + 1;
      const inTopSixtyPercent = await isUserInTopSixtyPercent(userRank, allScores.length);

      const statusMessage = inTopSixtyPercent
        ? 'You are in the top 60% of users.'
        : 'You are not in the top 60% of users.';

      return setResponse(event, {
        statusCode: 200,
        statusMessage,
        data: { existingScoreboard, notificationMessage: statusMessage },
      });
    } catch (error) {
      console.error('Error saving/updating scoreboard:', error);
      return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong' });
    }
  } else {
    return setResponse(event, { statusCode: 405, statusMessage: 'Method Not Allowed' });
  }
});
