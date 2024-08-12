import React from 'react';
import './Home.css'; // Include this file for styling
import anitaProfile from '../src/assets/AnitaProfilepic.jpg'; // Correctly import the image

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-title">Welcome!</h1>
        <img src={anitaProfile} alt="Anita Dugbartey" className="home-profile-pic" /> {/* Use the image here */}
        <p className="home-intro">
          Hello, I'm Anita Dugbartey, an A.B. Candidate in Computer Science at Harvard College. My specialization lies in Programming, Software Development, and Data Analysis.
        </p>
        <p className="home-description">
          Explore my portfolio to learn more about my skills and past experiences. Feel free to contact me for any inquiries or collaborations.
        </p>
        <a href="/portfolio" className="home-button">View My Portfolio</a>
      </div>
    </section>
  );
};

export default Home;

