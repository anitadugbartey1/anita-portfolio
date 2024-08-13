import React from 'react';
import './Footer.css'; // Include this file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Anita Dugbartey. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="mailto:dugbarteyanita2@gmail.com" className="footer-link">Email Me</Link></li>
          <li><Link to="https://linkedin.com/in/anitadugbartey000" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
          <li><Link to="https://github.com/anitadugbartey1" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
          <li><Link to="/contact" className="footer-link">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
