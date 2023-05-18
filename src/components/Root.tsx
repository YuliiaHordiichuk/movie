import { Outlet } from 'react-router-dom';
import { Footer, Header } from './index.d';

export function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
