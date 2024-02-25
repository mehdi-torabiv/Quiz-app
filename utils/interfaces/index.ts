export interface ApiResponse {
  statusCode: number;
  statusMessage: string;
  data: any[];
}

export interface ISetResponse {
  statusCode: number;
  statusMessage: string;
  data?: any;
  cause?: any;
}
