import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  screenshots?: string[];
  detailedDescription?: string;
  challenges?: string[];
  achievements?: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreenshotIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentScreenshotIndex(0);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const nextScreenshot = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentScreenshotIndex((prev) => 
        prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevScreenshot = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentScreenshotIndex((prev) => 
        prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
      );
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Virtue Group Website',
      description: 'A professional business website showcasing services and company information with modern design and responsive layout.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      image: '🌐',
      // liveUrl: 'https://example.com',
      // githubUrl: 'https://github.com/yourusername/virtue-group',
      featured: true,
      screenshots: [
        `${process.env.PUBLIC_URL}/proj_screenshots/VirtueGroupWebsite-1.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/VirtueGroupWebsite-2.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/VirtueGroupWebsite-3.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/VirtueGroupWebsite-4.png`
      ],
      detailedDescription: 'A comprehensive business website for Virtue Group, designed with a modern and professional aesthetic. The website features a clean layout, responsive design, and intuitive navigation to showcase the company\'s services and values effectively.',
      challenges: [
        'Creating a professional design that reflects company branding',
        'Implementing responsive design for all device sizes',
        'Optimizing performance and loading times',
        'Ensuring cross-browser compatibility'
      ],
      achievements: [
        'Achieved 95+ Google Lighthouse performance score',
        'Implemented fully responsive design across all breakpoints',
        'Created intuitive user experience with clear navigation',
        'Built modular component architecture for easy maintenance'
      ]
    },
    // https://youningshen.github.io/cse160_asgn5/three_js/asgn5.html
    // https://youningshen.github.io/cse160_asg1/ColoredPoints.html
    // https://youningshen.github.io/cse160_asg2/BlockyAnimal/BlockyAnimal.html

    {
      id: 2,
      title: 'AutoML Data Analytics',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      image: '📊',
      // liveUrl: 'https://example.com',
      // githubUrl: 'https://github.com/yourusername/taskapp',
      featured: true,
      screenshots: [
        `${process.env.PUBLIC_URL}/api/placeholder/800/600`,
        `${process.env.PUBLIC_URL}/api/placeholder/800/600`
      ],
      detailedDescription: 'A modern task management application built with React and TypeScript, featuring real-time collaboration powered by Firebase. Users can create projects, assign tasks, set deadlines, and track progress with an intuitive drag-and-drop interface.',
      challenges: [
        'Implementing real-time synchronization across multiple users',
        'Building intuitive drag-and-drop functionality',
        'Managing complex state with TypeScript for type safety',
        'Designing collaborative features with conflict resolution'
      ],
      achievements: [
        'Achieved sub-100ms real-time sync with Firebase',
        'Built custom drag-and-drop system with smooth animations',
        'Implemented offline-first architecture with sync capabilities',
        'Created comprehensive notification system for team updates'
      ]
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A responsive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations.',
      technologies: ['JavaScript', 'Chart.js', 'REST API', 'CSS3'],
      image: '🌤️',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/weather',
      featured: false,
      screenshots: [
        `${process.env.PUBLIC_URL}/api/placeholder/800/600`
      ],
      detailedDescription: 'An interactive weather dashboard that provides comprehensive weather information with beautiful visualizations. Built with vanilla JavaScript and Chart.js for optimal performance.',
      challenges: [
        'Integrating multiple weather APIs for comprehensive data',
        'Creating responsive charts that work on all devices',
        'Handling API rate limits and error states gracefully',
        'Designing intuitive data visualization layouts'
      ],
      achievements: [
        'Integrated 3 different weather APIs for maximum reliability',
        'Created custom responsive chart components',
        'Achieved 98% API uptime with fallback systems',
        'Built progressive web app with offline capabilities'
      ]
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A data analytics tool for social media metrics with interactive charts and real-time data processing capabilities.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
      image: '📊',
      githubUrl: 'https://github.com/yourusername/analytics',
      featured: false,
      screenshots: [
        `${process.env.PUBLIC_URL}/api/placeholder/800/600`,
        `${process.env.PUBLIC_URL}/api/placeholder/800/600`
      ],
      detailedDescription: 'A comprehensive social media analytics platform that processes large datasets to provide insights into social media performance. Built with Python Django backend and D3.js for interactive visualizations.',
      challenges: [
        'Processing large datasets efficiently with PostgreSQL',
        'Creating real-time data visualizations with D3.js',
        'Implementing secure API authentication for social platforms',
        'Designing scalable data processing pipelines'
      ],
      achievements: [
        'Built system capable of processing 1M+ data points daily',
        'Created 15+ interactive chart types with D3.js',
        'Achieved 99.5% data accuracy across all social platforms',
        'Implemented automated reporting system with email notifications'
      ]
    }
  ];

  const categories = ['all', 'featured', 'web', 'mobile'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'web') return project.technologies.some(tech => 
      ['React', 'JavaScript', 'Node.js'].includes(tech)
    );
    if (filter === 'mobile') return project.technologies.some(tech => 
      ['React Native', 'Flutter', 'Swift'].includes(tech)
    );
    return true;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects__filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => openModal(project)}
              >
                <div className="project-card__image">
                  <div className="project-icon">{project.image}</div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>⭐ Featured</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                
                <div className="project-card__content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--primary"
                      >
                        <span>Live Demo</span>
                        <span className="link-icon">🔗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--secondary"
                      >
                        <span>Code</span>
                        <span className="link-icon">📂</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project Modal */}
          {isModalOpen && selectedProject && (
            <div className="project-modal" onClick={closeModal}>
              <div className="project-modal__content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>
                  ✕
                </button>
                
                <div className="modal-header">
                  <div className="modal-title-section">
                    <h3 className="modal-title">{selectedProject.title}</h3>
                    <div className="modal-technologies">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="tech-tag tech-tag--modal">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {selectedProject.featured && (
                    <div className="featured-badge featured-badge--modal">
                      <span>⭐ Featured</span>
                    </div>
                  )}
                </div>

                <div className="modal-body">
                  <div className="modal-screenshot">
                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                      <>
                        <img 
                          src={selectedProject.screenshots[currentScreenshotIndex]} 
                          alt={`${selectedProject.title} screenshot ${currentScreenshotIndex + 1}`}
                          className="project-screenshot"
                        />
                        {selectedProject.screenshots.length > 1 && (
                          <>
                            <button 
                              className="screenshot-nav screenshot-nav--prev" 
                              onClick={prevScreenshot}
                            >
                              ‹
                            </button>
                            <button 
                              className="screenshot-nav screenshot-nav--next" 
                              onClick={nextScreenshot}
                            >
                              ›
                            </button>
                            <div className="screenshot-indicators">
                              {selectedProject.screenshots.map((_, index) => (
                                <button
                                  key={index}
                                  className={`screenshot-indicator ${index === currentScreenshotIndex ? 'active' : ''}`}
                                  onClick={() => setCurrentScreenshotIndex(index)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>

                  <div className="modal-details">
                    <div className="detail-section">
                      <h4>Project Overview</h4>
                      <p>{selectedProject.detailedDescription}</p>
                    </div>

                    {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                      <div className="detail-section">
                        <h4>Challenges & Solutions</h4>
                        <ul className="detail-list">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                      <div className="detail-section">
                        <h4>Key Achievements</h4>
                        <ul className="detail-list achievement-list">
                          {selectedProject.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="modal-links">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link--primary"
                        >
                          <span>Live Demo</span>
                          <span className="link-icon">🔗</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link--secondary"
                        >
                          <span>View Code</span>
                          <span className="link-icon">📂</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="projects__cta">
            <p>Want to see more of my work?</p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View All Projects on GitHub
              <span className="btn-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
