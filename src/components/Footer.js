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
        <a href="/services" aria-label="AI & Automation Services">
          AI & Automation
        </a>
        <a href="/web-services" aria-label="Web Services">
          Web Services
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
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            className="footer-social-link"
          >
            {getSocialIcon(link.icon)}
          </a>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 Dizzy Otter. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
