import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/legal.css';

function useScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const Cookies = () => {
  useScrollToTop();

  return (
    <main className="legal-page" tabIndex={-1} aria-label="Cookies Policy">
      <section className="legal-section">
        <h1>Cookies Policy</h1>
        <p>Effective Date: June 18, 2025</p>
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device to help websites function and improve your experience.</p>
        <h2>2. How We Use Cookies</h2>
        <ul>
          <li>To remember your preferences and settings.</li>
          <li>To analyze site traffic and usage.</li>
          <li>To improve our website and services.</li>
        </ul>
        <h2>3. Managing Cookies</h2>
        <p>You can control or delete cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
        <h2>4. Changes to This Policy</h2>
        <p>We may update this Cookies Policy from time to time. Changes will be posted on this page.</p>
        <h2>5. Contact</h2>
        <p>If you have questions, contact us at <a href="mailto:contact@dizzyotterdesigns.com">contact@dizzyotterdesigns.com</a>.</p>
      </section>
    </main>
  );
};

export default Cookies;
