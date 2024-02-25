import type { QuizQuestion } from '../types';

export interface ApiResponse {
  statusCode: number;
  statusMessage: string;
  data: QuizQuestion[];
}
