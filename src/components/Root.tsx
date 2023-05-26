import { Outlet } from 'react-router-dom';
import { Header } from './layouts/shared/header/Header';
import { Footer } from './layouts/shared/footer/Footer';

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
