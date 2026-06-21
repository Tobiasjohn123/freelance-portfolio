// src/components/hero.jsx
import React from 'react';

const Hero = () => {
  const words = "I Build Systems That Book Clients While You Sleep".split(' ');

  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="hero-content">
        <h1 className="hero-title" aria-label="I Build Systems That Book Clients While You Sleep">
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
          Custom-engineered booking infrastructure for high-ticket service providers.
          We automate the friction so you can focus on the craft.
        </p>

        <div className="hero-buttons reveal-up">
          <a href="#booking" className="btn-primary">
            <span className="material-symbols-outlined">arrow_forward</span>
            Book a Call
          </a>
          <a href="#projects" className="btn-secondary">
            View My Work
          </a>
        </div>

        <div className="hero-trust reveal-up">
          <div className="trust-item">
            <span className="material-symbols-outlined">verified</span>
            Custom-Built, Not Templated
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined">bolt</span>
            Fast Turnaround
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined">forum</span>
            Direct Access — No Agencies
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;