import React, { useState, useEffect } from 'react';
import './PopupAIReadiness.css';

const PopupAIReadiness = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="ai-popup-overlay">
      <div className="ai-popup-box">
        <button className="ai-popup-close" onClick={() => setOpen(false)} aria-label="Close popup">×</button>
        <h2>How Ready Is Your Business for AI?</h2>
        <ul className="ai-popup-list">
          <li>Is your website or system up-to-date and secure?</li>
          <li>Do you have clear business processes that could be automated?</li>
          <li>Are you collecting and using data to improve your services?</li>
          <li>Would AI chatbots, automation, or analytics help your team?</li>
          <li>Are you ready to scale with new technology?</li>
        </ul>
        <a href="/contact" className="ai-popup-cta">Get a Free AI Readiness Check</a>
      </div>
    </div>
  );
};

export default PopupAIReadiness;
