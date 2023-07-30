import { RouterProvider } from 'react-router-dom';
import { router } from './core/router/Router';

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
