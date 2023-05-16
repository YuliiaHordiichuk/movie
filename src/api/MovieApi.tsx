import { API } from './API';
import { 
  RequestConfig, 
  MovieItemApi, 
  TVItemApi, 
  MovieDetailsApi, 
  TVDetailsApi, 
  ListAPIResponse,
  CreditsApi,
} from './types';
class MovieApiClass {
  moviePath = '/movie';
  tvPath = '/tv';
  trendingPath = '/trending';

  public async getMovieList(filter: string, config? : RequestConfig){
    const endpoint = `${this.moviePath}/${filter}`;
    const data = await API.request<ListAPIResponse<MovieItemApi>>(endpoint, config);
    return data.results; 
  };

  public async getTvList(filter: string, config? : RequestConfig ) {
    const endpoint = `${this.tvPath}/${filter}`;
    const data = await API.request<ListAPIResponse<TVItemApi>>(endpoint, config);
    return data.results; 
  };

  public async getTrendingMovieList(
    time_window: string, 
    config? : RequestConfig
  ) {
    const endpoint = `${this.trendingPath}${this.moviePath}/${time_window}`;
    const data = await API.request<ListAPIResponse<MovieItemApi>>(endpoint, config);
    return data.results; 
     
  };

  public async getTrendingTVList(
    time_window: string, 
    config? : RequestConfig
  ) {
    const endpoint = `${this.trendingPath}${this.tvPath}/${time_window}`;
    const data = await API.request<ListAPIResponse<TVItemApi>>(endpoint, config);
    return data.results; 
     
  };

  public async getMovieItem(id: string ): Promise<MovieDetailsApi> {
    const endpoint = `${this.moviePath}/${id}`;
    return await API.request<MovieDetailsApi>(endpoint);
  };

  public async getTVItem(id: string ): Promise<TVDetailsApi> {
    const endpoint = `${this.tvPath}/${id}`;
    return await API.request<TVDetailsApi>(endpoint);
  };

  public async getMovieCredits(id: string): Promise<CreditsApi> {
    const endpoint = `${this.moviePath}/${id}/credits`;
    return await API.request<CreditsApi>(endpoint);
  }

  public async getTVCredits(id: string): Promise<CreditsApi> {
    const endpoint = `${this.tvPath}/${id}/credits`;
    return await API.request<CreditsApi>(endpoint);
  }
};

const MovieApi =  new MovieApiClass();
export { MovieApi }; 