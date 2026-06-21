// src/components/footer.jsx
import React from 'react';

const Footer = () => {
  // Replace these with your actual profile URLs
  const linkedinUrl = 'https://www.linkedin.com/in/yourusername';
  const githubUrl = 'https://github.com/yourusername';

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo & Tagline */}
        <div className="footer-left">
          <h3 className="footer-logo">Tobias Build</h3>
          <p className="footer-tagline">
            Custom booking infrastructure for high-ticket service providers.
          </p>
          <p className="footer-copyright">© 2026 Tobias Build. Built to convert.</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="footer-center">
          <a href="#home" className="footer-link">Home</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#how-it-works" className="footer-link">How It Works</a>
          <a href="#booking" className="footer-link">Book a Call</a>
        </div>

        {/* Right: Social Icons */}
        {/* <div className="footer-right">
          <a
            href={linkedinUrl}
            className="footer-social"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
          </a>
          <a
            href={githubUrl}
            className="footer-social"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
            </svg>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;