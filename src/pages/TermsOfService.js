import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/legal.css';

function useScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const TermsOfService = () => {
  useScrollToTop();

  return (
    <main className="legal-page" tabIndex={-1} aria-label="Terms of Service">
      <section className="legal-section">
        <h1>Terms of Service</h1>
        <p>Effective Date: June 18, 2025</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Dizzy Otter Designs, you agree to these Terms of Service. If you do not agree, please do not use our website.</p>
        <h2>2. Use of the Website</h2>
        <ul>
          <li>You may use the website for lawful purposes only.</li>
          <li>You may not use the website to infringe on the rights of others.</li>
        </ul>
        <h2>3. Intellectual Property</h2>
        <p>All content on this website is the property of Dizzy Otter Designs or its licensors and is protected by copyright laws.</p>
        <h2>4. Disclaimer</h2>
        <p>The website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or completeness of any information.</p>
        <h2>5. Limitation of Liability</h2>
        <p>Dizzy Otter Designs is not liable for any damages arising from your use of the website.</p>
        <h2>6. Changes to Terms</h2>
        <p>We may update these Terms of Service at any time. Changes will be posted on this page.</p>
        <h2>7. Contact</h2>
        <p>If you have questions, contact us at <a href="mailto:contact@dizzyotterdesigns.com">contact@dizzyotterdesigns.com</a>.</p>
      </section>
    </main>
  );
};

export default TermsOfService;
