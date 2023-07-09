import { Link } from 'react-router-dom';
import { ROUTES } from '../../core/router/routes';

export function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link className="error-page-link" to={ROUTES.HOME}>
        HOMEPAGE
      </Link>
    </div>
  );
}
