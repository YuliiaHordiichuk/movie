import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/router/router';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<RouterProvider router={router} />);
