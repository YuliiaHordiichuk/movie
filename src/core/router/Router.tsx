import { Routes, Route,  } from 'react-router-dom';
import { RouterConfig } from './RouterConfig';

export function Router() {
  const routes = RouterConfig.map(route => {
    return <Route key={route.id} path={route.path} element={ route.element }/>;
  });
  return  (
    <Routes>
      {routes }
    </Routes>
  );
}