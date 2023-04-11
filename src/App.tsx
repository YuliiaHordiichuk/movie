import { Layout } from './components/layout/Layout';
import { Router } from './core/router/Router';

export function App() {
  return <>
    <Layout>
      <Router></Router>
    </Layout>
  </>;
}
