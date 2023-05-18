import { Link } from 'react-router-dom';
import { ALIASES } from '../core/router/alias';

export function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link className="error-page__link" to={ALIASES.HOME}>
        homepage
      </Link>
    </div>
  );
}
