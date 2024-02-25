import mongoose, { Schema, Document } from 'mongoose';

interface User {
  _id: string;
  username: string;
  email: string;
}

export interface Scoreboard extends Document {
  user: User['_id'];
  username: string;
  email: string;
  score: number;
  createdAt: Date;
}

const scoreboardSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
  score: { type: Number, required: true, min: 1, max: 10 },
  createdAt: { type: Date, default: Date.now },
});

const ScoreboardModel = mongoose.model<Scoreboard>('Scoreboard', scoreboardSchema);

export default ScoreboardModel;
