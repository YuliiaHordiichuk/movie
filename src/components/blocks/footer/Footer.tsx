import { Link } from 'react-router-dom';
import { ALIASES } from '../../../core/router/alias';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to={ALIASES.HOME} className="logo logo_big"></Link>
      </div>
    </footer>
  );
}
