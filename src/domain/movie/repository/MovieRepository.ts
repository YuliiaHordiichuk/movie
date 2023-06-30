import { MovieAPI } from '../api/MovieAPI';
import {
  MovieDetails,
  MovieDetailsAPI,
  GENDER_TYPES,
  MEDIA_TYPES,
  CastItem,
  CastAPI
} from '../Movie.types';

class MovieRepositoryClass {
  private transformMovieItem(movie: MovieDetailsAPI): MovieDetails {
    return {
      ...movie,
      release_date: new Date(movie.release_date),
      runtime: `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`,
      vote_average: Math.round(movie.vote_average * 10),
      type: MEDIA_TYPES.MOVIE
    };
  }

  private transformCast(item: CastAPI): CastItem {
    const gender = item.gender === 1 ? GENDER_TYPES.FEMALE : GENDER_TYPES.MALE;

    return {
      ...item,
      gender
    };
  }

  public async getDetails(id: string) {
    const movie = await MovieAPI.getItem(id);

    return this.transformMovieItem(movie);
  }

  public async getCast(id: string) {
    const credits = await MovieAPI.getCredits(id);

    return credits.cast.map(this.transformCast);
  }
}

const MovieRepository = new MovieRepositoryClass();
export { MovieRepository };
