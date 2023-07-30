import { useMovieCast } from './useMovieCast';
import { useMovie } from './useMovie';
import { useTransformMovieCastToUIList } from './useTransformMovieCastToUiList';

export function useMoviePageCtrl(id: string) {
  const movie = useMovie(id);
  const cast = useMovieCast(id);
  const castList = useTransformMovieCastToUIList(cast);

  return {
    movie,
    castList
  };
}
