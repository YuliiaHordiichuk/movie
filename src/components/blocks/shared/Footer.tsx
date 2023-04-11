import { Link } from "react-router-dom";

export function Footer() {
  return <footer className="footer">
    <div className="footer__logo">
      <Link to={'/'} className="logo logo_big"></Link>
    </div>
  </footer>;
}