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
  // ...removed outdated FAQs...
    // ...removed outdated FAQs...
        React.createElement(FAQItem, {
          question: 'Can you help integrate tools I’m already using?',
          answer: 'Yes. Whether you already have forms, CRMs, or payment systems in place, we can help you connect them and automate your workflows.'
        }),
        React.createElement(FAQItem, {
          question: 'What is an AI Audit?',
          answer: 'An AI Audit is a structured review of your workflows, tools, and processes. We identify the top three opportunities where AI and automation can save you time, reduce costs, and increase profit. You’ll get a written report, a 14-day quick win plan, and an ROI estimate.'
        }),
        React.createElement(FAQItem, {
          question: 'How much does an AI Audit cost?',
          answer: 'AI Audits start from £500. For larger teams or more complex businesses, we’ll quote a custom price. The best part — 100% of your audit fee can be applied to a future implementation project.'
        }),
        React.createElement(FAQItem, {
          question: 'Why should I pay for an audit instead of going straight to a system build?',
          answer: 'The audit saves you money. It ensures we build the right systems for your business, not just a “nice to have.” It gives you clarity, a roadmap, and an ROI projection before you commit to larger projects.'
        }),
        React.createElement(FAQItem, {
          question: 'What happens after the audit?',
          answer: 'We present your audit findings and, if you choose, we design and implement the recommended systems. This might include automation workflows, custom AI assistants, dashboards, or integrations with your existing tools.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you only work with certain industries?',
          answer: 'No. We’ve worked with solo entrepreneurs, local service providers, and multi-million pound organisations. The principles of saving time, automating repetitive work, and improving data visibility apply across every sector.'
        }),
        React.createElement(FAQItem, {
          question: 'How long does it take to see results?',
          answer: 'Most clients see results within the first 14 days, thanks to our quick win plan. Full implementation projects typically take 2 to 6 weeks depending on complexity.'
        }),
        React.createElement(FAQItem, {
          question: 'What tools and platforms do you use?',
          answer: 'We work with Notion, Airtable, n8n, Zapier, Tally, Fillout, ChatGPT, and other leading AI models and automation tools. Every solution is tailored to the tools you already use or are comfortable adopting.'
        }),
        React.createElement(FAQItem, {
          question: 'Will my team need training?',
          answer: 'Yes, but we make it simple. Every project includes handover, SOPs (step by step guides), and training so your team feels confident using the new systems.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you offer ongoing support?',
          answer: 'Yes. After implementation, many clients choose a retainer package. This includes ongoing optimisation, new automations, and monthly reporting. Retainers start from £1,000 per month.'
        }),
        React.createElement(FAQItem, {
          question: 'What if I’m not ready to spend £500 yet?',
          answer: 'That’s fine. Start with a free 30-minute consultation. You’ll still leave the call with clear ideas on how AI could help your business, even if you don’t move forward right away.'
        }),
        React.createElement(FAQItem, {
          question: 'What makes Dizzy Otter different from other agencies?',
          answer: 'Most agencies focus on building websites or single automations. We act as a consultancy — diagnosing first, then building the right solution. You get strategy, implementation, and support under one roof.'
        }),
        React.createElement(FAQItem, {
          question: 'Can you integrate with my existing tools?',
          answer: 'Almost always. We specialise in connecting the tools you already use. If you’re on spreadsheets, CRMs, or cloud apps, we can automate and link them without forcing you to start from scratch.'
        }),
        React.createElement(FAQItem, {
          question: 'Do you work internationally?',
          answer: 'Yes. We’re based in the UK but work with clients worldwide through remote consultations and online systems.'
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
