import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer" role="contentinfo" aria-label="Footer">
    <div className="footer-main">
      <nav className="footer-nav" aria-label="Main footer navigation">
        <a href="/" aria-label="Home">
          Home
        </a>
        <a href="/services" aria-label="Services">
          Services
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
      <div className="footer-contact">
        <p>
          <a href="mailto:studio@dizzyotter.com">studio@dizzyotter.com</a>
        </p>
        <p>
          <a href="tel:+441392542251">01392 542251</a>
        </p>
        <p>Monday - Friday: 8am - 6pm</p>
      </div>
      <div className="footer-social">
        <a
          href="mailto:studio@dizzyotter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="social-icon-link"
        >
          <i className="fa-solid fa-envelope" />
        </a>
        <a
          href="https://www.instagram.com/dizzy_otter_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon-link"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://uk.pinterest.com/otterautomation/?actingBusinessId=898468331819145978"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="social-icon-link"
        >
          <i className="fa-brands fa-pinterest" />
        </a>
        <a
          href="https://www.linkedin.com/company/106546552"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon-link"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://www.tiktok.com/@dizzy.otter"
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
