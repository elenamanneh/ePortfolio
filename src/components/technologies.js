import { android, c, css, figma, firebase, git, html, java, javascript, jira, mongodb, python, react, tex, asm, linux } from '../img/technologies-icons';
import './components.css';

const technologies = [
  { name: 'C', icon: c },
  { name: 'Java', icon: java },
  { name: 'Python', icon: python },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'Assembly', icon: asm },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Firebase', icon: firebase },
  { name: 'Git', icon: git },
  { name: 'Linux', icon: linux },
  { name: 'Android', icon: android },
  { name: 'TeX', icon: tex },
  { name: 'Jira', icon: jira },
  { name: 'Figma', icon: figma },
];

function Technologies() {
  return (
    <div className="Technologies">
      <h1>Technologies</h1>
      <div className="Icon-grid-container">
        <div className="Icon-grid">
          {technologies.map((tech, index) => (
            <div className="Icon-item" key={index}>
              <img src={tech.icon} className="Icon-image" alt={tech.name} />
              <div className="Icon-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
