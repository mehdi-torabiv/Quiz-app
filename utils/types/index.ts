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

export interface ISetResponse {
  statusCode: number;
  statusMessage: string;
  data?: any;
  cause?: any;
}
