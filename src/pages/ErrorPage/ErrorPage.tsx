import { Link } from 'react-router-dom';
import img from '../../assets/404-page-not-found.png';
import './ErrorPage.css';
import Header from '../../components/Header/Header';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <div className="error-page-main">
        <img src={img} alt="img" className="error-page-img" />
        <Link className="error-back-btn" to="/RSSchool_Stage3/dist/">
          Back
        </Link>
      </div>
    </div>
  );
}
