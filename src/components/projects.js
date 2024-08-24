import React, { useState, useEffect, useRef } from 'react';
import ProjectDetails from './projectDetails.js';
import './components.css';

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
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

        for (let i = 0; i < visibleCount; i++) {
            newVisibleProjects.push(ProjectDetails[(startIndex + i) % ProjectDetails.length]);
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
    }, [startIndex]);

    useEffect(() => {
        setTimeout(setFixedHeight, 0);
    }, [visibleProjects]);

    const handleNext = () => {
        const isMobile = window.innerWidth <= 768;
        const increment = isMobile ? 1 : 3;
        setStartIndex((prevIndex) => (prevIndex + increment) % ProjectDetails.length);
    };

    const handlePrev = () => {
        const isMobile = window.innerWidth <= 768;
        const increment = isMobile ? 1 : 3;
        setStartIndex((prevIndex) => (prevIndex - increment + ProjectDetails.length) % ProjectDetails.length);
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
                                visibleProjects.length === 3 && index === 1 ? 'Project-slide-center' : ''
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
                                <p>{project.description.join(' ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="Carousel-next" onClick={handleNext}>›</button>
            </div>
        </div>
    );
}

export default Projects;
