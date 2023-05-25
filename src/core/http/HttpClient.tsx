import { RequestConfig, QueryParams, RequestBody } from './http.types';

const enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE'
}

class HttpClientClass {
  private createSearchParams(queryParams: QueryParams): string {
    if (!queryParams) return '';

    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      searchParams.append(key, value.toString());
    });

    return `?${searchParams.toString()}`;
  }

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
    const baseURL = 'https://api.themoviedb.org/3';
    const authToken =
      // eslint-disable-next-line max-len
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjJhYjJmMDk1MjZhODAwNWZmZWI3YmIzNzEwYTFjOSIsInN1YiI6IjY0MmZmMGIyOWE2NDM1MDY2NmM2OTU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VPiPnjent6eRjwfRsqlE3Yn8Ik2L2-X-07R1GDbdcxc';
    const queryParams = this.createSearchParams(config.queryParams);
    const endpoint = `${baseURL}${path}${queryParams}`;
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

  public async post<T>(
    path: string,
    data?: RequestBody,
    queryParams?: QueryParams
  ): Promise<T> {
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

  public async put<T>(
    path: string,
    data?: RequestBody,
    queryParams?: QueryParams
  ): Promise<T> {
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

  public async delete<T>(
    path: string,
    data?: RequestBody,
    queryParams?: QueryParams
  ): Promise<T> {
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
