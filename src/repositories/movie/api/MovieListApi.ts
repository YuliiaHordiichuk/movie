import { useGet } from '../../../core/http/hooks/useGet';
import { MovieListResponse, QueryParams } from '../Movie.types';
class MovieListApiClass {
  public getPopular(params?: QueryParams) {
    return useGet<MovieListResponse>('/movie/popular', params);
  }

  public getUpcoming(params?: QueryParams) {
    return useGet<MovieListResponse>('/movie/upcoming', params);
  }

  public getTrending(time_window: string, params?: QueryParams) {
    return useGet<MovieListResponse>(`/trending/movie/${time_window}`, params);
  }
}

const MovieListAPI = new MovieListApiClass();
export { MovieListAPI };
