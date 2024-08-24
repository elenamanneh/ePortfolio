import { circle } from '../img/style';
import './components.css';
import './../App.css';

function Timeline() {
  return (
    <div className="Timeline-container">
      <h1>About Me</h1>
      <div className="Timeline">
      <div className="Timeline-left">
      <h2>Education</h2>
        <h3>University of Toronto Scarborough</h3>
        <ul>
          <li>HBSc Computer Science, Information Systems Specialist</li>
        </ul>
      </div>
      {}
      <div className="Timeline-right">
      <h2>Work Experience</h2>
        <h3>Quality Assurance Analyst @ theScore</h3>
        <ul>
          <li>Conducted cross-platform testing and managed defect tracking, enhancing product launch efficiency.</li>
          <li>Authored comprehensive test documentation; executed verification and validation tests across applications.</li>
          <li>Collaborated with cross-functional teams; led functional, regression, and smoke testing initiatives.</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Timeline;
