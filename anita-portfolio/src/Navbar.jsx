import React from 'react';
import './Navbar.css';


// Navbar Component
const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
