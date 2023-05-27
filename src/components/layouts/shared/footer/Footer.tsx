import { Link } from 'react-router-dom';
import { ALIASES } from '../../../../configs/aliases.config';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to={ALIASES.HOME} className="logo logo_big"></Link>
      </div>
    </footer>
  );
}
