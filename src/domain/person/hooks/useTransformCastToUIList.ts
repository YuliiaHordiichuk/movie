import { MEDIA_TYPES } from '../../../enums/common';
import { PersonCreditsCast } from '../Person.types';
import { UIList } from '../../common.types';
import { MOVIE_ROUTES } from '../../movie/navigation/movie-routes';
import { TV_ROUTES } from '../../tv/navigation/tv-routes';

export const useTransformCastToUIList = (credits: PersonCreditsCast[]): UIList => {
  return credits.map((movie) => {
    console.log(movie.media_type, 'movie.media_type');
    const path = movie.media_type === MEDIA_TYPES.MOVIE ? MOVIE_ROUTES.MOVIE : TV_ROUTES.TV;

    return {
      poster_path: movie.poster_path,
      title: movie.title,
      id: movie.id,
      path: `${path}/${movie.id}`
    };
  });
};
