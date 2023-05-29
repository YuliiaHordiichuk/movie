import { MainPage, MoviePage, PersonPage, TVPage } from '../../pages/index.d';
import { ErrorPage } from '../../pages/index.d';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../components/layouts/main/Layout';

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
