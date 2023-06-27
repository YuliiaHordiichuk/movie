import { HttpClient } from '../HttpClient';

const http = new HttpClient();
export function useHttp() {
  return http;
}
