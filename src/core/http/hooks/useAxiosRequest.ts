import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { Method } from '../HttpClient.types';
import { handleError } from '../handleError';
import { config as appConfig } from '../../../configs/app.config';

const { authToken } = appConfig;
axios.defaults.headers.common['Authorization'] = authToken;
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    handleError(error);
    return Promise.reject(error);
  }
);

export async function useAxiosRequest<T>(
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
