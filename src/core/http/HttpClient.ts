import { config as appConfig } from '../../configs/app.config';
import { createSearchParams } from '../utils/createSearchParams';
import { RequestConfig, QueryParams, RequestBody } from './HttpClient.types';

const enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE'
}

class HttpClientClass {
  private async handleError(response: Response) {
    // to do => handle it in another place?
    // to do => get error text and create notification
    const error = await response.json();
    const errorCode = response.status;
    const message = error.status_message as string;
    switch (errorCode) {
      case 401:
        console.log(errorCode, message);
        break;
      case 403:
        console.log(errorCode, message);
        break;
      case 404:
        console.log(errorCode, message);
        break;
    }
  }

  private async fetch<T>(path: string, config: RequestConfig): Promise<T> {
    const { baseApiUrl, authToken } = appConfig;
    const queryParams = createSearchParams(config.queryParams);
    const endpoint = `${baseApiUrl}${path}${queryParams}`;
    const requestConfig = {
      method: config.method,
      headers: {
        accept: 'application/json',
        Authorization: authToken
      }
    };

    try {
      const response = config.data
        ? await fetch(endpoint, requestConfig)
        : await fetch(endpoint, {
            ...requestConfig,
            body: JSON.stringify(config.data)
          });
      if (!response.ok) {
        this.handleError(response);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      // to do how to catch error here???
      throw new Error('error');
    }
  }

  public async get<T>(path: string, queryParams?: QueryParams): Promise<T> {
    const config: RequestConfig = {
      method: METHODS.GET,
      queryParams
    };
    try {
      return await this.fetch<T>(path, config);
    } catch (error) {
      throw new Error('error in api');
    }
  }

  public async post<T>(path: string, data?: RequestBody, queryParams?: QueryParams): Promise<T> {
    const config: RequestConfig = {
      method: METHODS.POST,
      queryParams,
      data: data
    };

    try {
      return await this.fetch<T>(path, config);
    } catch (error) {
      throw new Error('error');
    }
  }

  public async put<T>(path: string, data?: RequestBody, queryParams?: QueryParams): Promise<T> {
    const config: RequestConfig = {
      method: METHODS.PUT,
      queryParams,
      data: data
    };
    try {
      return await this.fetch<T>(path, config);
    } catch (error) {
      throw new Error('error');
    }
  }

  public async delete<T>(path: string, data?: RequestBody, queryParams?: QueryParams): Promise<T> {
    const config: RequestConfig = {
      method: METHODS.DELETE,
      queryParams,
      data: data
    };
    try {
      return await this.fetch<T>(path, config);
    } catch (error) {
      throw new Error('error');
    }
  }
}

const HttpClient = new HttpClientClass();
export { HttpClient };
