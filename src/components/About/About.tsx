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
                  Hi, I’m Eunice — a Computer Science student at UCSC passionate about 
                  building clean, scalable software that solves real-world problems.
                </p>
                
                <p>
                  I’ve built full-stack tools using Python, FastAPI, React, and Flutter, 
                  from internal dashboards for data teams to mobile apps promoting healthy 
                  eating habits. I love turning complex ideas into intuitive, usable products.
                </p>

                <p>
                    With hands-on experience in machine learning pipelines, API development, 
                    and agile collaboration, I’m always looking to learn and grow as a software engineer.
                </p>
                
                <p>
                  I'm actively seeking internship opportunities where I can apply my 
                  skills, learn from experienced professionals, and contribute to 
                  innovative projects that push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="about__cta">
                <a 
                  href="/eunice-shen-resume.pdf" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
                <a 
                  href="/eunice-shen-resume.pdf" 
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
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
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
