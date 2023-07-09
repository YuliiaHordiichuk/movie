import { TV_ROUTES } from '../../../domain/tv/navigation/tv-routes';
import { TV, UIList } from '../MainPage.types';

export const useTransformTVToUIList = (tvs: TV[]): UIList => {
  return tvs.map((tv) => {
    return {
      poster_path: tv.poster_path,
      title: tv.name,
      detail: tv.first_air_date.toLocaleDateString(),
      vote_average: tv.vote_average,
      id: tv.id,
      path: `${TV_ROUTES.TV}/${tv.id}`
    };
  });
};
