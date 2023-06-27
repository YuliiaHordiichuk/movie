import { config as appConfig } from '../../configs/app.config';
import { createSearchParams } from '../utils/createSearchParams';
import { QueryParams } from './HttpClient.types';
import { API_METHODS } from './enums';
import { AxiosRequestConfig } from 'axios';
import { useAxiosRequest } from './hooks/useAxiosRequest';

export class HttpClient {
  private request = useAxiosRequest;

  private getEndpoint(path: string, queryParams?: QueryParams): string {
    const { baseApiUrl } = appConfig;
    const formattedQueryParams = createSearchParams(queryParams);
    return `${baseApiUrl}${path}${formattedQueryParams}`;
  }

  public async get<T>(path: string, queryParams?: QueryParams): Promise<T> {
    const endpoint = this.getEndpoint(path, queryParams);
    return this.request(API_METHODS.GET, endpoint);
  }

  public async post<T>(
    path: string,
    data?: AxiosRequestConfig,
    queryParams?: QueryParams
  ): Promise<T> {
    const endpoint = this.getEndpoint(path, queryParams);
    return this.request(API_METHODS.POST, endpoint, data);
  }

  public async put<T>(
    path: string,
    data?: AxiosRequestConfig,
    queryParams?: QueryParams
  ): Promise<T> {
    const endpoint = this.getEndpoint(path, queryParams);
    return this.request(API_METHODS.PUT, endpoint, data);
  }

  public async delete<T>(
    path: string,
    data?: AxiosRequestConfig,
    queryParams?: QueryParams
  ): Promise<T> {
    const endpoint = this.getEndpoint(path, queryParams);
    return this.request(API_METHODS.DELETE, endpoint, data);
  }
}
