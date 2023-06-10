import { useCast } from './useCast';
import { usePerson } from './usePerson';
import { useTransformCastToUIList } from './useTransformCastToUIList';

export function usePersonPageCtrl(id: string) {
  const person = usePerson(id);
  const cast = useCast(id);
  const castList = useTransformCastToUIList(cast);

  return {
    person,
    castList
  };
}
