import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer" role="contentinfo" aria-label="Footer">
    <div className="footer-main">
      <nav className="footer-nav" aria-label="Main footer navigation">
        <a href="/" aria-label="Home">
          Home
        </a>
        <a href="/clientos" aria-label="ClientOS">
          ClientOS
        </a>
        <a href="/callflow-ai" aria-label="CallFlow AI">
          CallFlow AI
        </a>
        <a href="/ai-audit" aria-label="AI Audit">
          AI Audit
        </a>
        <a href="/about" aria-label="About">
          About
        </a>
        <a href="/contact" aria-label="Contact">
          Contact
        </a>
      </nav>
      <nav className="footer-legal-nav" aria-label="Legal footer navigation">
        <a href="/privacy-policy" aria-label="Privacy Policy">
          Privacy Policy
        </a>
        <a href="/terms-of-service" aria-label="Terms of Service">
          Terms of Service
        </a>
        <a href="/cookies" aria-label="Cookies Policy">
          Cookies
        </a>
      </nav>
      <div className="footer-social">
        <a
          href="mailto:hello@dizzyotter.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="social-icon-link"
        >
          <i className="fa-solid fa-envelope" />
        </a>
        <a
          href="https://www.linkedin.com/company/dizzyotter/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon-link"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          href="https://www.instagram.com/dizzy_otter_?igsh=MWRtamQ0Y2VhZHN6OA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon-link"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@otter_labs?_t=ZN-8zeuQf6Rg6I&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="social-icon-link"
        >
          <i className="fa-brands fa-tiktok" />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
  <span>© 2025 Dizzy Otter. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
