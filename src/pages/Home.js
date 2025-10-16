import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/home.css';
import FactSolutionBox from '../components/FactSolutionBox';

function useScrollReveal() {
  useEffect(() => {
    let observer;
    const revealEls = () => Array.from(document.querySelectorAll('.reveal:not(.revealed)'));
    const observeAll = () => {
      revealEls().forEach(el => observer.observe(el));
    };
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );
      observeAll();
      const mutationObserver = new MutationObserver(() => {
        observeAll();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
        mutationObserver.disconnect();
      };
    } else {
      revealEls().forEach(el => el.classList.add('revealed'));
    }
  }, []);
}

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const heroBg = {
  background: 'linear-gradient(rgba(26,31,54,0.18), rgba(26,31,54,0.18)), url("/hero.jpg") center/cover no-repeat'
};

const testimonials = [
  {
    text: 'Dizzy Otter made the process easy, handling all the technical details and delivering a fantastic result. I highly recommend them for small businesses.',
    author: 'Paul Streeter'
  },
  {
    text: 'Dizzy Otter took the time to understand our vision and delivered a sleek, user-friendly system that exceeded our expectations.',
    author: 'Jo Marshall'
  },
  {
    text: 'Working with Dizzy Otter was a dream. They brought creativity, efficiency, and flair to the project. Highly recommended.',
    author: 'M.J Powell'
  }
];

