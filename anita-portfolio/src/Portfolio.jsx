import React from 'react';
import './Portfolio.css'; // Include this file for styling

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>

        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Bachelor of Arts in Computer Science</h3>
              <p><strong>Harvard College</strong> - Expected Graduation: May 2026</p>
              <p>Details about your studies, notable courses, and any special achievements or projects.</p>
            </li>
            {/* Add more education details as needed */}
          </ul>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming Languages:</strong> JavaScript, R, Python, LaTeX, Go (Beginner Fluency)</li>
            <li><strong>Web Technologies:</strong> PostgreSQL, Express.js, React, Node.js, HTML, CSS</li>
            <li><strong>Tools:</strong> Postman, Git, Prisma, Render, Vercel, AWS Cloud (Certification in Progress)</li>
            <li><strong>Soft Skills:</strong> Problem Solving, Communication, Teamwork</li>
            {/* Add more skills as needed */}
          </ul>
        </div>

        <div className="awards">
          <h2>Awards and Honors</h2>
          <ul>
            <li>
              <h3>Outstanding Achievement Award</h3>
              <p><strong>Harvard College</strong> - Year</p>
              <p>A brief description of the award and why you received it.</p>
            </li>
            <li>
              <h3>Scholarship Award</h3>
              <p><strong>United Negro College Fund</strong> - Year</p>
              <p>A brief description of the scholarship and its significance.</p>
            </li>
            {/* Add more awards as needed */}
          </ul>
        </div>

        <div className="experiences">
          <h2>Work Experiences</h2>
          <ul>
            <li>
              <h3>Software Engineering Intern (Futureforce Tech LaunchPad Program)</h3>
              <p><strong>Salesforce (San Francisco, California)</strong> - May 2024 - August 2024</p>
              <p>Completed four intensive week-long app projects, integrating AI tools for enhanced functionality. Collaborated in a team to create an original group app project, showcasing effective project management and
teamwork. Mastered key web development technologies, including HTML, CSS, JavaScript, APIs, Node/Express, React,
PostgreSQL, and Render, while committing over 400 hours to the program</p>
            </li>
            <li>
              <h3>Data Science and Strategy Intern</h3>
              <p><strong>NYC Department Of Small Business Services (New York, NY)</strong> - June 2023 - August 2023</p>
              <p>Brief description of your responsibilities and achievements at this position.</p>
            </li>
            {/* Add more experiences as needed */}
          </ul>
        </div>

        <div className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
            <h3>
  <a href="https://github.com/amazing-pod/audacious-capstone" target="_blank" rel="noopener noreferrer">
    Genesis
  </a>
</h3>

              <h4>Additional Collaborators: Andrey Fernandez and Brenda Nallely Aceves Limon</h4>
              <p>Our project, Genesis, is an AI-assisted productivity platform designed to support product managers and engineers in building community and refining their projects. The platform includes:

Community Forum: A space for users to share and discuss their projects and ideas, fostering collaboration and feedback.

Brainstorm Page: Equipped with tools for managing ideas and projects, enabling users to brainstorm, organize, and develop their concepts effectively.

Home Page: Features posts from the community forum and displays users' ideas and projects, enriched with evaluations powered by OpenAI's API. The project utilized the PERN stack and was created as a final project for my Salesforce Internship.</p>
              <a href="https://audacious-capstone-ui.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
            </li>
            <li>
              <h3>Project Title 2</h3>
              <p></p>
              <a href="https://link-to-project2.com" target="_blank" rel="noopener noreferrer">View Project</a>
            </li>
            {/* Add more projects as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
