import { Link, useRouteError } from 'react-router-dom';
import img from '../../assets/404-page-not-found.png';
import './ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-page">
      <img src={img} alt="img" className="error-page-img" />
      <Link className="error-back-btn" to="/">
        Back
      </Link>
    </div>
  );
}