const Home = () => {
  useScrollToTop();
  useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [typingText, setTypingText] = useState('');
  useEffect(() => {
    const fullText = 'Welcome to Dizzy Otter';
    let i = 0;
    let direction = 1;
    let timeout;
    function typeLoop() {
      setTypingText(fullText.slice(0, i));
      if (direction === 1) {
        if (i < fullText.length) {
          i++;
          timeout = setTimeout(typeLoop, 70);
        } else {
          direction = -1;
          timeout = setTimeout(typeLoop, 1200);
        }
      } else {
        if (i > 0) {
          i--;
          timeout = setTimeout(typeLoop, 40);
        } else {
          direction = 1;
          timeout = setTimeout(typeLoop, 700);
        }
      }
    }
    typeLoop();
    return () => clearTimeout(timeout);
  }, []);

  return React.createElement(
    'main',
    { className: 'home-page', tabIndex: -1, 'aria-label': 'Home Page' },
    // Hero Section
    React.createElement(
      'section',
      { className: 'hero-section', style: heroBg },
      React.createElement('h1', { className: 'hero-title hero-typing-effect' }, typingText),
      React.createElement('p', { className: 'hero-subtitle' }, '👉 AI consultancy for growing businesses. We audit your workflows, design custom automations and assistants, and support you as you scale.'),
      React.createElement('a', {
  href: 'https://calendly.com/studio-dizzyotter/30min',
        className: 'cta-button',
        tabIndex: 0,
        target: '_blank',
        rel: 'noopener noreferrer',
        role: 'button',
        'aria-label': 'Book a Free Consultation',
      }, '👉 Book a Free Consultation'),
      React.createElement('a', {
        href: '/ai-audit',
        className: 'secondary-cta-button',
        tabIndex: 0,
        role: 'button',
        'aria-label': 'What is an AI Audit?',
      }, '👉 What is an AI Audit?')
    ),
    // Why Dizzy Otter Section
    React.createElement(
      'section',
      { className: 'why-dizzy-otter reveal' },
      React.createElement('div', { className: 'why-content' },
        React.createElement('div', { className: 'why-text' },
          React.createElement('svg', {
            className: 'animated-otter',
            viewBox: '0 0 80 80',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            'aria-hidden': 'true',
            focusable: 'false',
          },
            React.createElement('ellipse', {
              cx: '40', cy: '50', rx: '28', ry: '18',
              fill: '#2979FF', opacity: '0.13'
            }),
            React.createElement('ellipse', {
              cx: '40', cy: '38', rx: '18', ry: '24',
              fill: '#50E3C2', opacity: '0.22'
            }),
            React.createElement('ellipse', {
              cx: '40', cy: '38', rx: '13', ry: '16',
              fill: '#2979FF', opacity: '0.32'
            }),
            React.createElement('ellipse', {
              cx: '40', cy: '38', rx: '7', ry: '8',
              fill: '#2979FF', opacity: '0.7'
            }),
            React.createElement('circle', {
              cx: '40', cy: '38', r: '4.5',
              fill: '#fff', stroke: '#2979FF', strokeWidth: '2'
            })
          ),
          React.createElement('h2', { className: 'why-title reveal' }, 'Why Dizzy Otter?'),
          React.createElement('div', { className: 'why-divider reveal' }),
          React.createElement('p', { className: 'why-desc reveal' },
            'Dizzy Otter helps small and mid-sized businesses grow by turning messy processes into efficient AI-powered systems. From lead capture to client onboarding and reporting, we run AI audits to uncover the biggest opportunities, then design and implement the right solutions so you can focus on running the business — not chasing admin.'
          ),
          React.createElement('a', {
            href: '/services',
            className: 'why-cta reveal',
            'aria-label': 'See Our Systems'
          }, 'See Our Systems →')
        ),
        React.createElement('div', { className: 'why-image-wrap', style: { position: 'relative' } },
          React.createElement('img', {
            src: '/home-image1.jpg',
            alt: 'Business automation illustration',
            className: 'why-image reveal',
            loading: 'lazy',
            width: 480,
            height: 320
          })
        )
      )
    ),
    // Solutions Heading
    React.createElement('h2', {
      className: 'solutions-heading reveal',
      style: { textAlign: 'center', margin: '3rem 0 0.7rem 0', fontWeight: 900, fontSize: '2.2rem', color: '#2979FF', letterSpacing: '-0.02em' }
    }, 'Solutions'),
    React.createElement('div', {
      className: 'solutions-bar reveal',
      style: {
        width: '60px',
        height: '6px',
        background: 'linear-gradient(90deg, #2979FF 60%, #50E3C2 100%)',
        borderRadius: '3px',
        margin: '0 auto 1.5rem auto'
      }
    }),
    // Offer Cards Section
    React.createElement(
      'section',
      { className: 'what-offer-cards reveal' },
      React.createElement('div', { className: 'what-offer-row' },
        React.createElement('a', {
          href: '/services#ai-systems',
          className: 'offer-card-link',
          'aria-label': 'See Complete AI Systems',
          tabIndex: 0,
          style: { textDecoration: 'none', color: 'inherit' }
        },
          React.createElement('div', { className: 'offer-card reveal' },
            React.createElement('img', { src: '/card1.jpg', alt: '', className: 'offer-card-img', loading: 'lazy' }),
            React.createElement('h3', { className: 'offer-card-title' }, 'Complete AI Systems'),
            React.createElement('p', { className: 'offer-card-desc' }, 'End-to-end setups with forms, CRMs, AI assistants, and automations that save you days every month.')
          )
        ),
        React.createElement('a', {
          href: '/services#ai-bots',
          className: 'offer-card-link',
          'aria-label': 'See Custom AI Assistants and Bots',
          tabIndex: 0,
          style: { textDecoration: 'none', color: 'inherit' }
        },
          React.createElement('div', { className: 'offer-card reveal' },
            React.createElement('img', { src: '/card2.jpg', alt: '', className: 'offer-card-img', loading: 'lazy' }),
            React.createElement('h3', { className: 'offer-card-title' }, 'Custom AI Assistants & Bots'),
            React.createElement('p', { className: 'offer-card-desc' }, 'Chatbots and assistants that handle FAQs, lead qualification, onboarding, and more.')
          )
        ),
        React.createElement('a', {
          href: '/services#automation',
          className: 'offer-card-link',
          'aria-label': 'See Automation Workflows',
          tabIndex: 0,
          style: { textDecoration: 'none', color: 'inherit' }
        },
          React.createElement('div', { className: 'offer-card reveal' },
            React.createElement('img', { src: '/card3.jpg', alt: '', className: 'offer-card-img', loading: 'lazy' }),
            React.createElement('h3', { className: 'offer-card-title' }, 'Automation Workflows'),
            React.createElement('p', { className: 'offer-card-desc' }, 'Automations that eliminate repetitive tasks and connect your tools to free up hours every week.')
          )
        )
      ),
      React.createElement('div', { className: 'what-offer-row' },
        React.createElement('a', {
          href: '/services#web-design',
          className: 'offer-card-link',
          'aria-label': 'See Web Design and Dashboards',
          tabIndex: 0,
          style: { textDecoration: 'none', color: 'inherit' }
        },
          React.createElement('div', { className: 'offer-card reveal' },
            React.createElement('img', { src: '/card4.jpg', alt: '', className: 'offer-card-img', loading: 'lazy' }),
            React.createElement('h3', { className: 'offer-card-title' }, 'Dashboards & Reporting'),
            React.createElement('p', { className: 'offer-card-desc' }, 'Integrated Notion or Airtable dashboards that give you visibility on leads, clients, and performance.')
          )
        ),
        React.createElement('a', {
          href: '/services#other-services',
          className: 'offer-card-link',
          'aria-label': 'See Other Services and Integrations',
          tabIndex: 0,
          style: { textDecoration: 'none', color: 'inherit' }
        },
          React.createElement('div', { className: 'offer-card reveal' },
            React.createElement('img', { src: '/card5.jpg', alt: '', className: 'offer-card-img', loading: 'lazy' }),
            React.createElement('h3', { className: 'offer-card-title' }, 'Other Integrations'),
            React.createElement('p', { className: 'offer-card-desc' }, 'Payments, bookings, analytics, reviews, and custom tools to streamline your operations.')
          )
        )
      )
    ),
    // Did You Know Section
    React.createElement(
      'section',
      { className: 'did-you-know-section reveal', 'aria-label': 'Did You Know?' },
      React.createElement('h2', { className: 'did-you-know-title' }, 'Did You Know?'),
      React.createElement('div', { className: 'did-you-know-cards-staircase' },
        React.createElement(FactSolutionBox, {
          variant: 'didyouknow',
          factTitle: 'Fact',
          factIcon: '🔹',
          factText: '76% of employees say they spend 1-3 hours daily on repetitive data entry and data collection tasks.',
          factSource: 'Source: Salesforce State of Data Report 2022',
          solutionTitle: 'Automation Workflows',
          solutionIcon: '✅',
          solutionDesc: 'Our automations (Zapier, n8n) connect your forms, CRMs, and tools so no one on your team ever manually copies data again. Save up to 15 hours per employee per week.'
        }),
        React.createElement(FactSolutionBox, {
          variant: 'didyouknow',
          factTitle: 'Fact',
          factIcon: '🔹',
          factText: 'Businesses saved over 2.5 billion hours using chatbots in 2023.',
          factSource: 'Source: Juniper Research',
          solutionTitle: 'Custom AI Assistants & Bots',
          solutionIcon: '✅',
          solutionDesc: 'Dizzy Otter builds AI-powered bots that handle FAQs, lead qualification, and proposals — slashing admin time while improving client response times.'
        }),
        React.createElement(FactSolutionBox, {
          variant: 'didyouknow',
          factTitle: 'Fact',
          factIcon: '🔹',
          factText: 'Small businesses using AI report saving a median of 13 employee hours per week.',
          factSource: 'Source: Small Business & Entrepreneurship Council',
          solutionTitle: 'Complete AI Systems',
          solutionIcon: '✅',
          solutionDesc: 'Our lead-to-proposal systems combine forms, CRMs, AI assistants, and automation workflows. This helps small businesses save full workdays every week.'
        })
      )
    ),
    // Testimonial Section
    React.createElement(
      'section',
      { className: 'testimonial-section split reveal', 'aria-label': 'Client Testimonials' },
      React.createElement('div', { className: 'testimonial-split-container' },
        React.createElement('div', { className: 'testimonial-split-image fill' },
          React.createElement('img', {
            src: '/testimonial-otter.jpg',
            alt: 'Otter illustration',
            className: 'testimonial-bg-img-split fill',
            loading: 'lazy'
          })
        ),
        React.createElement('div', { className: 'testimonial-split-content' },
          React.createElement('h2', { className: 'testimonial-title-bg' }, 'Real Results, Happy Clients'),
          React.createElement('div', { className: 'testimonial-carousel-bg' },
            React.createElement('div', {
              className: 'testimonial-card-bg visible',
              key: current
            },
              React.createElement('blockquote', null, testimonials[current].text),
              React.createElement('figcaption', { className: 'testimonial-caption-bg' }, testimonials[current].author)
            )
          ),
          React.createElement('div', { className: 'testimonial-nav-row lower-lower' },
            React.createElement('button', {
              className: 'testimonial-arrow',
              onClick: () => setCurrent((current - 1 + testimonials.length) % testimonials.length),
              'aria-label': 'Previous Testimonial'
            }, '←'),
            React.createElement('button', {
              className: 'testimonial-arrow',
              onClick: () => setCurrent((current + 1) % testimonials.length),
              'aria-label': 'Next Testimonial'
            }, '→')
          ),
          React.createElement('div', { className: 'testimonial-cta-wrap lower' },
            React.createElement('a', {
              href: '/contact',
              className: 'testimonial-cta',
              'aria-label': 'Get In Touch'
            }, 'Get In Touch →')
          )
        )
      )
    ),
    // Call to Action Banner
    React.createElement(
      'section',
      {
        className: 'cta-banner-section reveal',
        style: {
          background: 'linear-gradient(rgba(41,121,255,0.10), rgba(80,227,194,0.10)), url("/cta-wave.jpg") center/cover no-repeat',
          width: '100%',
          padding: 0,
          position: 'relative',
          border: 0,
        },
        'aria-label': 'Call to Action Banner'
      },
      React.createElement('div', { className: 'cta-banner-inner' },
        React.createElement('h2', { className: 'cta-banner-title' }, 'Ready to discover your AI opportunities?'),
        React.createElement('p', { className: 'cta-banner-subtitle' }, 'Start with a free consultation. We’ll uncover where AI can save you time and increase profit, then show you the best next step.'),
        React.createElement('a', {
          href: '/contact',
          className: 'cta-banner-btn cta-button',
          'aria-label': 'Book a Free Consultation'
        }, 'Book a Free Consultation')
      )
    )
  );
}

export default Home;
