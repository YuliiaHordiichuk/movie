import { PERSON_ROUTES } from '../../person/navigation/person-routes';
import { CastItem, UIList } from '../Movie.types';

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
