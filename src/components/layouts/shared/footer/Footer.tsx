import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../core/router/routes';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to={ROUTES.HOME} className="logo logo_big"></Link>
      </div>
    </footer>
  );
}
