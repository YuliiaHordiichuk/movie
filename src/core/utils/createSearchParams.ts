import { QueryParams } from '../http/HttpClient.types';

export function createSearchParams(queryParams: QueryParams): string {
  if (!queryParams) return '';

  const searchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(([key, value]) => {
    searchParams.append(key, value.toString());
  });

  return `?${searchParams.toString()}`;
}
