import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../components/layouts/main/Layout';
import { MoviePage } from '../../domain/movie/pages/MoviePage';
import { PersonPage } from '../../domain/person/pages/PersonPage';
import { TVPage } from '../../domain/tv/pages/TVPage';
import { MainPage } from '../../pages/main-page/MainPage';
import { ErrorPage } from '../../pages/error-page/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/movie/:id',
        element: <MoviePage />
      },
      {
        path: '/tv/:id',
        element: <TVPage />
      },
      {
        path: '/person/:id',
        element: <PersonPage />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);
