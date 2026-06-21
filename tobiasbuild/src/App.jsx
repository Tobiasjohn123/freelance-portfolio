import React, { useEffect } from 'react';
import Navbar from './component/nav';
import Hero from './component/hero';
import Problem from './component/problem';
import Solution from './component/solution';
import Projects from './component/project';
import HowItWorks from './component/howitwork';
import Booking from './component/booking';
import Footer from './component/footer';
import './App.css'; // Global styling system

function App() {
  useEffect(() => {
    // Scroll progress indicator update
    const handleScrollProgress = () => {
      const scrollIndicator = document.getElementById('scrollIndicator');
      if (scrollIndicator) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / totalHeight) * 100;
        scrollIndicator.style.width = `${scrolled}%`;
      }
    };

    // Intersection Observer to trigger reveal transitions
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    // Attach listener & run initially
    window.addEventListener('scroll', handleScrollProgress);
    handleScrollProgress();

    // Observe all components marked with reveal classes
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      {/* Background Decorative Grids & Indicators */}
      <div className="bg-grid"></div>
      <div className="scroll-indicator" id="scrollIndicator"></div>

      {/* Floating minimalist kinetic navbar */}
      <Navbar />

      <main className="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Projects />
        <HowItWorks />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}

export default App;
