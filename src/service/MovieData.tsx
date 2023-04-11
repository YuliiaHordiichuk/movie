import { MovieApi } from "../api/MovieApi";
import { imgPath } from "./variables";
import { Movie } from './types';
import { RequestConfig, MovieItemApi, TVItemApi } from "../api/types";
import { TrendingTimeWindow } from '../service/types';

class MovieDataClass {
  private transformMovieList(movie : MovieItemApi) : Movie {
    const { poster_path, overview, release_date, id, title, popularity, vote_average } = movie; 
    return {
      type : "movie",
      poster_path: `${imgPath}${poster_path}`, 
      overview, 
      release_date, 
      id, 
      title, 
      popularity,
      vote_average

    };
  };

  private transformTvList(tv : TVItemApi) : Movie {
    const { poster_path, overview, first_air_date, id, name, popularity, vote_average} = tv; 
    return {
      type : "tv",
      poster_path: `${imgPath}${poster_path}`, 
      release_date: first_air_date,
      title : name,
      overview,
      id,
      popularity,
      vote_average

    };
  };

  public getPopularList(config? : RequestConfig) {
    const filter = 'popular';
    const movieList = MovieApi.getMovieList(filter, config);
    const tvList = MovieApi.getTvList(filter, config);
    return Promise.all([movieList, tvList]).then( ([ movieList, tvList ]) => {
      const transformedMovies = movieList.map(this.transformMovieList);
      const transformedTV = tvList.map(this.transformTvList); 
      return [...transformedMovies, ...transformedTV];
    });
  };

  public getUpcomingList(config? : RequestConfig) {
    const filter = 'upcoming';
    return  MovieApi.getMovieList(filter, config).then(( movieList) => {
      const transformedMovies = movieList.map(this.transformMovieList);
      return transformedMovies; 
    });
  };

  public getTrendingList(period: TrendingTimeWindow, config?: RequestConfig) {
    const movieList = MovieApi.getTrendingList<MovieItemApi[]>('movie', period,  config);
    const tvList = MovieApi.getTrendingList<TVItemApi[]>('tv', period,  config);
    return Promise.all([movieList, tvList]).then( ([ movieList, tvList ]) => {
      const transformedMovies = movieList.map(this.transformMovieList);
      const transformedTV = tvList.map(this.transformTvList); 
      return [...transformedMovies, ...transformedTV];
    });
  }
}

const MovieData = new MovieDataClass();
export { MovieData };