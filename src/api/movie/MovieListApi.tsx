import { HttpClient, QueryParams } from '../../core/http/index.d';
import { MovieListResponse } from './movie.types';
class MovieListApiClass {
  public getPopular(params?: QueryParams) {
    return HttpClient.get<MovieListResponse>('/movie/popular', params);
  }

  public getUpcoming(params?: QueryParams) {
    return HttpClient.get<MovieListResponse>('/movie/upcoming', params);
  }

  public getTrending(time_window: string, params?: QueryParams) {
    return HttpClient.get<MovieListResponse>(
      `/trending/movie/${time_window}`,
      params
    );
  }
}

const MovieListAPI = new MovieListApiClass();
export { MovieListAPI };
