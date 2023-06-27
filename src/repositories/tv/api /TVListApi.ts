import { useGet } from '../../../core/http/hooks/useGet';
import { TVListResponse, QueryParams } from '../TV.types';

class TVListAPIClass {
  public getPopular(params?: QueryParams) {
    return useGet<TVListResponse>('/tv/popular', params);
  }

  public getUpcoming(params?: QueryParams) {
    return useGet<TVListResponse>('/tv/upcoming', params);
  }

  public getTrending(time_window: string, params?: QueryParams) {
    return useGet<TVListResponse>(`/trending/tv/${time_window}`, params);
  }
}

const TVListAPI = new TVListAPIClass();
export { TVListAPI };
