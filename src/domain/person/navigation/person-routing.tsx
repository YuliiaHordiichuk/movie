import { RouteObject } from 'react-router-dom';
import { PersonPage } from '../pages/PersonPage';
import { PERSON_ROUTES } from './person-routes';

export const personRoutes: RouteObject[] = [
  {
    path: `${PERSON_ROUTES.PERSON}/:id`,
    element: <PersonPage />
  }
];
