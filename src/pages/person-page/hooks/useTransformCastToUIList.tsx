import { ALIASES, MEDIA_TYPES, PersonCreditsCast, UIList } from '../PersonPage.types';

export const useTransformCastToUIList = (credits: PersonCreditsCast[]): UIList => {
  return credits.map((movie) => {
    console.log(movie.media_type, 'movie.media_type');
    const path = movie.media_type === MEDIA_TYPES.MOVIE ? ALIASES.MOVIE : ALIASES.TV;
    return {
      poster_path: movie.poster_path,
      title: movie.title,
      id: movie.id,
      path: `${path}/${movie.id}`
    };
  });
};
