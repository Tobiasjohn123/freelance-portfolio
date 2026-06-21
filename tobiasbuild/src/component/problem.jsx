// tobiasbuild\src\component\problem.jsx
import React from 'react';
import { MdEventBusy, MdEngineering, MdCloudOff } from 'react-icons/md';

const Problem = () => {
  const problems = [
    {
      icon: MdEventBusy,
      title: 'Missing Bookings',
      text: 'Potential clients bounce because your scheduling process is too slow or complex.'
    },
    {
      icon: MdEngineering,
      title: 'Manual Scheduling',
      text: 'Spending 5+ hours a week managing calendars manually is a drain on your creative output.'
    },
    {
      icon: MdCloudOff,
      title: 'No System',
      text: 'Disconnected tools create data silos and lead to overbooking or missed appointments.'
    }
  ];

  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-header reveal-up">
          <h2 className="section-title">Your Website Should Be Working For You 24/7</h2>
          <p className="section-subtitle">
            Stop losing high-value leads while you're busy doing the actual work
          </p>
        </div>

        <div className="grid-3">
          {problems.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon-wrapper">
                <item.icon className="card-icon" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;