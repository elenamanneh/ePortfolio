import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/navBar';
import Header from './components/header';
import Timeline from './components/timeline';
import Technologies from './components/technologies';
import Projects from './components/projects';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Timeline');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/ePortfolio') {
      navigate('/#/Timeline');
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = activeSection;
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const distance = Math.abs(sectionTop);

        if (distance < closestDistance && sectionTop < window.innerHeight / 2) {
          closestSection = section;
          closestDistance = distance;
        }
      });

      if (closestSection) {
        const newActiveSection = closestSection.getAttribute('id');
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    };

    const scrollContainer = document.querySelector('.Right-section');
    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, isMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {isMobile ? (
        <>
          <header className="Mobile-header">
            <div className="Menu-icon" onClick={toggleMenu}>
              ☰
            </div>
            <NavBar />
          </header>

          {menuOpen && (
            <nav className="Mobile-menu">
              <ul>
                <li onClick={toggleMenu}>
                  <a href="#Timeline">About Me</a>
                </li>
                <li onClick={toggleMenu}>
                  <a href="#Technologies">Technologies</a>
                </li>
                <li onClick={toggleMenu}>
                  <a href="#Projects">Projects</a>
                </li>
              </ul>
            </nav>
          )}

          <div className="Right-section">
            <section id="Timeline">
              <Header />
              <Timeline />
            </section>
            <section id="Technologies">
              <Technologies />
            </section>
            <section id="Projects">
              <Projects />
            </section>
          </div>
        </>
      ) : (
        <>
          <div className="Left-section">
            <Header />
            <nav className="Section-list">
              <ul>
                <li className={activeSection === 'Timeline' ? 'active' : ''}>
                  <a href="#Timeline">About Me</a>
                </li>
                <li className={activeSection === 'Technologies' ? 'active' : ''}>
                  <a href="#Technologies">Technologies</a>
                </li>
                <li className={activeSection === 'Projects' ? 'active' : ''}>
                  <a href="#Projects">Projects</a>
                </li>
              </ul>
            </nav>
            <div className="NavBar-container">
              <NavBar />
            </div>
          </div>

          <div className="Right-section">
            <section id="Timeline">
              <Timeline />
            </section>
            <section id="Technologies">
              <Technologies />
            </section>
            <section id="Projects">
              <Projects />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
