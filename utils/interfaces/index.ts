export interface ApiResponse<T = any> {
  statusCode: number;
  statusMessage: string;
  data?: T;
  cause?: any;
}

export interface ISetResponse {
  statusCode: number;
  statusMessage: string;
  data?: any;
  cause?: any;
}
