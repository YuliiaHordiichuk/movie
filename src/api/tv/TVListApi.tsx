import { HttpClient } from '../../core/http/HttpClient';
import { TVListResponse, QueryParams } from './TV_API.types';

class TVListAPIClass {
  public getPopular(params?: QueryParams) {
    return HttpClient.get<TVListResponse>('/tv/popular', params);
  }

  public getUpcoming(params?: QueryParams) {
    return HttpClient.get<TVListResponse>('/tv/upcoming', params);
  }

  public getTrending(time_window: string, params?: QueryParams) {
    return HttpClient.get<TVListResponse>(`/trending/tv/${time_window}`, params);
  }
}

const TVListAPI = new TVListAPIClass();
export { TVListAPI };
