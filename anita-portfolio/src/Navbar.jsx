import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="Home.jsx">Home</a></li>
        <li><a href="About.jsx">About</a></li>
        <li><a href="Portfolio.jsx">Portfolio</a></li>
        <li><a href="Contact.jsx">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

