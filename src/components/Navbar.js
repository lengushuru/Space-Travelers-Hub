import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/planet.png';
import { fetchRockets } from '../redux/features/rockets/rocketSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <header className="navbar">
        <a className="navbar-img" href="/">
          <img src={logo} alt="Company Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </a>
        <nav className="navbar-links">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="missions">Missions</NavLink>
          <hr className="line" />
          <NavLink to="myProfile">My Profile</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
