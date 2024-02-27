export type Quiz = {
  questionText: string;
  answers: QuizAnswer[];
};

export type QuizQuestion = {
  _id: string;
  question: string;
  answers: QuizAnswer[];
  correct: string;
};

export type QuizAnswer = { _id: string; text: string };

export type userType = {
  username: string;
  email: string;
};

export type User = {
  _id: string;
  username: string;
  email: string;
};

export type Scoreboard = {
  user: User['_id'];
  username: string;
  email: string;
  score: number;
  createdAt: Date;
};
