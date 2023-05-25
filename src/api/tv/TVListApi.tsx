import { HttpClient, QueryParams } from '../../core/http/index.d';
import { TVListResponse } from './tv.types';

class TVListAPIClass {
  public getPopular(params?: QueryParams) {
    return HttpClient.get<TVListResponse>('/tv/popular', params);
  }

  public getUpcoming(params?: QueryParams) {
    return HttpClient.get<TVListResponse>('/tv/upcoming', params);
  }

  public getTrending(time_window: string, params?: QueryParams) {
    return HttpClient.get<TVListResponse>(
      `/trending'/tv/${time_window}`,
      params
    );
  }
}

const TVListAPI = new TVListAPIClass();
export { TVListAPI };
