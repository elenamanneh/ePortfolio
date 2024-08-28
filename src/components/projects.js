import React, { useState, useEffect, useRef } from 'react';
import ProjectDetails from './projectDetails.js';
import './components.css';

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const setFixedHeight = () => {
        if (carouselRef.current) {
            const isMobile = window.innerWidth <= 768;
            const projectSlides = carouselRef.current.querySelectorAll('.Project-slide');
            let maxHeight = 0;

            if (isMobile) {
                const visibleSlide = projectSlides[0];
                visibleSlide.style.height = 'auto';
                const height = visibleSlide.scrollHeight;
                maxHeight = height;
            } else {
                projectSlides.forEach(slide => {
                    slide.style.height = 'auto';
                    const height = slide.scrollHeight;
                    if (height > maxHeight) {
                        maxHeight = height;
                    }
                });
            }

            projectSlides.forEach(slide => {
                slide.style.height = `${maxHeight}px`;
            });
        }
    };

    const updateVisibleProjects = () => {
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? 1 : 3;
        const newVisibleProjects = [];

        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + ProjectDetails.length) % ProjectDetails.length;
            newVisibleProjects.push(ProjectDetails[index]);
        }

        setVisibleProjects(newVisibleProjects);

        setTimeout(setFixedHeight, 0);
    };

    useEffect(() => {
        updateVisibleProjects();

        const handleResize = () => {
            updateVisibleProjects();
            setFixedHeight();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentIndex]);

    useEffect(() => {
        setTimeout(setFixedHeight, 0);
    }, [visibleProjects]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectDetails.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + ProjectDetails.length) % ProjectDetails.length);
    };

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="Projects-carousel-container">
                <button className="Carousel-prev" onClick={handlePrev}>‹</button>
                <div className="Projects-carousel" ref={carouselRef}>
                    {visibleProjects.map((project, index) => (
                        <div
                            className={`Project-slide ${
                                index === 1 ? 'active' : 'blurred'
                            }`}
                            key={index}
                        >
                            <div className="Project-content">
                                <div className="Project-header">
                                    <h3>{project.name}</h3>
                                    <div className="Project-technologies">
                                        {project.languages.map((lang, i) => (
                                            <img
                                                key={i}
                                                src={lang.icon}
                                                alt={lang.name}
                                                className="Project-tech-icon"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <ul className="Project-details">
                                    {project.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                {}
                                {project.github && (
                                    <div className="Project-github">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            View on GitHub
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="Carousel-next" onClick={handleNext}>›</button>
            </div>

            <div className="Carousel-dots">
                {ProjectDetails.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Projects;
