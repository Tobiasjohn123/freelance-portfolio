// src/components/hero.jsx
import React from 'react';
import { MdArrowForward, MdVerified, MdBolt, MdForum } from 'react-icons/md';

const Hero = () => {
  const words = "I Build Websites That Turn Visitors Into Clients".split(' ');

  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="hero-content">
        <h1 className="hero-title" aria-label="I Build Websites That Turn Visitors Into Clients">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className={`word-fade ${word === 'Book' || word === 'Clients' ? 'highlight' : ''}`}
                style={{ animation: `wordUp 0.5s forwards ${index * 0.05}s` }}
                aria-hidden="true"
              >
                {word}
              </span>
              {index < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))}
        </h1>

        <p className="hero-subtitle reveal-up">
         Custom-engineered web platforms with booking, automation, and conversion built in for service businesses that need more than a template.
        </p>

        <div className="hero-buttons reveal-up">
          <a href="#booking" className="btn-primary">
            <MdArrowForward size={18} />
            Book a Call
          </a>
          <a href="#projects" className="btn-secondary">
            View My Work
          </a>
        </div>

        <div className="hero-trust reveal-up">
          <div className="trust-item">
            <MdVerified />
            Custom-Built, Not Templated
          </div>
          <div className="trust-item">
            <MdBolt />
            Fast Turnaround
          </div>
          <div className="trust-item">
            <MdForum />
            Direct Access — No Agencies
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;