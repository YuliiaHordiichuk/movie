import { useCast } from './useCast';
import { useTV } from './useTV';
import { useTransformCastToUIList } from './useTransformCastToUiList';

export function useTVPageCtrl(id: string) {
  const tv = useTV(id);
  const cast = useCast(id);
  const castList = useTransformCastToUIList(cast);

  return {
    tv,
    castList
  };
}
