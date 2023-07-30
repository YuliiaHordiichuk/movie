import { useTVCast } from './useTVCast';
import { useTV } from './useTV';
import { useTransformTVCastToUIList } from './useTransformCastToUiList';

export function useTVPageCtrl(id: string) {
  const tv = useTV(id);
  const cast = useTVCast(id);
  const castList = useTransformTVCastToUIList(cast);

  return {
    tv,
    castList
  };
}
