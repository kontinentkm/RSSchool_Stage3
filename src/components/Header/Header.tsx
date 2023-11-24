//header.tsx
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link className="nav-item" to={'/RSSchool_Stage3/dist/'}>
        Home
      </Link>
      <Link className="nav-item" to={'/RSSchool_Stage3/dist/posts'}>
        Posts
      </Link>
      <Link className="nav-item" to={'/RSSchool_Stage3/dist/add'}>
        Add Post
      </Link>
    </div>
  );
};

export default Header;
