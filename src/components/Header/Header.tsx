import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link className="nav-item" to={'/'}>
        Home
      </Link>
      <Link className="nav-item" to={'/posts'}>
        Posts
      </Link>
      <Link className="nav-item" to={'/add'}>
        Add Post
      </Link>
    </div>
  );
};

export default Header;
