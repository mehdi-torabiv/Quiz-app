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
