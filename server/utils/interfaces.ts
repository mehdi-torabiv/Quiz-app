export interface Submission {
  _id: string;
  text: number;
}

interface User {
  _id: string;
  username: string;
  email: string;
}

export interface Scoreboard {
  user: User['_id'];
  username: string;
  email: string;
  score: number;
  createdAt: Date;
}
