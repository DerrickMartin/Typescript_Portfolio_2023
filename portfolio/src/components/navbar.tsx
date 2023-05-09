import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import ToggleMenu from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="/interest" className="nav-link">Interest</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className='nav-item'>
          <ToggleMenu />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

  