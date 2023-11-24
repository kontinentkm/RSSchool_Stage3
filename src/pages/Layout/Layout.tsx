//layout.tsx
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Layout.css';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
