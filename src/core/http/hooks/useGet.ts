import { QueryParams } from '../HttpClient.types';
import { useHttp } from './useHttp';

export function useGet<T>(path: string, queryParams?: QueryParams): Promise<T> {
  const http = useHttp();
  return http.get(path, queryParams);
}
