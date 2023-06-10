import { Movie, UIList } from '../MainPage.types';
import { ALIASES } from '../../../enums/aliases';

export const useTransformMoviesToUIList = (movies: Movie[]): UIList => {
  return movies.map((movie) => {
    return {
      poster_path: movie.poster_path,
      title: movie.title,
      detail: movie.release_date.toLocaleDateString(),
      vote_average: movie.vote_average,
      id: movie.id,
      path: `${ALIASES.MOVIE}/${movie.id}`
    };
  });
};
