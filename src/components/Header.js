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
              'aria-label': 'Go to AI and Automations page',
            },
            'AI and Automations'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            {
              to: '/web-services',
              className: 'nav-link',
              tabIndex: 0,
              onClick: () => setMenuOpen(false),
              'aria-label': 'Go to Web Design page',
            },
            'Web Design'
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
          React.createElement('li', null, React.createElement(Link, { to: '/services', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'AI and Automations')),
          React.createElement('li', null, React.createElement(Link, { to: '/web-services', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'Web Design')),
          React.createElement('li', null, React.createElement(Link, { to: '/about', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'About')),
          React.createElement('li', null, React.createElement(Link, { to: '/contact', className: 'nav-link', tabIndex: 0, onClick: () => setMenuOpen(false) }, 'Contact'))
        )
      )
    )
  );
}

export default Header;