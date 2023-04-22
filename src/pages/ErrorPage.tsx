import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ALIASES } from "../core/router/alias";

export function ErrorPage() {
  const error = useRouteError();
  console.warn(error);  
 
  const status = isRouteErrorResponse(error) ? error.status : null; 
  
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{status}</p>
      <Link className="error-page__link" to={ALIASES.HOME}>homepage</Link>
    </div>
  );

} 