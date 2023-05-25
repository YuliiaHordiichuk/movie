type Method = 'GET' | 'PUT' | 'POST' | 'DELETE';

export type QueryParams = Record<string, string | number> | undefined;

export type RequestBody = RequestInit | undefined;

export interface RequestConfig {
  method: Method;
  queryParams: QueryParams;
  data?: RequestBody;
}
