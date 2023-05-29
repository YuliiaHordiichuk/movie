import { Outlet } from 'react-router-dom';
import { Header } from '../shared/header/Header';
import { Footer } from '../shared/footer/Footer';

export function Layout() {
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
