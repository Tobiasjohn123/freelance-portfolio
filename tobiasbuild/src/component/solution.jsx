// src/components/solution.jsx
import React from 'react';

const Solution = () => {
  const features = [
    {
      icon: 'bolt',
      title: 'Instant Booking System',
      text: 'Seamless integration into your current tech stack with custom styling.'
    },
    {
      icon: 'dashboard',
      title: 'Admin Dashboard',
      text: 'Full control over availability, intake forms, and automated reminders.'
    },
    {
      icon: 'analytics',
      title: 'Conversion Focused',
      text: 'Optimized flows designed specifically to reduce friction and drop-offs.'
    }
  ];

  return (
    <section className="solution-section">
      <div className="container">
        <div className="grid-lg-2">
          
          {/* Left Side: Features List */}
          <div className="solution-list reveal-up">
            {features.map((item, index) => (
              <div key={index} className="solution-item">
                <div className="solution-icon-wrapper">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 className="solution-item-title">{item.title}</h4>
                  <p className="solution-item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Dashboard Mockup */}
          <div className="solution-visual reveal-up">
            <div className="solution-glass-container">
              <div className="solution-dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-dot red"></div>
                  <div className="mockup-dot yellow"></div>
                  <div className="mockup-dot green"></div>
                  <span className="mockup-title">System Dashboard</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-stats">
                    <div className="stat-box">
                      <div className="stat-value">127</div>
                      <div className="stat-label">Bookings</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-value">94%</div>
                      <div className="stat-label">Conversion</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-value">2.4h</div>
                      <div className="stat-label">Avg. Response</div>
                    </div>
                  </div>
                  <div className="mockup-graph-container">
                    <svg className="mockup-chart-svg" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chart-fill-grad-react" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4F8EF7" />
                          <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path className="chart-line" d="M0,80 C30,80 40,40 60,40 C80,40 90,75 110,75 C130,75 145,15 160,15 C175,15 190,65 210,65 C230,65 240,25 260,25 C280,25 290,50 300,50" />
                      <path className="chart-fill" d="M0,80 C30,80 40,40 60,40 C80,40 90,75 110,75 C130,75 145,15 160,15 C175,15 190,65 210,65 C230,65 240,25 260,25 C280,25 290,50 300,50 L300,100 L0,100 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;