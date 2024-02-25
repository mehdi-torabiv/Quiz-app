import type { ApiResponse } from './interfaces';
import type { QuizQuestion } from './types';

export function transformApiResponse(apiResponse: ApiResponse): QuizQuestion[] | any[] {
  // Directly return the data part of the response
  // Assuming apiResponse directly has the properties you mentioned
  // and doesn't need unwrapping from a Proxy/Ref.
  return apiResponse.data;
}
