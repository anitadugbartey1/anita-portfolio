import React from 'react';
import './About.css'; // Include this file for styling
import anitaID from '../src/assets/huid_profile_photo-transformed.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <img src={anitaID} alt="Anita Dugbartey" className="home-profile-pic" />
        <div className="about-text">
          <p>
            Hello! I'm Anita Dugbartey, an A.B. Candidate in Computer Science at Harvard College. My journey in the field of technology began with a passion for problem-solving and a curiosity for how things work. Over the years, I've specialized in Programming, Software Development, and Data Analysis.
          </p>
          <p>
            My academic journey has provided me with a strong foundation in computer science, while my hands-on projects and internships with companies like Salesforce and BlackRock have honed my skills in real-world applications. I thrive in collaborative environments and am always eager to take on new challenges.
          </p>
          <p>
            In addition to my technical skills, I am a strong advocate for continuous learning and personal growth. I regularly engage in workshops and courses to stay updated with the latest technologies and industry trends.
          </p>
          <p>
            Outside of technology, I enjoy powerlifting and cooking. Feel free to connect with me for any opportunities, collaborations, or just to chat about tech and innovation!
          </p>
        </div>
      </div>
      
    </section>
    
  );
};

export default About;
