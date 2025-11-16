import React, { useEffect } from 'react';
import '../styles/contact.css';
import { useScrollReveal, useScrollToTop } from '../hooks';

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
          'Let’s talk about your workflows, challenges, and growth goals. In 30 minutes we’ll uncover where AI can save you time and increase profit. No pressure, just a clear next step.'
        ),
        React.createElement('div', { className: 'contact-block-desc', style: { marginBottom: '1.2rem' } },
          React.createElement('a', {
            href: 'https://calendly.com/studio-dizzyotter/30min',
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
            'aria-label': 'Email',
            style: { margin: '0 10px', fontSize: '2rem', color: '#2979FF' }
          },
            React.createElement('i', { className: 'fa-solid fa-envelope' })
          ),
          React.createElement('a', {
            href: 'https://www.instagram.com/dizzy_otter_?igsh=MWRtamQ0Y2VhZHN6OA==',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'contact-icon-link',
            'aria-label': 'Instagram',
            style: { margin: '0 10px', fontSize: '2rem', color: '#2979FF' }
          },
            React.createElement('i', { className: 'fa-brands fa-instagram' })
          ),
          React.createElement('a', {
            href: 'https://www.tiktok.com/@otter_labs?_t=ZN-8zeuQf6Rg6I&_r=1',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'contact-icon-link',
            'aria-label': 'TikTok',
            style: { margin: '0 10px', fontSize: '2rem', color: '#2979FF' }
          },
            React.createElement('i', { className: 'fa-brands fa-tiktok' })
          ),
          React.createElement('a', {
            href: 'https://www.linkedin.com/company/106546552/admin/dashboard/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'contact-icon-link',
            'aria-label': 'LinkedIn',
            style: { margin: '0 10px', fontSize: '2.2rem', color: '#2979FF' }
          },
            React.createElement('i', { className: 'fa-brands fa-linkedin-in' })
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
          question: 'Can you help integrate tools I\'m already using?',
          answer: 'Yes. Whether you already have forms, CRMs, or payment systems in place, we can connect them and automate your workflows so they work together seamlessly.'
        }),
        React.createElement(FAQItem, {
          question: 'What is an AI Audit?',
          answer: 'An AI Audit is a free 30-minute review of your workflows, tools, and processes. We identify the top opportunities where automation and AI can save you time, reduce costs, and increase profit. You\'ll leave with clear recommendations and a simple action plan.'
        }),
        React.createElement(FAQItem, {
          question: 'How much does an AI Audit cost?',
          answer: 'Nothing — the AI Audit is completely free. After the call, if you\'d like us to implement the systems we recommend, we\'ll provide a clear quote before any work begins.'
        }),
        React.createElement(FAQItem, {
          question: 'What happens after the audit?',
          answer: 'You\'ll receive a short summary of the audit and our recommendations. If you choose to move forward, we design and implement the automations or AI tools discussed during the call.'
        }),
        React.createElement(FAQItem, {
          question: 'How much do implementation projects cost?',
          answer: 'Every project is different, but most fall between £300–£600 for small automations and £900–£1,500 for full business systems. Ongoing optimisation retainers start from around £300 per month.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you only work with certain industries?',
          answer: 'No. We work with solo founders, local service businesses, and growing teams. The principles of saving time, automating repetitive work, and improving data visibility apply to every sector.'
        }),
        React.createElement(FAQItem, {
          question: 'How long does it take to see results?',
          answer: 'Most clients start seeing results within the first 14 days thanks to the quick-win plan we provide. Larger implementation projects typically take 2–6 weeks depending on complexity.'
        }),
        React.createElement(FAQItem, {
          question: 'What tools and platforms do you use?',
          answer: 'We work with Notion, Airtable, n8n, Zapier, Tally, Fillout, ChatGPT, and other leading automation tools. Every build is tailored to your business and the systems you already use.'
        }),
        React.createElement(FAQItem, {
          question: 'Will my team need training?',
          answer: 'We make it simple. Every project includes handover materials, SOPs, and a short training session so your team can confidently use the new systems.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you offer ongoing support?',
          answer: 'Yes. After implementation, many clients choose a monthly retainer for ongoing optimisation, new automations, and reporting. Retainers typically start from £300 per month.'
        }),
        React.createElement(FAQItem, {
          question: 'I\'m not sure I\'m ready to automate yet — is the audit still worth it?',
          answer: 'Absolutely. The audit is free and gives you a clear picture of what\'s possible. Even if you don\'t move forward immediately, you\'ll leave with practical insights you can apply right away.'
        }),
        React.createElement(FAQItem, {
          question: 'What makes Dizzy Otter different from other agencies?',
          answer: 'Most agencies jump straight to building. We diagnose first. Our free audit identifies the right problems to solve, and our team then designs custom automations that actually save time and money.'
        }),
        React.createElement(FAQItem, {
          question: 'Can you integrate with my existing tools?',
          answer: 'Almost always! Our free audit identifies which tools you\'re already using and how they can work better together. We specialize in connecting existing platforms without forcing you to start from scratch.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you work internationally?',
          answer: 'Yes, we conduct free audits and work with clients globally. Thanks to modern communication tools and cloud-based platforms, we can efficiently serve businesses regardless of location.'
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
