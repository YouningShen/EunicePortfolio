import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '😺', url: 'https://github.com/YouningShen' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/eunice-shen' },
    // { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: '📧', url: 'mailto:euniceshen0609@gmail.com' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="logo-text">Eunice Shen</span>
                <span className="logo-dot">.</span>
              </div>
              <p className="footer__tagline">
                Code. Nap. Repeat.
              </p>
            </div>
            
            <div className="footer__links">
              <div className="footer__section">
                <h4 className="footer__title">Quick Links</h4>
                <ul className="footer__list">
                  {quickLinks.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="footer__link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="footer__section">
                <h4 className="footer__title">Connect</h4>
                <div className="footer__socials">
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="footer__section">
                <h4 className="footer__title">Get In Touch</h4>
                <div className="footer__contact">
                  <p>📍 San Ramon, CA</p>
                  <p>📧 euniceshen0609@gmail.com</p>
                  <p>💼 Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>
                © {currentYear} Eunice Shen. All rights reserved. I'm not a lawyer, but I'm pretty sure this is, like, legally binding or something.
              </p>
            </div>
            
            <button 
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
