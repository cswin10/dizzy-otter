import React from 'react';

function HeroSection() {
  return React.createElement(
    'section',
    { className: 'hero-section', id: 'home', tabIndex: -1, 'aria-label': 'Hero section' },
    React.createElement(
      'div',
      { className: 'hero-content' },
      React.createElement(
        'h1',
        { className: 'hero-title' },
        'AI Solutions for Modern Business'
      ),
      React.createElement(
        'p',
        { className: 'hero-subtitle' },
        'Empowering your business with seamless AI integrations and smart automation.'
      ),
      React.createElement(
        'a',
        {
          href: '#contact',
          className: 'cta-button',
          tabIndex: 0,
          onClick: e => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
          role: 'button',
          'aria-label': 'Get Started with Dizzy Otter',
        },
        'Get Started'
      )
    ),
    React.createElement(
      'div',
      { className: 'hero-animation', 'aria-hidden': 'true' },
      React.createElement('img', {
        src: '/logo512.png',
        alt: '',
        style: { maxWidth: '120px', opacity: 0.7 }
      })
    )
  );
}

export default HeroSection;