import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>

        <Education />
        <Skills />
        <Awards />
        <Experiences />
        <Projects />

      </div>
    </section>
  );
};

const Education = () => (
  <div className="education">
    <h2>Education</h2>
    <ul>
      <li>
        <h3>Bachelor of Arts in Computer Science</h3>
        <p><strong>Harvard College,</strong> Expected Graduation: May 2026</p>
        <p><strong>Coursework</strong>: CS 1200 (Intro to Algorithms), CS 20 (Intro to Discrete Math), CS 32 (Intro to Computer Programming 1), Stat 100 (Intro to R Programming), CS 1710 (Visualization), Applied Math 22A (Linear Algebra), MIT 15.501 (Accounting)</p>
      </li>
    </ul>
  </div>
);

const Skills = () => (
  <div className="skills">
    <h2>Skills</h2>
    <ul>
      <li><strong>Programming Languages:</strong> JavaScript, R, Python, LaTeX, Go (Beginner Fluency)</li>
      <li><strong>Web Technologies:</strong> PostgreSQL, Express.js, React, Node.js, HTML, CSS</li>
      <li><strong>Tools:</strong> Postman, Git, Prisma, Render, Vercel, Microsoft Suite, AWS Cloud (Certification in Progress)</li>
      <li><strong>Soft Skills:</strong> Problem Solving, Communication, Teamwork, Public Speaking, Project Management</li>
    </ul>
  </div>
);

const Awards = () => (
  <div className="awards">
    <h2>Awards and Honors</h2>
    <ul>
      <li>
        <strong>Scholarships:</strong> Ron Brown Scholar, Dell Scholar, Alpha Kappa Alpha (AKA) Tau Nu Omega Scholar, Blacks at Microsoft Scholar, Association of Blacks in Energy (AABE) Scholar, David and Dovetta Wilson Scholar, UNCF Edna Blum Scholar, UNCF Pierre and Tana Matisse Foundation Scholar, New York Urban League Whitney M. Young Scholar, United Black Golfers Association Scholar
      </li>
      <li>
        <strong>Honors:</strong> Harvard Club of New York Foundation Scholar, Kathlena Wilson Award, 2023 Harvard Club of New York Summer Fellow
        <p>In 2022, I was one of only six students from New York City to be named a Foundation Scholar by the Harvard Club of New York City. As a Foundation Scholar, I have had the honor of representing both the Harvard Club and New York City students through my various on- and off-campus activities. In 2023, the Harvard Club awarded me an $8,000 fellowship grant to support my work as a data science intern for the NYC government. Additionally, I received the Kathlena Wilson Award from the David and Dovetta Wilson Scholarship Foundation in recognition of my academic excellence and dedicated service to my South Bronx community.</p>
      </li>
    </ul>
  </div>
);

const Experiences = () => (
  <div className="experiences">
    <h2>Work Experiences</h2>
    <ul>
      <li>
        <h3>Software Engineering Intern (Futureforce Tech LaunchPad Program)</h3>
        <p><strong>Salesforce (San Francisco, California)</strong> - May 2024 - August 2024</p>
        <p>Completed four intensive week-long app projects, leveraging AI tools to enhance functionality. Collaborated with a team to develop an original group app, demonstrating strong project management and teamwork skills. Gained proficiency in essential web development technologies, including HTML, CSS, JavaScript, APIs, Node/Express, React, PostgreSQL, and Render, dedicating over 400 hours to the program.</p>
      </li>
      <li>
        <h3>Data Science and Strategy Intern</h3>
        <p><strong>NYC Department Of Small Business Services (New York, NY)</strong> - June 2023 - August 2023</p>
        <p>Assisted the Executive Director and auditing team in preparing a compliance report for over 10,000 small, minority, and women-owned businesses. Utilized R programming to collect and analyze data on Minority/Women-Owned vendors, evaluating their capacity to fulfill city contracts. Identified gaps in vendor availability and established goals to help the city increase engagement with underrepresented vendors.</p>
      </li>
    </ul>
  </div>
);

const Projects = () => (
  <div className="projects">
    <h2>Projects</h2>
    <ul>
      <li>
        <h3><a href="https://github.com/amazing-pod/audacious-capstone" target="_blank" rel="noopener noreferrer">Genesis</a></h3>
        <h4>Additional Collaborators: Andrey Fernandez and Brenda Nallely Aceves Limon</h4>
        <p>Genesis is an AI-assisted productivity platform designed to support product managers and engineers in building community and refining their projects. The platform includes a Community Forum, a Brainstorm Page, and a Home Page that features posts from the community forum and displays users' ideas and projects, enriched with evaluations powered by OpenAI's API. The project utilized the PERN stack and was created as a final project for my Salesforce Internship.</p>
        <a href="https://audacious-capstone-ui.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
      </li>
      <li>
        <h3><a href="https://github.com/anitadugbartey1/flixster-starter" target="_blank" rel="noopener noreferrer">Flixster</a></h3>
        <p>Flixster is a user-friendly platform that brings the world of movies to your fingertips. Utilizing a movie database API, Flixster allows you to browse movies and watch trailers with ease. The site features detailed information popups, advanced search functionality, and sorting options to enhance your browsing experience. With a responsive design and accessibility features, Flixster ensures that everyone can enjoy an immersive movie experience on any device.</p>
        <a href="https://drive.google.com/file/d/1psQ7aBnVkpzZu2XfKKxGPEMeXXiDb5kb/view" target="_blank" rel="noopener noreferrer">View Project</a>
      </li>
    </ul>
  </div>
);

export default Portfolio;
