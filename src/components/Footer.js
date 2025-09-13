import React from 'react';
import '../styles/footer.css';

const socialLinks = [
  {
    href: 'https://www.instagram.com/dizzy_otter_designs/',
    label: 'Instagram',
    icon: 'instagram',
  },
  {
    href: 'https://www.tiktok.com/@dizzy.otter',
    label: 'TikTok',
    icon: 'tiktok',
  },
  {
    href: 'mailto:contact@dizzyotterdesigns.com',
    label: 'Email',
    icon: 'email',
  },
  {
    href: 'https://www.linkedin.com/company/dizzy-otter/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
];

const getSocialIcon = icon => {
  switch (icon) {
    case 'instagram':
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="5"
            stroke="#2979ff"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="4" stroke="#2979ff" strokeWidth="2" />
          <circle cx="17" cy="7" r="1.2" fill="#2979ff" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M17 3v2.5c0 2.5 2 4.5 4.5 4.5V13c-2.5 0-4.5-2-4.5-4.5V3h-3v14a3.5 3.5 0 1 1-3.5-3.5"
            stroke="#2979ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'email':
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="3"
            stroke="#2979ff"
            strokeWidth="2"
          />
          <path d="M3 7l9 6 9-6" stroke="#2979ff" strokeWidth="2" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="#2979ff" strokeWidth="2" />
          <path d="M7 8v8" stroke="#2979ff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="7" cy="6.5" r="1.2" fill="#2979ff" />
          <path d="M10.5 12V16M10.5 12c0-1.1.9-2 2-2s2 .9 2 2v4M10.5 16h4" stroke="#2979ff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => (
  <footer className="footer" role="contentinfo" aria-label="Footer">
    <div className="footer-main">
      <nav className="footer-nav" aria-label="Main footer navigation">
        <a href="/" aria-label="Home">
          Home
        </a>
        <a href="/services" aria-label="Solutions">
          Solutions
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
          className="footer-social-link"
          style={{ margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }}
        >
          <i className="fa-solid fa-envelope" />
        </a>
        <a
          href="https://www.linkedin.com/company/dizzyotter/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-social-link"
          style={{ margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }}
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          href="https://www.instagram.com/dizzy_otter_?igsh=MWRtamQ0Y2VhZHN6OA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="footer-social-link"
          style={{ margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }}
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@otter_labs?_t=ZN-8zeuQf6Rg6I&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="footer-social-link"
          style={{ margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }}
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
