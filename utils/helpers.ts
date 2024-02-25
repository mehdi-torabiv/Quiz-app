import type { ApiResponse } from './interfaces';

export function transformApiResponse(apiResponse: ApiResponse): any[] | any {
  // Directly return the data part of the response
  // Assuming apiResponse directly has the properties you mentioned
  // and doesn't need unwrapping from a Proxy/Ref.
  return apiResponse?.data;
}
