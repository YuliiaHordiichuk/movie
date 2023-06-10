import { CastItem, UIList } from '../MoviePage.types';
import { ALIASES } from '../../../enums/aliases';

export const useTransformCastToUIList = (cast: CastItem[]): UIList => {
  return cast.map((person) => {
    return {
      poster_path: person.profile_path,
      title: person.name,
      detail: person.character,
      id: person.id,
      path: `${ALIASES.PERSON}/${person.id}`
    };
  });
};
