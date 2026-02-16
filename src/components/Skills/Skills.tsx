import React, { useState, useEffect } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    // Frontend
    { name: 'React Native', level: 85, icon: '📱', category: 'frontend' },
    { name: 'Flutter', level: 70, icon: '🦋', category: 'frontend' },
    { name: 'JavaScript', level: 85, icon: '🟨', category: 'frontend' },
    { name: 'HTML/CSS', level: 80, icon: '🎨', category: 'frontend' },
    { name: 'Dart', level: 70, icon: '🎯', category: 'frontend' },

    // Backend
    { name: 'Python', level: 88, icon: '🐍', category: 'backend' },
    { name: 'Java', level: 80, icon: '☕', category: 'backend' },
    { name: 'C/C++', level: 75, icon: '🔵', category: 'backend' },
    { name: 'FastAPI', level: 80, icon: '⚡️', category: 'backend' },
    { name: 'Node.js', level: 70, icon: '🟢', category: 'backend' },
    { name: 'PyCaret', level: 72, icon: '🧪', category: 'backend' },

    // Others
    { name: 'SQL', level: 72, icon: '🛢️', category: 'others' },
    { name: 'Firebase', level: 78, icon: '🔥', category: 'others' },
    { name: 'Machine Learning', level: 80, icon: '🤖', category: 'others' },
    { name: 'Data Visualization', level: 76, icon: '📊', category: 'others' },
    { name: 'API Design', level: 78, icon: '🔧', category: 'others' },
    { name: 'Cloud Architecture', level: 72, icon: '☁️', category: 'others' },
    { name: 'English', level: 95, icon: '🆎', category: 'others' },
    { name: 'Mandarin', level: 95, icon: '🈶', category: 'others' },

    // Tools
    { name: 'Docker', level: 78, icon: '🐳', category: 'tools' },
    { name: 'Git', level: 85, icon: '📝', category: 'tools' },
    { name: 'AWS', level: 70, icon: '☁️', category: 'tools' },
    { name: 'Google Cloud', level: 70, icon: '🌐', category: 'tools' },
    { name: 'Figma', level: 85, icon: '🎨', category: 'tools' },
    { name: 'Adobe Creative Suite', level: 75, icon: '🖌️', category: 'tools' }
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'others', name: 'Others', icon: '👾' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills__categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'category-btn--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
          
          <div className="skills__grid">
            {filteredSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${activeCategory}`}
                className="skill-card"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                
                <div className="skill-level">
                  {skill.level >= 85 ? 'Expert' : 
                   skill.level >= 70 ? 'Proficient' : 
                   'Learning'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills__summary">
            <div className="summary-card">
              <h3>Specializations</h3>
              <div className="learning-items">
                <span className="learning-item">🤖 Machine Learning</span>
                <span className="learning-item">🧩 Backend Development</span>
                <span className="learning-item">📊 Data Visualization</span>
                <span className="learning-item">🔧 API Design</span>
                <span className="learning-item">☁️ Cloud Architecture</span>
              </div>
            </div>
            
            <div className="summary-card">
              <h3>Technical Strengths</h3>
              <div className="strength-items">
                <span className="strength-item">⚡ Performance Optimization</span>
                <span className="strength-item">🧠 Experiment Reproducibility</span>
                <span className="strength-item">🔒 Secure Code Execution</span>
                <span className="strength-item">🧪 ML Pipelines</span>
                <span className="strength-item">📈 Data-Driven Insights</span>
                <span className="strength-item">🤝 Cross-Functional Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
