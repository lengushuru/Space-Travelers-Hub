import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/planet.png';

export default function Navbar() {
  return (
    <>
      <header>
        <a className="logo" href="/">
          <img src={logo} alt="Company Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </a>
        <nav className="navbar">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="missions">Missions</NavLink>
          <hr />
          <NavLink to="myProfile">My Profile</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
