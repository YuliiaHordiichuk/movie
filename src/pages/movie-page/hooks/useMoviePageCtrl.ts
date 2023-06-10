import { useCast } from './useCast';
import { useMovie } from './useMovie';
import { useTransformCastToUIList } from './useTransformCastToUiList';

export function useMoviePageCtrl(id: string) {
  const movie = useMovie(id);
  const cast = useCast(id);
  const castList = useTransformCastToUIList(cast);

  return {
    movie,
    castList
  };
}
