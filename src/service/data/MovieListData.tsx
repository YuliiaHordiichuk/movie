import { MovieApi } from '../../api/MovieApi';
import { Movie } from '../types';
import { RequestConfig, MovieItemApi, TVItemApi } from '../../api/types';
import { TrendingTimeWindow } from '../types';

class MovieListDataClass {
  private transformMovieList(movie: MovieItemApi): Movie {
    const {
      poster_path,
      overview,
      release_date,
      id,
      title,
      popularity,
      vote_average
    } = movie;
    return {
      type: 'movie',
      poster_path,
      overview,
      release_date,
      id,
      title,
      popularity,
      vote_average: Math.round(vote_average * 10)
    };
  }

  private transformTvList(tv: TVItemApi): Movie {
    const {
      poster_path,
      overview,
      first_air_date,
      id,
      name,
      popularity,
      vote_average
    } = tv;
    return {
      type: 'tv',
      poster_path,
      release_date: first_air_date,
      title: name,
      overview,
      id,
      popularity,
      vote_average: Math.round(vote_average * 10)
    };
  }

  public getPopularList(config?: RequestConfig) {
    const filter = 'popular';
    const movieList = MovieApi.getMovieList(filter, config);
    const tvList = MovieApi.getTvList(filter, config);

    return Promise.all([movieList, tvList]).then(([movieList, tvList]) => {
      const transformedMovies = movieList.map(this.transformMovieList);
      const transformedTV = tvList.map(this.transformTvList);
      return [...transformedMovies, ...transformedTV];
    });
  }

  public getUpcomingList(config?: RequestConfig) {
    const filter = 'upcoming';
    return MovieApi.getMovieList(filter, config).then((movieList) => {
      const transformedMovies = movieList.map(this.transformMovieList);
      return transformedMovies;
    });
  }

  public getTrendingList(period: TrendingTimeWindow, config?: RequestConfig) {
    const movieList = MovieApi.getTrendingMovieList(period, config);
    const tvList = MovieApi.getTrendingTVList(period, config);
    return Promise.all([movieList, tvList]).then(([movieList, tvList]) => {
      const transformedMovies = movieList.map(this.transformMovieList);
      const transformedTV = tvList.map(this.transformTvList);
      return [...transformedMovies, ...transformedTV];
    });
  }
}

const MovieListData = new MovieListDataClass();
export { MovieListData };
