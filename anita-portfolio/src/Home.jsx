import React from 'react';
import './Home.css'; // Include this file for styling

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-intro">Hi, I'm Anita Dugbartey, an A.B. Candidate in Computer Science at Harvard College. My specialization lies in Programming, Software Development, and Data Analysis.</p>
        <p className="home-description">
          Explore my portfolio to learn more about my skills and past experiences. Feel free to contact me for any inquiries or collaborations.
        </p>
        <a href="Portfolio.jsx" className="home-button">View My Portfolio</a>
      </div>
    </section>
  );
};

export default Home;
