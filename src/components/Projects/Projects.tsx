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
      title: 'CodeSnap – Mobile Coding Education Platform',
      description: 'A mobile learning platform with real-time code tracking and secure sandboxed execution for Python practice at scale.',
      technologies: ['React Native', 'Firebase', 'Docker', 'Python', 'VS Code Extension'],
      image: '📱',
      featured: true,
      screenshots: [
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-1.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-2.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-3.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-4.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-5.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-6.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-7.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CodeSnap/CodeSnap-8.png`
      ],
      detailedDescription: 'CodeSnap is a mobile-first coding education platform that pairs real-time progress tracking with a secure, containerized execution pipeline for Python submissions. It supports hundreds of submissions and delivers fast, reliable feedback for learners.',
      challenges: [
        'Designing a secure, containerized execution environment for untrusted code',
        'Maintaining low-latency feedback for mobile users',
        'Scaling real-time tracking for growing user activity',
        'Reducing API response time through batching and caching'
      ],
      achievements: [
        'Supported 100+ learners with real-time code tracking',
        'Processed 500+ submissions with 99.8% uptime and zero security incidents',
        'Reduced average response latency from 3.2s to 1.1s using batching and caching'
      ]
    },
    {
      id: 2,
      title: 'SlugSmart – UCSC Financial Purchase Prediction System',
      description: 'A full-stack analytics and ML system that uncovers spending patterns and recommends inventory decisions.',
      technologies: ['React', 'TypeScript', 'Python', 'Machine Learning', 'Vercel'],
      image: '📈',
      featured: true,
      screenshots: [
        `${process.env.PUBLIC_URL}/proj_screenshots/SlugSmart/SlugSmart-1.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/SlugSmart/SlugSmart-2.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/SlugSmart/SlugSmart-3.png`
      ],
      detailedDescription: 'SlugSmart analyzes multi-year purchasing data to identify spending patterns and vendor trends, then provides ML-driven recommendations via a chatbot interface. The system helps reduce external spending by predicting which items to stock internally.',
      challenges: [
        'Building a reliable data pipeline for multi-year datasets',
        'Turning complex spending data into clear, actionable insights',
        'Designing feedback-driven ML recommendations that improve over time',
        'Creating a responsive, user-friendly web experience'
      ],
      achievements: [
        'Built an end-to-end pipeline for spending pattern and vendor trend analysis',
        'Delivered ML predictions and a chatbot for contextual stocking recommendations',
        'Enabled feedback-driven learning using historical and seasonal signals'
      ]
    },
    {
      id: 3,
      title: 'AutoML Analytics Dashboard',
      description: 'A FastAPI-based dashboard for visualizing AutoML experiments and accelerating model review workflows.',
      technologies: ['FastAPI', 'PyCaret', 'Python', 'SQL', 'Caching'],
      image: '🧠',
      featured: true,
      screenshots: [
        `${process.env.PUBLIC_URL}/proj_screenshots/CCP/CCP-1.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CCP/CCP-2.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CCP/CCP-3.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CCP/CCP-4.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CCP/CCP-5.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/CCP/CCP-6.png`
      ],
      detailedDescription: 'Built during a machine learning engineering internship, this dashboard helps teams interpret AutoML experiments quickly through rich visualizations and efficient API-backed data access.',
      challenges: [
        'Reducing experiment review time across multiple domain teams',
        'Optimizing API response time for concurrent usage',
        'Ensuring reproducible experiment workflows',
        'Scaling data access with caching and query optimization'
      ],
      achievements: [
        'Reduced experiment review time by 40% for 3 domain teams',
        'Enabled 15+ parallel AutoML experiments with reproducible pipelines',
        'Achieved 70% faster load times for 50+ concurrent users'
      ]
    },
    {
      id: 4,
      title: 'Virtue Group Accounting Firm Website',
      description: 'A responsive, production website built end-to-end from wireframes to deployment for a professional services firm.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
      image: '🌐',
      featured: false,
      screenshots: [
        `${process.env.PUBLIC_URL}/proj_screenshots/VCW/VirtueGroupWebsite-1.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/VCW/VirtueGroupWebsite-2.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/VCW/VirtueGroupWebsite-3.png`,
        `${process.env.PUBLIC_URL}/proj_screenshots/VCW/VirtueGroupWebsite-4.png`
      ],
      detailedDescription: 'A full-stack production website for Virtue Group Accounting Firm, from requirements and wireframes through UI/UX implementation and deployment. The site includes responsive landing pages, service pages, and contact workflows.',
      challenges: [
        'Aligning UI/UX design with stakeholder requirements and brand clarity',
        'Building responsive layouts for service and contact workflows',
        'Implementing an end-to-end delivery pipeline from design to deployment',
        'Iterating on design based on client feedback'
      ],
      achievements: [
        'Delivered a complete web presence with responsive pages and contact flows',
        'Improved brand clarity and increased client inquiries by 25% post-launch',
        'Led requirements, design, implementation, and deployment end-to-end'
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
              href="https://github.com/YouningShen"
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
