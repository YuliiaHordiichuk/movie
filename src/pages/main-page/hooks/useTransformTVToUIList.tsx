import { ALIASES, TV, UIList } from '../main-page.types';

export const useTransformTVToUIList = (tvs: TV[]): UIList => {
  return tvs.map((tv) => {
    return {
      poster_path: tv.poster_path,
      title: tv.name,
      detail: tv.first_air_date.toLocaleDateString(),
      vote_average: tv.vote_average,
      id: tv.id,
      path: `${ALIASES.TV}/${tv.id}`
    };
  });
};
