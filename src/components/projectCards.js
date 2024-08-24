import React, { useState } from 'react';
import './components.css';

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="project-card">
      <div className={`project-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="project-card-front">
          <h4>{project.name}</h4>
          <div className="project-card-front-langs">
            {project.languages.map(lang => (
              <img key={lang.name} src={lang.icon} alt={lang.name} />
            ))}
          </div>
        </div>
        <div className="project-card-back">
          <ul>
            {project.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
