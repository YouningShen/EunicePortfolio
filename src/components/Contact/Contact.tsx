import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'euniceshen0609@gmail.com',
      link: 'mailto:euniceshen0609@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (925) 791-0561',
      link: 'tel:+19257910561'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Ramon, CA',
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/eunice-shen',
      link: 'https://linkedin.com/in/eunice-shen'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/YouningShen',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/eunice-shen',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:euniceshen0609@gmail.com',
      description: 'Send me a message'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Let's Connect</h2>
          
          <div className="contact__content">
            <div className="contact__intro">
              <h3>Ready to collaborate?</h3>
              <p>
                I'm always excited to discuss new opportunities, interesting projects, 
                or just chat about technology. Whether you're looking for an intern, 
                have a project idea, or want to connect professionally, I'd love to hear from you!
              </p>
            </div>
            
            <div className="contact__sections">
              <div className="contact__details">
                <h4>Get in touch</h4>
                <div className="contact-items">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.link}
                      className="contact-item"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-text">
                        <div className="contact-label">{info.label}</div>
                        <div className="contact-value">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="social-section">
                <h4>Connect with me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      style={{
                        animationDelay: `${index * 0.15}s`
                      }}
                    >
                      <div className="social-icon">{social.icon}</div>
                      <div className="social-content">
                        <h5 className="social-name">{social.name}</h5>
                        <p className="social-description">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="contact__cta">
              <p>
                <strong>Open to opportunities!</strong> Currently seeking internship and entry-level 
                positions in software development, UI/UX design, and product management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
