import { HttpProvider } from '../core/HttpProvider';
import { RequestConfig } from './types';

class APIClass {
  public async request<T>(
    endpoint: string,
    config?: RequestConfig
  ): Promise<T> {
    try {
      const response = await HttpProvider.get(endpoint, config);
      if (!response.ok) {
        throw Error();
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('something went wrong');
    }
  }
}

const API = new APIClass();
export { API };
