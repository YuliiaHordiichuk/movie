import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../core/router/routes';

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={ROUTES.HOME} className="logo logo_short"></Link>
      </div>
      <div className="header__buttons">
        <button type="button">login</button>
        <button type="button">registration</button>
        <button type="button">search</button>
      </div>
    </header>
  );
}
