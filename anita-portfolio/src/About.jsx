import React from 'react';
import './About.css'; // Include this file for styling


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">Anita's Biography</h2>
        
        <div className="about-text">
          <p>
          Hailing from The Empire State, Anita has always been passionate about making her mark. Born to West-African immigrants, Anita has a strong drive to improve her country of Ghana and the new communities she has been exposed to as a result of her parents migration to America. Anita grew up in the South Bronx, a neighborhood that has battled issues like educational inequity and socioeconomic neglect. 
          </p>
          <p>
           Anita's first introduction to computer science came in high school when she joined a program called America On Tech. She participated in the Tech360 and Tech Flex leaders programs where she gained her first experiences in web development.
          </p>
          <p>
            In addition to her technical skills, She is a strong advocate for continuous learning and personal growth. She regularly engages in workshops and courses to stay updated with the latest technologies and industry trends.
          </p>
          <p>
            Outside of technology, She enjoys powerlifting and cooking. Feel free to connect with her for any opportunities, collaborations, or just to chat about tech and innovation!
          </p>
        </div>
      </div>
      
    </section>
    
  );
};

export default About;
