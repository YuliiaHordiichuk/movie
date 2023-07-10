import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../components/layouts/main/Layout';
import { MainPage } from '../../pages/main-page/MainPage';
import { ErrorPage } from '../../pages/error-page/ErrorPage';

import { movieRouting } from '../../domain/movie/navigation/movie-routing';
import { personRouting } from '../../domain/person/navigation/person-routing';
import { TVRouting } from '../../domain/tv/navigation/tv-routing';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainPage />
      },
      ...TVRouting,
      ...personRouting,
      ...movieRouting
    ]
  }
]);
