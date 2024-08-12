import React from 'react';
import './Footer.css'; // Include this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Anita Dugbartey. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="mailto:dugbarteyanita2@gmail.com" className="footer-link">Email Me</a></li>
          <li><a href="https://linkedin.com/in/anitadugbartey000" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/anitadugbartey1" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="/src/Contact.jsx" className="footer-link">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
