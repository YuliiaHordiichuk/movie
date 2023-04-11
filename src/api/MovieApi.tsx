import { HttpProvider } from '../core/HttpProvider'; 
import { RequestConfig, MovieItemApi, TVItemApi} from './types';


class MovieApiClass {
  moviePath = '/movie';
  tvPath = '/tv';
  trending = '/trending';
  
  public async getMovieList(filter: string, config? : RequestConfig) : Promise<MovieItemApi[]>{
    const endpoint = `${this.moviePath}/${filter}`;
    try {
      const response = await HttpProvider.get(endpoint, config);
      const data = await response.json();
      return data.results;
    }
    catch(error) {
      throw new Error('something went wrong');
    }
  };

  public async getTvList(filter: string, config? : RequestConfig ) : Promise<TVItemApi[]> {
    const endpoint = `${this.tvPath}/${filter}`;
    try {
      const response = await HttpProvider.get(endpoint, config);  
      const data = await response.json();
      return data.results;
    }
    catch(error) {
      throw new Error('something went wrong');
    }
  };

  public async getTrendingList<MediaType>(
    type: string, 
    time_window: string, 
    config? : RequestConfig
  ) : Promise<MediaType> {
    try {
      const endpoint = `${this.trending}/${type}/${time_window}`;
      const response = 
        await HttpProvider.get(endpoint, config);
      const data = await response.json();
      return data.results;
    }
    catch(error) {
      throw new Error('something went wrong');
    }
  };
};

const MovieApi =  new MovieApiClass();
export { MovieApi }; 