import React from 'react';
import './About.css';

const About: React.FC = () => {
  const highlights = [
    {
      icon: '🎓',
      title: 'Education',
      description: 'University of California, Santa Cruz - B.S. in Computer Science'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Full Stack Engineer Intern in Chang Chun Group, Taiwan'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'Committed to continuous learning and personal development'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          
          <div className="about__content">
            <div className="about__text">
              <div className="about__intro">
                <p>
                  Hi, I’m Eunice — a Computer Science student at UC Santa Cruz (B.S., expected 2026) who enjoys 
                  building reliable software that turns complex data into clear, useful products.
                </p>
                
                <p>
                  Most recently, I worked as a Machine Learning Engineer Intern at Chang Chun Group, where I 
                  built a FastAPI analytics dashboard, automated PyCaret training pipelines, and optimized 
                  backend performance for concurrent users.
                </p>

                <p>
                  I also led a full-stack website build for Virtue Group Accounting Firm, delivering responsive 
                  pages and contact workflows from wireframes to deployment.
                </p>
                
                <p>
                  I’m excited to keep growing in machine learning, backend development, and data visualization 
                  while collaborating on impactful, user-centered software.
                </p>
              </div>
              
              <div className="about__cta">
                <a 
                  href={`${process.env.PUBLIC_URL}/Eunice-Shen-Resume.pdf`}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
                <a 
                  href={`${process.env.PUBLIC_URL}/Eunice-Shen-Resume.pdf`}
                  className="btn btn-secondary"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="about__highlights">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title} 
                  className="highlight-card"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about__stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat">
              <div className="stat-number">8</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat">
              <div className="stat-number">10</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
