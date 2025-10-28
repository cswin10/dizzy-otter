import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return React.createElement(
    'header',
    { className: scrolled ? 'header header-scrolled' : 'header', role: 'banner' },
    React.createElement(
      'nav',
      { className: 'navbar', role: 'navigation', 'aria-label': 'Main navigation' },
      // Logo
      React.createElement(
        Link,
        {
          className: 'logo',
          tabIndex: 0,
          'aria-label': 'Dizzy Otter Home',
          to: '/',
          onClick: () => setMenuOpen(false)
        },
        React.createElement('img', {
          src: '/logo.png',
          alt: 'Dizzy Otter Logo',
          style: { height: '40px', width: 'auto', verticalAlign: 'middle' }
        })
      ),
      // Hamburger menu for mobile
      React.createElement(
        'button',
        {
          className: menuOpen ? 'hamburger open' : 'hamburger',
          'aria-label': menuOpen ? 'Close menu' : 'Open menu',
          'aria-expanded': menuOpen,
          'aria-controls': 'mobile-nav',
          onClick: () => setMenuOpen(!menuOpen),
          type: 'button',
        },
        React.createElement('span', { className: 'bar' }),
        React.createElement('span', { className: 'bar' }),
        React.createElement('span', { className: 'bar' })
      ),
      // Desktop Navigation links
      React.createElement(
        'ul',
        {
          className: 'nav-links',
          id: 'nav-links',
        },
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            {
              to: '/',
              className: 'nav-link',
              tabIndex: 0,
              onClick: () => setMenuOpen(false),
              'aria-label': 'Go to Home page',
            },
            'Home'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            {
              to: '/services',
              className: 'nav-link',
              tabIndex: 0,
              onClick: () => setMenuOpen(false),
              'aria-label': 'Go to Solutions page',
            },
            'Solutions'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            {
              to: '/ai-audit',
              className: 'nav-link',
              tabIndex: 0,
              onClick: () => setMenuOpen(false),
              'aria-label': 'Go to AI Audit page',
            },
            'AI Audit'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            {
              to: '/about',
              className: 'nav-link',
              tabIndex: 0,
              onClick: () => setMenuOpen(false),
              'aria-label': 'Go to About page',
            },
            'About'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            {
              to: '/contact',
              className: 'nav-link',
              tabIndex: 0,
              onClick: () => setMenuOpen(false),
              'aria-label': 'Go to Contact page',
            },
            'Contact'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            {
              href: 'https://dizzyotter.com/clientos/',
              className: 'nav-link',
              tabIndex: 0,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': 'Go to ClientOS (opens in new tab)',
            },
            'ClientOS'
          )
        )
      ),
      // Mobile Slide-out Menu
      React.createElement(
        'div',
        {
          className: menuOpen ? 'mobile-nav open' : 'mobile-nav',
          id: 'mobile-nav',
          role: 'menu',
          'aria-hidden': !menuOpen
        },
        React.createElement('div', { className: 'mobile-nav-header' },
          React.createElement(Link, {
            to: '/',
            className: 'logo',
            tabIndex: 0,
            'aria-label': 'Dizzy Otter Home',
            onClick: () => setMenuOpen(false)
          },
            React.createElement('img', {
              src: '/logo.png',
              alt: 'Dizzy Otter Logo',
              style: { height: '48px', width: 'auto', verticalAlign: 'middle' }
            })
          ),
          React.createElement('button', {
            className: 'mobile-nav-close',
            'aria-label': 'Close menu',
            onClick: () => setMenuOpen(false),
            type: 'button',
          }, '×')
        ),
        React.createElement('ul', { className: 'mobile-nav-links' },
          React.createElement('li', null, React.createElement(Link, { to: '/', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'Home')),
          React.createElement('li', null, React.createElement(Link, { to: '/services', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'Solutions')),
          React.createElement('li', null, React.createElement(Link, { to: '/ai-audit', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'AI Audit')),
          React.createElement('li', null, React.createElement(Link, { to: '/about', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'About')),
          React.createElement('li', null, React.createElement(Link, { to: '/contact', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'Contact')),
          React.createElement('li', null, React.createElement('a', { href: 'https://dizzyotter.com/clientos/', className: 'nav-link', tabIndex: 0, target: '_blank', rel: 'noopener noreferrer', onClick: () => setMenuOpen(false) }, 'ClientOS'))
        ),
        React.createElement('div', { className: 'mobile-nav-social' },
          React.createElement('a', {
            href: 'mailto:hello@dizzyotter.co.uk',
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'Email',
            style: { margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }
          },
            React.createElement('i', { className: 'fa-solid fa-envelope' })
          ),
          React.createElement('a', {
            href: 'https://www.linkedin.com/company/dizzyotter/',
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'LinkedIn',
            style: { margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }
          },
            React.createElement('i', { className: 'fa-brands fa-linkedin-in' })
          ),
          React.createElement('a', {
            href: 'https://www.instagram.com/dizzy_otter_?igsh=MWRtamQ0Y2VhZHN6OA==',
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'Instagram',
            style: { margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }
          },
            React.createElement('i', { className: 'fa-brands fa-instagram' })
          ),
          React.createElement('a', {
            href: 'https://www.tiktok.com/@otter_labs?_t=ZN-8zeuQf6Rg6I&_r=1',
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'TikTok',
            style: { margin: '0 0.7rem', fontSize: '2.2rem', color: '#2979FF', background: 'none', borderRadius: '12px', width: 'auto', height: 'auto', padding: '0.2rem 0.5rem', boxShadow: 'none', border: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s, transform 0.2s' }
          },
            React.createElement('i', { className: 'fa-brands fa-tiktok' })
          )
        )
      )
    )
  );
}

export default Header;