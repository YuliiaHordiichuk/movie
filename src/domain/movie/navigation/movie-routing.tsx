import { RouteObject } from 'react-router-dom';
import { MoviePage } from '../pages/MoviePage';
import { MOVIE_ROUTES } from './movie-routes';

export const movieRouting: RouteObject[] = [
  {
    path: `${MOVIE_ROUTES.MOVIE}/:id`,
    element: <MoviePage />
  }
];
