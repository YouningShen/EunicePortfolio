import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => ['Developer', 'Problem Solver', 'CS Student', 'Designer'], []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = displayText === currentWord && !isDeleting;
    const shouldStartNext = displayText === '' && isDeleting;

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (shouldStartNext) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        }
        return currentWord.substring(0, prev.length + 1);
      });
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, words]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <div className="hero__grid"></div>
        <div className="hero__glow"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__greeting">Hi, I'm</span>
              <span className="hero__name">Eunice Shen</span>
              <span className="hero__role">
                <span className="hero__role-text">{displayText}</span>
                <span className="hero__cursor">|</span>
              </span>
            </h1>
            
            <p className="hero__description">
              Hi! I’m Eunice — a CS student who loves building full-stack apps. I turn complex problems into simple, usable solutions — and I’m just getting started.
            </p>
            
            <div className="hero__actions">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Work
                <span className="btn-icon">→</span>
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__avatar">
              <div className="avatar-placeholder">
                <img 
                  src={`${process.env.PUBLIC_URL}/profile-picture.jpg`} 
                  alt="Eunice Shen" 
                  className="profile-image"
                />
              </div>
              <div className="avatar-ring"></div>
              <div className="avatar-dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
