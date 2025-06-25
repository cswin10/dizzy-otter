import React, { useState } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookieConsent'));

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <span>
          This website uses cookies to ensure you get the best experience. By continuing, you agree to our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </span>
        <button className="cookie-banner-btn" onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;
