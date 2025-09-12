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
          '👉 Welcome to Dizzy Otter'
      ),
      React.createElement(
        'p',
        { className: 'hero-subtitle' },
          '👉 AI consultancy for growing businesses. We audit your workflows, design custom automations and assistants, and support you as you scale.'
      ),
      React.createElement(
        'a',
        {
          href: 'https://calendly.com/studio-dizzyotter/30min',
          className: 'cta-button',
          tabIndex: 0,
          role: 'button',
          'aria-label': 'Book a Free Consultation',
        },
        '👉 Book a Free Consultation'
      )
        ,
        React.createElement(
          'a',
          {
            href: '#ai-audit',
            className: 'secondary-cta-button',
            tabIndex: 0,
            onClick: e => {
              e.preventDefault();
              const el = document.getElementById('ai-audit');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            },
            role: 'button',
            'aria-label': 'What is an AI Audit?',
          },
          '👉 What is an AI Audit?'
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