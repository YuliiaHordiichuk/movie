import { MainPage,  MoviePage, TVPage, ErrorPage, PersonPage } from "../../pages/index.d";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
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
      {
        path: "/person/:id",
        element: <PersonPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  }, 
]);