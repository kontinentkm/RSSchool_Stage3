//layout.tsx
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/Form_1">Form 1</NavLink>
        <NavLink to="/Form_2">Form 2</NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2023</footer>
    </>
  );
};

export { Layout };
