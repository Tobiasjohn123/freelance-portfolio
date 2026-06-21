// src/components/howitwork.jsx
import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const parent = line?.parentElement;

    const handleScroll = () => {
      if (!line || !parent) return;
      const rect = parent.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const startOffset = viewHeight * 0.5;
      
      let progress = 0;
      if (rect.top < startOffset) {
        const totalHeight = rect.height;
        const scrolled = startOffset - rect.top;
        progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      }
      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const steps = [
    {
      number: '01',
      title: 'Strategic Audit',
      description: 'We map every gap in your current booking flow and identify exactly where you are losing potential clients.'
    },
    {
      number: '02',
      title: 'Bespoke Engineering',
      description: 'I build your custom booking system from scratch — designed to capture leads, send confirmations, and fill your calendar automatically.'
    },
    {
      number: '03',
      title: 'Launch & Optimize',
      description: 'We launch, test, and optimize until it converts — so your site is signing clients while you focus on coaching.'
    }
  ];

  return (
    <section className="process-section" id="how-it-works">
      <div className="container">
        <div className="section-header reveal-up">
          <h2 className="section-title">The Process</h2>
          <p className="section-subtitle">Simple process. Real results. No technical headaches.</p>
        </div>

        <div className="process-timeline">
          {/* Progress Line */}
          <div className="process-line-wrapper">
            <div className="process-line" ref={lineRef}></div>
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className={`process-step ${index % 2 === 0 ? 'left' : 'right'} reveal-up`}>
                <div className="process-content">
                  <div className="process-number">{step.number}</div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
                <div className="process-dot-container">
                  <div className="process-dot"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;