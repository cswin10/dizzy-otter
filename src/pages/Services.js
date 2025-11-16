import React, { useEffect, useState } from 'react';
import '../styles/services.css';
import '../styles/home.css';
import { useScrollReveal, useScrollToTop } from '../hooks';

const serviceSections = [
  { id: 'ai-systems', label: 'Complete AI Systems' },
  { id: 'ai-bots', label: 'Custom AI Assistants and Bots' },
  { id: 'automation', label: 'Automation Workflows' },
  { id: 'web-design', label: 'Dashboards and Reporting' },
  { id: 'other-services', label: 'Other Integrations' }
];

const Services = () => {
  useScrollToTop();
  useScrollReveal();
  const [showTally, setShowTally] = useState(false);

  useEffect(() => {
    // Only show popup if not previously dismissed
    const dismissed = localStorage.getItem('tallyPopupDismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setShowTally(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showTally && window.Tally) {
      window.Tally.openPopup('wbEW5e', {
        layout: 'modal',
        width: 420,
        autoClose: true,
        onClose: () => {
          setShowTally(false);
          localStorage.setItem('tallyPopupDismissed', '1');
        }
      });
    } else if (showTally) {
      // If Tally is not loaded yet, wait for the script to load
      const onScriptLoad = () => {
        if (window.Tally) {
          window.Tally.openPopup('wbEW5e', {
            layout: 'modal',
            width: 420,
            autoClose: true,
            onClose: () => {
              setShowTally(false);
              localStorage.setItem('tallyPopupDismissed', '1');
            }
          });
        }
      };
      const script = document.querySelector('script[src*="tally.so/widgets/embed.js"]');
      if (script) {
        script.addEventListener('load', onScriptLoad, { once: true });
      }
      return () => {
        if (script) script.removeEventListener('load', onScriptLoad);
      };
    }
  }, [showTally]);

  // Bulletproof scroll to next section for hero arrow
  const scrollToNextSection = e => {
    const arrow = e?.target?.closest('.scroll-down-arrow');
    const hero = arrow?.closest('section, .services-hero-section');
    if (hero) {
      const sections = Array.from(document.querySelectorAll('section')).filter(s => s.offsetParent !== null);
      const idx = sections.indexOf(hero);
      if (idx !== -1 && idx < sections.length - 1) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="services-page" tabIndex={-1} aria-label="Services Page">
      {/* Hero Section */}
      <section className="services-hero-section hero-bg-services">
  <h1 className="services-hero-title reveal">Solutions</h1>
  <p className="services-hero-subtitle reveal">Every business is different — these are examples of the systems we design after an AI Audit.</p>
        <div
          className="scroll-down-arrow"
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          style={{ cursor: 'pointer' }}
          onClick={e => scrollToNextSection(e)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToNextSection(e); }}
        >
          <span>&#x25bc;</span>
        </div>
      </section>
      {/* Top Navigation for Service Sections */}
      <nav className="services-topnav" aria-label="Service Sections">
        {serviceSections.map(section => (
          <a key={section.id} href={`#${section.id}`} className="services-topnav-link">
            {section.label}
          </a>
        ))}
      </nav>
      {/* Service Sections */}
      {serviceSections.map((section, idx) => {
        const images = [
          '/services1.jpg',
          '/services2.jpg',
          '/services3.jpg',
          '/services4.jpg',
          '/services5.jpg'
        ];
        const isReverse = idx % 2 === 1;
        // Section 1: Complete AI Systems
        if (idx === 0) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className={`ai-systems-fullrow-content ai-systems-featured-content ai-systems-dropdown-space${isReverse ? ' ai-systems-content-left' : ''} reveal`}>
                  <span className="ai-systems-badge reveal">🚀 Most Popular</span>
                  <h2 className="ai-systems-title reveal">Complete AI Systems</h2>
                  <p className="ai-systems-desc reveal">
                    End-to-end setups with forms, CRMs, AI assistants, and automations that save you days every month.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Book a free AI audit and see how a <b>smart system</b> could work for you.</span>
                    <a href="https://calendly.com/studio-dizzyotter/30min" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="Book a Free AI Audit">Book a Free AI Audit</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Complete AI Systems illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
        // Section 2: Custom AI Assistants and Bots
        if (idx === 1) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className="ai-systems-fullrow-content ai-systems-featured-content ai-systems-content-left reveal">
                  <span className="ai-systems-badge reveal">✨ New for 2025</span>
                  <h2 className="ai-systems-title reveal">Custom AI Assistants & Bots</h2>
                  <p className="ai-systems-desc reveal">
                    Chatbots and assistants that handle FAQs, lead qualification, onboarding, and more.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">See how a custom AI assistant could save you hours every week.</span>
                    <a href="https://calendly.com/studio-dizzyotter/30min" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="Book a Free AI Audit">Book a Free AI Audit</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Custom AI Assistants and Bots illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
        // Section 3: Automation Workflows
        if (idx === 2) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className="ai-systems-fullrow-content ai-systems-featured-content reveal">
                  <span className="ai-systems-badge reveal">✨ Automation</span>
                  <h2 className="ai-systems-title reveal">Automation Workflows</h2>
                  <p className="ai-systems-desc reveal">
                    Automations that eliminate repetitive tasks and connect your tools to free up hours every week.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Let's build the workflow that fits your business.</span>
                    <a href="https://calendly.com/studio-dizzyotter/30min" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="Book a Free AI Audit">Book a Free AI Audit</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Automation Workflows illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
  // Section 4: Dashboards and Reporting
        if (idx === 3) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className="ai-systems-fullrow-content ai-systems-featured-content ai-systems-content-left reveal">
                  <span className="ai-systems-badge reveal">✨ Web & Dashboards</span>
                  <h2 className="ai-systems-title reveal">Dashboards & Reporting</h2>
                  <p className="ai-systems-desc reveal">
                    Integrated Notion or Airtable dashboards that give you visibility on leads, clients, and performance.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Let's design a digital home that works as hard as you do.</span>
                    <a href="https://calendly.com/studio-dizzyotter/30min" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="Book a Free AI Audit">Book a Free AI Audit</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Dashboards and Reporting illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
  // Section 5: Other Integrations
        if (idx === 4) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className="ai-systems-fullrow-content ai-systems-featured-content reveal">
                  <span className="ai-systems-badge reveal">✨ Integrations</span>
                  <h2 className="ai-systems-title reveal">Other Integrations</h2>
                  <p className="ai-systems-desc reveal">
                    Payments, bookings, analytics, reviews, and custom tools to streamline your operations.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Ask us how we can connect your tools and save you time.</span>
                    <a href="https://calendly.com/studio-dizzyotter/30min" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="Book a Free AI Audit">Book a Free AI Audit</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Other Integrations illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
};

export default Services;
