import { Outlet } from 'react-router-dom';
import { Header } from './blocks/header/Header';
import { Footer } from './blocks/footer/Footer';

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
