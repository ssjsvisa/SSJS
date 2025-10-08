import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <span className="scroll-top-label">Top</span>
        <span className="scroll-arrow">&#8593;</span>
      </button>
    )
  );
};

export default ScrollToTopButton;
