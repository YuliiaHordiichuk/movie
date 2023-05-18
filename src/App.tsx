import { RouterProvider } from 'react-router-dom';
import { router } from './core/router/router';

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
