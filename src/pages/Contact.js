import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/contact.css';

function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const heroBg = {
  background: 'linear-gradient(rgba(26,31,54,0.18), rgba(26,31,54,0.18)), url("/contact-hero.jpg") center/cover no-repeat'
};

const Contact = () => {
  useScrollReveal();
  useScrollToTop();

  // Bulletproof scroll to next section for hero arrow
  const scrollToNextSection = e => {
    const arrow = e?.target?.closest('.scroll-down-arrow');
    const hero = arrow?.closest('section, .contact-hero-section');
    if (hero) {
      const sections = Array.from(document.querySelectorAll('section')).filter(s => s.offsetParent !== null);
      const idx = sections.indexOf(hero);
      if (idx !== -1 && idx < sections.length - 1) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return React.createElement(
    'main',
    { className: 'contact-page', tabIndex: -1, 'aria-label': 'Contact Page' },
    // Hero Section
    React.createElement(
      'section',
      { className: 'contact-hero-section', style: heroBg },
      React.createElement('h1', { className: 'contact-hero-title reveal' }, 'Let\u2019s Build Your Smart System Together'),
      React.createElement('p', { className: 'contact-hero-subtitle reveal' }, 'Get in touch to start automating your business today.'),
      React.createElement('div', {
        className: 'scroll-down-arrow',
        role: 'button',
        tabIndex: 0,
        'aria-label': 'Scroll to next section',
        style: { cursor: 'pointer' },
        onClick: e => scrollToNextSection(e),
        onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') scrollToNextSection(e); }
      },
        React.createElement('span', null, '\u25bc')
      )
    ),
    // Split Contact Section
    React.createElement(
      'section',
      { className: 'contact-split-section reveal' },
      React.createElement(
        'div',
        { className: 'contact-split-left' },
        React.createElement('div', { className: 'contact-block-label' },
          React.createElement('span', { role: 'img', 'aria-label': 'Book a Meeting', className: 'contact-block-icon' }, '📅'),
          React.createElement('span', { style: { fontWeight: 700, fontSize: '1.4rem', marginLeft: 10, color: '#1a1f36', letterSpacing: '0.5px' } }, 'Book a Meeting')
        ),
        React.createElement('div', { className: 'contact-block-desc', style: { marginBottom: '1.2rem', fontSize: '1.08rem', color: '#444', fontWeight: 500, lineHeight: 1.6 } },
          'Let’s talk about your goals, challenges, and ideas. Book a free, friendly call to explore how we can help you automate, grow, and thrive — no pressure, just possibilities.'
        ),
        React.createElement('div', { className: 'contact-block-desc', style: { marginBottom: '1.2rem' } },
          React.createElement('a', {
            href: 'https://calendly.com/contact-dizzyotterdesigns',
            style: { color: '#2979ff', textDecoration: 'underline', fontWeight: 700, fontSize: '1.18rem', letterSpacing: '0.2px' },
            target: '_blank',
            rel: 'noopener noreferrer'
          }, 'Calendly')
        ),
        React.createElement('div', { className: 'contact-block-desc', style: { marginBottom: '0.7rem', fontWeight: 500, fontSize: '1.05rem', color: '#444' } },
          'Or reach out to us using the following:'
        ),
        React.createElement('div', { className: 'contact-social-icons' },
          React.createElement('a', {
            href: 'mailto:hello@dizzyotter.co.uk',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'contact-icon-link',
            'aria-label': 'Email'
          },
            React.createElement('svg', { width: 44, height: 44, fill: 'none', viewBox: '0 0 32 32' },
              React.createElement('rect', { x: 2, y: 6, width: 28, height: 20, rx: 6, fill: '#2979ff' }),
              React.createElement('path', { d: 'M6 10l10 8 10-8', stroke: '#fff', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })
            )
          ),
          React.createElement('a', {
            href: 'https://www.instagram.com/dizzy_otter_designs/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'contact-icon-link',
            'aria-label': 'Instagram'
          },
            React.createElement('svg', { width: 44, height: 44, fill: 'none', viewBox: '0 0 32 32' },
              React.createElement('rect', { x: 4, y: 4, width: 24, height: 24, rx: 8, fill: '#2979ff' }),
              React.createElement('circle', { cx: 16, cy: 16, r: 7, fill: '#fff' }),
              React.createElement('circle', { cx: 23, cy: 9, r: 1.7, fill: '#fff' })
            )
          ),
          React.createElement('a', {
            href: 'https://www.tiktok.com/@dizzy.otter',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'contact-icon-link',
            'aria-label': 'TikTok'
          },
            React.createElement('svg', { width: 44, height: 44, fill: 'none', viewBox: '0 0 32 32' },
              React.createElement('circle', { cx: 16, cy: 16, r: 14, fill: '#2979ff' }),
              React.createElement('path', { d: 'M21 10v7.5a5 5 0 11-5-5', stroke: '#fff', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })
            )
          )
        )
      ),
      React.createElement('div', { className: 'contact-split-divider' }),
      React.createElement(
        'div',
        { className: 'contact-split-right' },
        React.createElement('div', { className: 'contact-block-label' },
          React.createElement('span', { role: 'img', 'aria-label': 'Send a Message', className: 'contact-block-icon' }, '✉️'),
          React.createElement('span', null, 'Send a Message')
        ),
        React.createElement('div', { className: 'contact-tally-embed' },
          React.createElement('iframe', {
            src: 'https://tally.so/embed/wz4x48?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
            loading: 'lazy',
            width: '100%',
            height: '549',
            frameBorder: '0',
            marginHeight: '0',
            marginWidth: '0',
            title: 'Lead generation form',
            style: { minHeight: '400px', borderRadius: '18px', background: '#fff' }
          })
        ),
        React.createElement('script', {
          dangerouslySetInnerHTML: {
            __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`
          }
        })
      )
    ),
    // FAQ Accordion
    React.createElement(
      'section',
      { className: 'contact-faq-section reveal' },
      React.createElement('h3', { className: 'contact-faq-title' }, 'FAQ'),
      React.createElement(
        'div',
        { className: 'contact-faq-accordion' },
        React.createElement(FAQItem, {
          question: 'How quickly will I get a reply?',
          answer: 'We reply to all enquiries within 1 business day. For urgent requests, booking a free consultation call is the fastest way to connect.'
        }),
        React.createElement(FAQItem, {
          question: 'Is the consultation really free?',
          answer: 'Yes, absolutely. Our initial consultation is always free. There’s no obligation — it’s a chance to explore your needs and see if we’re a good fit.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you only work with small businesses?',
          answer: 'While small businesses are our specialty, we also work with startups, freelancers, and larger organisations that need AI, automation, or modern web solutions.'
        }),
        React.createElement(FAQItem, {
          question: 'Can I hire you for just a small job?',
          answer: 'Yes. We offer hourly rates for small updates, fixes, or custom work — perfect for adding a feature, fixing a bug, or tweaking your site or system.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you provide ongoing support?',
          answer: 'We offer flexible maintenance plans as well as one-off support. Whether you need us regularly or just from time to time, we can help.'
        }),
        React.createElement(FAQItem, {
          question: 'What if I don’t know what I need?',
          answer: 'That’s normal. Part of our process is helping you figure out what systems or solutions will benefit your business most. Book a free consultation and we’ll guide you.'
        }),
        React.createElement(FAQItem, {
          question: 'How long does it take to build a website or system?',
          answer: 'Every project is different. A small site or simple automation can be ready in as little as 1–2 days. More complex websites, dashboards, or systems typically take 2–4 weeks depending on the features and integrations required. We’ll give you a clear timeline after our initial consultation.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you work with international clients?',
          answer: 'Yes. We work with clients in the UK and globally. Everything can be handled online via video calls, email, and shared dashboards.'
        }),
        React.createElement(FAQItem, {
          question: 'What tools do you use?',
          answer: 'We work with Notion, Zapier, n8n, Tally, OpenAI, Stripe, Calendly, Airtable, and modern web development frameworks to create seamless, smart solutions.'
        }),
        React.createElement(FAQItem, {
          question: 'Can you help integrate tools I’m already using?',
          answer: 'Yes. Whether you already have forms, CRMs, or payment systems in place, we can help you connect them and automate your workflows.'
        })
      )
    ),
  );
};

// FAQ Accordion Component
function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return React.createElement(
    'div',
    { className: 'faq-item' },
    React.createElement(
      'button',
      {
        className: 'faq-question',
        onClick: () => setOpen(o => !o),
        'aria-expanded': open,
        'aria-controls': question.replace(/\s+/g, '-').toLowerCase()
      },
      question,
      React.createElement('span', { className: 'faq-toggle' }, open ? '−' : '+')
    ),
    open && React.createElement(
      'div',
      { className: 'faq-answer', id: question.replace(/\s+/g, '-').toLowerCase() },
      answer
    )
  );
}

export default Contact;
