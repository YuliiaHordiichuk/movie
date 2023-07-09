import { RouteObject } from 'react-router-dom';
import { TVPage } from '../pages/TVPage';
import { TV_ROUTES } from './tv-routes';

export const TVRoutes: RouteObject[] = [
  {
    path: `${TV_ROUTES.TV}/:id`,
    element: <TVPage />
  }
];
