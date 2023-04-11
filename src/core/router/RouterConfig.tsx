import { MainPage,  MoviePage, TVPage } from "../../pages/index.d";
import { v4 as uuid } from 'uuid';

export const RouterConfig = [
  {
    id: uuid(),
    path: '/',
    element: <MainPage></MainPage>
  },
  {
    id: uuid(),
    path: '/movie/:id',
    element: <MoviePage></MoviePage>
  },
  {
    id: uuid(),
    path: '/tv/:id',
    element: <TVPage></TVPage>
  }
];