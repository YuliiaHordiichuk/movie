import { MainPage,  MoviePage, TVPage } from "../../pages/index.d";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/tv/:id",
        element: <TVPage />,
      },
    ],
  },
]);