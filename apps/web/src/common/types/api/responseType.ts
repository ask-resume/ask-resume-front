export interface ApiResult<T> {
  data: T;
  status: number;
  timestamp: string;
}
