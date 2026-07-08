import React from 'react';
import { MdOpenInNew, MdArrowForward } from 'react-icons/md';

const Projects = () => {
  const projects = [
    {
      category: 'Fitness Coaching',
      title: 'Coach Alex — Fitness Platform',
      description: 'A high-converting coaching website designed to turn visitors into paying clients. Features program showcases, client testimonials, and a direct call-to-action booking flow.',
      tags: ['Conversion Focused', 'Lead Generation', 'Mobile Responsive'],
      image: 'https://fitness-landing-page-1.vercel.app/og-image.png',
      fallbackImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      link: 'https://fitness-landing-page-1.vercel.app/',
    },
    {
      category: 'Hospitality',
      title: 'Ember & Grain Restaurant',
      description: 'A full dining experience platform with live table reservations, menu browsing, and an admin dashboard to confirm, cancel and manage all bookings in real time.',
      tags: ['Booking System', 'Admin Dashboard', 'Mobile Responsive'],
      image: 'https://restaurant-full-app.vercel.app/og-image.png',
      fallbackImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      link: 'https://restaurant-full-app.vercel.app/',
    },
    {
      category: 'Legal',
      title: 'Vanguard Law Firm',
      description: 'A professional law firm website built to establish authority and convert visitors into booked consultations through a clean, structured intake and scheduling flow.',
      tags: ['Consultation Booking', 'Trust Design', 'Mobile Responsive'],
      image: null,
      fallbackImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      link: 'https://law-firm-website-gray.vercel.app/',
    },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header reveal-up">
          <h2 className="section-title gradient-text">What I've Built</h2>
          <p className="section-subtitle">Real projects. Real results</p>
        </div>

        <div className="grid-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card project-card glass-card-hover reveal-up"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.fallbackImage}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = project.fallbackImage;
                  }}
                />
                <div className="project-overlay" />
                {project.link !== '#' && (
                  <div className="project-live-badge">
                    <span className="live-dot" />
                    Live
                  </div>
                )}
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={project.link === '#' ? (e) => scrollToSection(e, 'booking') : undefined}
                >
                  {project.link !== '#' ? 'View Live Project' : 'Book a Consultation'}
                  {project.link !== '#' ? <MdOpenInNew /> : <MdArrowForward />}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="projects-disclaimer reveal-up">
          All projects are fully functional demonstrations of exactly what I deliver for clients.
        </p>
      </div>
    </section>
  );
};

export default Projects;