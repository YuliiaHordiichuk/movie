import { CastItem } from '../TV.types';
import { UIList } from '../../common.types';
import { PERSON_ROUTES } from '../../person/navigation/person-routes';

export const useTransformCastToUIList = (cast: CastItem[]): UIList => {
  return cast.map((person) => {
    return {
      poster_path: person.profile_path,
      title: person.name,
      detail: person.character,
      id: person.id,
      path: `${PERSON_ROUTES.PERSON}/${person.id}`
    };
  });
};
