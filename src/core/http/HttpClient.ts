import { config } from '../../configs/app.config';
import { createSearchParams } from '../utils/createSearchParams';
import { Method, QueryParams } from './HttpClient.types';
import { API_METHODS } from './enums';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { handleError } from './handleError';

axios.defaults.headers.common['Authorization'] = config.authToken;
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    handleError(error);

    return Promise.reject(error);
  }
);
class HttpClientClass {
  private async request<T>(
    method: Method,
    endpoint: string,
    data?: AxiosRequestConfig
  ): Promise<T> {
    try {
      let response;
      if (data) {
        response = await axios[method]<T>(endpoint, data);
      } else {
        response = await axios[method]<T>(endpoint);
      }

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  private getEndpoint(path: string, queryParams?: QueryParams): string {
    const formattedQueryParams = createSearchParams(queryParams);

    return `${config.baseApiUrl}${path}${formattedQueryParams}`;
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

const httpClient = new HttpClientClass();
export { httpClient };
