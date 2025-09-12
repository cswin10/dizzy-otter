import { useLocation } from 'react-router-dom';
import React from 'react';
import '../styles/legal.css';

function useScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const PrivacyPolicy = () => {
  useScrollToTop();

  return (
    <main className="legal-page" tabIndex={-1} aria-label="Privacy Policy">
      <section className="legal-section">
        <h1>Privacy Policy</h1>
        <p>Effective Date: June 18, 2025</p>
        <h2>1. Introduction</h2>
        <p>Dizzy Otter ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal Information: Name, email address, and any information you provide via our contact forms.</li>
          <li>Usage Data: Pages visited, browser type, and device information collected automatically.</li>
        </ul>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To respond to your inquiries.</li>
          <li>To improve our website and user experience.</li>
        </ul>
        <h2>4. Cookies</h2>
        <p>We use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
        <h2>5. Third-Party Services</h2>
        <p>We may use third-party services (such as analytics) that collect, monitor, and analyze usage.</p>
        <h2>6. Data Security</h2>
        <p>We implement reasonable measures to protect your information but cannot guarantee absolute security.</p>
        <h2>7. Your Rights</h2>
        <p>You may request access, correction, or deletion of your personal data by contacting us at contact@dizzyotterdesigns.com.</p>
        <h2>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
        <h2>9. Contact</h2>
        <p>If you have questions, contact us at <a href="mailto:contact@dizzyotterdesigns.com">contact@dizzyotterdesigns.com</a>.</p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
