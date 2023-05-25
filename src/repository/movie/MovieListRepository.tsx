import { MovieListAPI } from '../../api/movie/MovieListApi';

import { QueryParams } from '../../core/http/index.d';
import { Movie } from './movie.types';
import { TrendingTimeWindow } from '../common.types';
import { MovieItemAPI } from '../../api/movie/movie.types';
import { MEDIA_TYPES } from '../../configs/movie.config';

class MovieListRepositoryClass {
  private transformList(movie: MovieItemAPI): Movie {
    return {
      ...movie,
      type: MEDIA_TYPES.MOVIE,
      vote_average: Math.round(movie.vote_average * 10),
      release_date: new Date(movie.release_date)
    };
  }
  public async getPopular<T extends QueryParams>(config?: T) {
    const movieList = await MovieListAPI.getPopular(config);
    const transformedList = movieList.results.map(this.transformList);
    return {
      ...movieList,
      results: transformedList
    };
  }
  public async getUpcoming<T extends QueryParams>(config?: T) {
    const movieList = await MovieListAPI.getUpcoming(config);
    const transformedList = movieList.results.map(this.transformList);
    return {
      ...movieList,
      results: transformedList
    };
  }
  public async getTrending<T extends QueryParams>(
    time_window: TrendingTimeWindow,
    config?: T
  ) {
    const movieList = await MovieListAPI.getTrending(time_window, config);
    const transformedList = movieList.results.map(this.transformList);
    return {
      ...movieList,
      results: transformedList
    };
  }
}

const MovieListRepository = new MovieListRepositoryClass();
export { MovieListRepository };
