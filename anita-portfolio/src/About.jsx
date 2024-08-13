import React from 'react';
import './About.css'; // Include this file for styling
import anitaID from '../src/assets/huid_profile_photo-transformed.jpg';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <img src= {anitaID} alt="Anita Dugbartey" className="home-profile-pic" />
        <div className="about-text">
         <div>
          <p>
          I am Anita Mamley Dugbartey, born and raised in New York City to West-African immigrants. Growing up in the South Bronx—a neighborhood defined by resilience in the face of educational inequities and socioeconomic challenges—instilled in me a deep commitment to creating meaningful change. My dual identity as a Ghanaian-American drives my passion to uplift both my heritage and the communities I proudly call home.

My journey into technology began in high school through my involvement with America On Tech. The Tech360 and Tech Flex Leaders programs offered me invaluable hands-on experience in web development, laying a strong foundation for my pursuit of computer science. These formative experiences not only equipped me with technical skills but also inspired a vision to harness technology for social good.

I am committed to continuous learning and personal growth, regularly engaging in workshops and courses to stay ahead of emerging technologies and industry trends. This proactive approach ensures that I am not just adapting to change but actively shaping it.

Outside of the tech world, I channel my discipline and determination into powerlifting, and I express my creativity through cooking. Whether discussing the latest in tech innovation, exploring collaborative opportunities, or simply exchanging ideas, I am eager to connect and contribute.
          </p>
         </div>   
        </div>
      </div>
      
    </section>
    
  );
};

export default About;
