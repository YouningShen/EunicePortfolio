import React, { useState } from 'react';
import './Designs.css';

interface Design {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image: string;
  featured: boolean;
  year: string;
}

const Designs: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const designs: Design[] = [
    {
      id: 1,
      title: 'Mobile App UI Design',
      description: 'Clean and modern mobile application interface design for a health tracking app with intuitive navigation and engaging user experience.',
      category: 'mobile',
      tools: ['Figma', 'Adobe XD'],
      image: '📱',
      featured: true,
      year: '2024'
    },
    {
      id: 2,
      title: 'E-commerce Website Redesign',
      description: 'Complete redesign of an e-commerce platform focusing on user journey optimization and conversion rate improvement.',
      category: 'web',
      tools: ['Figma', 'Sketch', 'Photoshop'],
      image: '🛒',
      featured: true,
      year: '2024'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.',
      category: 'branding',
      tools: ['Illustrator', 'InDesign'],
      image: '🎨',
      featured: false,
      year: '2023'
    },
    {
      id: 4,
      title: 'Dashboard Interface',
      description: 'Data visualization dashboard design for analytics platform with focus on clarity and data-driven decision making.',
      category: 'web',
      tools: ['Figma', 'Principle'],
      image: '📊',
      featured: true,
      year: '2024'
    },
    {
      id: 5,
      title: 'Mobile Game UI',
      description: 'Playful and engaging user interface design for a casual mobile game with vibrant colors and smooth animations.',
      category: 'mobile',
      tools: ['Figma', 'After Effects'],
      image: '🎮',
      featured: false,
      year: '2023'
    },
    {
      id: 6,
      title: 'Print Design Collection',
      description: 'Collection of print materials including posters, brochures, and business cards with consistent visual identity.',
      category: 'print',
      tools: ['InDesign', 'Illustrator', 'Photoshop'],
      image: '📄',
      featured: false,
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'mobile', name: 'Mobile UI' },
    { id: 'web', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'print', name: 'Print Design' }
  ];

  const filteredDesigns = designs.filter(design => {
    if (filter === 'all') return true;
    return design.category === filter;
  });

  return (
    <section id="designs" className="section designs">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Design Portfolio</h2>
          <p className="section-subtitle">
            Visual designs and creative work
          </p>
          
          <div className="designs__filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="designs__grid">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className={`design-card ${design.featured ? 'design-card--featured' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="design-card__image">
                  <div className="design-icon">{design.image}</div>
                  <div className="design-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                  {design.featured && (
                    <div className="featured-badge">
                      <span>⭐ Featured</span>
                    </div>
                  )}
                  <div className="design-year">{design.year}</div>
                </div>
                
                <div className="design-card__content">
                  <h3 className="design-title">{design.title}</h3>
                  <p className="design-description">{design.description}</p>
                  
                  <div className="design-tools">
                    {design.tools.map(tool => (
                      <span key={tool} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                  
                  <div className="design-category">
                    <span className="category-badge">{design.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="designs__cta">
            <p>Want to see more of my design work?</p>
            <div className="cta-buttons">
              <a
                href="https://dribbble.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on Dribbble
                <span className="btn-icon">🏀</span>
              </a>
              <a
                href="https://behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View on Behance
                <span className="btn-icon">🎨</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designs;
