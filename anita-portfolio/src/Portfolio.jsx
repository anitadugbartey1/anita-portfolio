import React from 'react';
import './Portfolio.css';

// Portfolio Component
const Portfolio = () => {
    return (
      <div className="portfolio">
        <Navbar />
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>Write about yourself here.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <p>Showcase your work here.</p>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Add your contact information here.</p>
        </section>
      </div>
    );
  };
  export default Portfolio;