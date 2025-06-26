import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/services.css';

// Robust Intersection Observer + MutationObserver for reveal-on-scroll
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
        { threshold: 0.08 }
      );
      observeAll();
      // Watch for new .reveal elements added to the DOM
      const mutationObserver = new MutationObserver(() => {
        observeAll();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
        mutationObserver.disconnect();
      };
    } else {
      // Fallback for old browsers
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
  background: 'linear-gradient(rgba(26,31,54,0.18), rgba(26,31,54,0.18)), url("/services-hero.jpg") center/cover no-repeat'
};

const serviceSections = [
  { id: 'ai-systems', label: 'Complete AI Systems' },
  { id: 'ai-bots', label: 'Custom AI Assistants and Bots' },
  { id: 'automation', label: 'Automation Workflows' },
  { id: 'web-design', label: 'Web Design and Dashboards' },
  { id: 'other-services', label: 'Other Services and Integrations' }
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
      <section className="services-hero-section" style={heroBg}>
        <h1 className="services-hero-title reveal">AI and Automation Services</h1>
        <p className="services-hero-subtitle reveal">AI-powered systems, automation tools, and digital solutions for growing businesses</p>
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
                    At Dizzy Otter, we build fully integrated systems that combine forms, dashboards, AI assistants, and automation workflows. These systems are designed to take over repetitive tasks, reduce human error, and give you a real-time view of your business — all in one place.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Book a free consultation and see how a <b>smart system</b> could work for you.</span>
                    <a href="/contact" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="Book Free Consultation">Book Free Consultation</a>
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
                  <h2 className="ai-systems-title reveal">Custom AI Assistants and Bots</h2>
                  <p className="ai-systems-desc reveal">
                    We design AI tools and chatbots tailored to your business — from GPT-powered assistants that help you draft proposals or social posts, to bots that handle customer queries or booking requests. These aren’t generic bots — they’re built to your tone, needs, and workflows.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">See how a custom AI assistant could save you hours every week.</span>
                    <a href="#plans-pricing" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="See Plans and Pricing">Plans and Pricing</a>
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
                    We connect your favorite tools so they work together, not in silos. Whether you want to automate lead follow-ups, proposal creation, or task assignments, we’ll map and build workflows using Zapier, n8n, or Make.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Let’s build the workflow that fits your business.</span>
                    <a href="#plans-pricing" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="See Plans and Pricing">Plans and Pricing</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Automation Workflows illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
        // Section 4: Web Design and Dashboards
        if (idx === 3) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className="ai-systems-fullrow-content ai-systems-featured-content ai-systems-content-left reveal">
                  <span className="ai-systems-badge reveal">✨ Web & Dashboards</span>
                  <h2 className="ai-systems-title reveal">Web Design and Dashboards</h2>
                  <p className="ai-systems-desc reveal">
                    We don’t just build good-looking websites — we create sites and dashboards that connect to your systems, showcase your brand, and work with your automations. Everything is designed to be fast, functional, and easy to manage.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Let’s design a digital home that works as hard as you do.</span>
                    <a href="#plans-pricing" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="See Plans and Pricing">Plans and Pricing</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Web Design and Dashboards illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
        // Section 5: Other Services and Integrations
        if (idx === 4) {
          return (
            <section key={section.id} id={section.id} className={`ai-systems-fullrow ai-systems-featured-bg reveal`}>
              <div className={`ai-systems-fullrow-flex${isReverse ? ' reverse-flex' : ''} reveal`}>
                <div className="ai-systems-fullrow-content ai-systems-featured-content reveal">
                  <span className="ai-systems-badge reveal">✨ Integrations</span>
                  <h2 className="ai-systems-title reveal">Other Services and Integrations</h2>
                  <p className="ai-systems-desc reveal">
                    The final piece of the puzzle — we help you link up payments, bookings, analytics, reviews, and more. Everything feeds into your system so you have one smooth operation.
                  </p>
                  <div className="ai-systems-cta-row reveal" style={{ marginBottom: '2.2rem' }}>
                    <span className="ai-systems-cta-text reveal">Ask us how we can connect your tools and save you time.</span>
                    <a href="#plans-pricing" className="ai-systems-cta-btn ai-systems-cta-btn-lg reveal" aria-label="See Plans and Pricing">Plans and Pricing</a>
                  </div>
                </div>
                <div className="ai-systems-fullrow-img-wrap reveal">
                  <img src={images[idx]} alt="Other Services and Integrations illustration" className="ai-systems-fullrow-img reveal" loading="lazy" />
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}
      {/* PLANS & PRICING SECTION */}
      <section id="plans-pricing" className="plans-pricing-section reveal">
        <div className="plans-pricing-header reveal">
          <h2 className="plans-pricing-title reveal">🚀 Plans & Pricing</h2>
        </div>
        <div className="plans-pricing-grid reveal">
          {/* Custom AI Assistants and Bots */}
          <div className="plans-row reveal">
            <div className="plans-service-col reveal">
              <h3 className="reveal">Custom AI Assistants and Bots</h3>
              <p className="plans-service-desc reveal">💬 Custom GPT-powered tools, chatbots, and AI responders designed for your specific business needs.</p>
              <div className="plans-includes reveal">
                <strong>What’s included:</strong>
                <ul className="reveal">
                  <li className="reveal">Proposal or contract draft bots</li>
                  <li className="reveal">Customer service bots (web, Slack, or email)</li>
                  <li className="reveal">Social caption, email, and blog content generators</li>
                  <li className="reveal">Lead qualification bots linked to your forms</li>
                </ul>
                <strong>Example use cases:</strong>
                <ul className="reveal">
                  <li className="reveal">A wedding planner drafts detailed proposals in minutes with a GPT bot</li>
                  <li className="reveal">An eCommerce store offers 24/7 chat support without adding staff</li>
                </ul>
              </div>
            </div>
            <div className="plans-price-col plans-starter reveal">
              <span className="plans-dot plans-dot-green reveal"></span>
              <div className="plans-price-title reveal">Starter</div>
              <div className="plans-price reveal">£500+</div>
              <div className="plans-price-desc reveal">one AI assistant setup (simple task or draft bot, light customisation)</div>
            </div>
            <div className="plans-price-col plans-pro reveal">
              <span className="plans-dot plans-dot-orange reveal"></span>
              <div className="plans-price-title reveal">Pro</div>
              <div className="plans-price reveal">£1,000+</div>
              <div className="plans-price-desc reveal">multi-function bot (e.g. proposal + email follow-up), integrated with your tools</div>
            </div>
            <div className="plans-price-col plans-enterprise reveal">
              <span className="plans-dot plans-dot-blue reveal"></span>
              <div className="plans-price-title reveal">Enterprise</div>
              <div className="plans-price reveal">Custom quote</div>
              <div className="plans-price-desc reveal">complex bots, multiple channels, advanced tone training</div>
            </div>
            <div className="plans-row-cta reveal">
              <span className="reveal">Discover how your business could scale with a custom AI assistant.</span>
              <a href="/contact" className="ai-systems-cta-btn plans-cta-btn reveal" aria-label="Book Free Consultation">Book a Free Consultation</a>
            </div>
          </div>
          {/* Automation Workflows */}
          <div className="plans-row reveal">
            <div className="plans-service-col reveal">
              <h3 className="reveal">Automation Workflows</h3>
              <p className="plans-service-desc reveal">💬 Connect your tools with custom workflows that automate the busywork and keep everything in sync.</p>
              <div className="plans-includes reveal">
                <strong>What’s included:</strong>
                <ul className="reveal">
                  <li className="reveal">Lead capture to CRM to notification chain</li>
                  <li className="reveal">Proposal requests to AI draft to PDF export</li>
                  <li className="reveal">Task assignment automation</li>
                  <li className="reveal">Cross-platform alerts</li>
                </ul>
                <strong>Example use cases:</strong>
                <ul className="reveal">
                  <li className="reveal">A designer auto-generates contracts from form data</li>
                  <li className="reveal">A service business gets instant Slack alerts for hot leads</li>
                </ul>
              </div>
            </div>
            <div className="plans-price-col plans-starter reveal">
              <span className="plans-dot plans-dot-green reveal"></span>
              <div className="plans-price-title reveal">Starter</div>
              <div className="plans-price reveal">£400+</div>
              <div className="plans-price-desc reveal">one automation flow (simple connection, e.g. form to CRM)</div>
            </div>
            <div className="plans-price-col plans-pro reveal">
              <span className="plans-dot plans-dot-orange reveal"></span>
              <div className="plans-price-title reveal">Pro</div>
              <div className="plans-price reveal">£800+</div>
              <div className="plans-price-desc reveal">2–3 integrated flows (e.g. lead capture + proposal draft + follow-up)</div>
            </div>
            <div className="plans-price-col plans-enterprise reveal">
              <span className="plans-dot plans-dot-blue reveal"></span>
              <div className="plans-price-title reveal">Enterprise</div>
              <div className="plans-price reveal">Custom quote</div>
              <div className="plans-price-desc reveal">advanced workflows across multiple tools, documentation, training</div>
            </div>
            <div className="plans-row-cta reveal">
              <span className="reveal">Let’s build your custom automation map.</span>
              <a href="/contact" className="ai-systems-cta-btn plans-cta-btn reveal" aria-label="Book Free Consultation">Book a Free Consultation</a>
            </div>
          </div>
          {/* Web Design and Dashboards */}
          <div className="plans-row reveal">
            <div className="plans-service-col reveal">
              <h3 className="reveal">Web Design and Dashboards</h3>
              <p className="plans-service-desc reveal">💬 Websites and dashboards that look great, work fast, and connect to your systems.</p>
              <div className="plans-includes reveal">
                <strong>What’s included:</strong>
                <ul className="reveal">
                  <li className="reveal">Responsive website design</li>
                  <li className="reveal">Notion or Airtable dashboard build</li>
                  <li className="reveal">Basic SEO setup</li>
                  <li className="reveal">Forms linked to workflows</li>
                </ul>
                <strong>Example use cases:</strong>
                <ul className="reveal">
                  <li className="reveal">A service business collects leads through its site and manages them in Notion</li>
                  <li className="reveal">A coaching business offers a branded client portal</li>
                </ul>
              </div>
            </div>
            <div className="plans-price-col plans-starter reveal">
              <span className="plans-dot plans-dot-green reveal"></span>
              <div className="plans-price-title reveal">Starter</div>
              <div className="plans-price reveal">£750+</div>
              <div className="plans-price-desc reveal">basic 1-page site or Notion dashboard, branded and connected</div>
            </div>
            <div className="plans-price-col plans-pro reveal">
              <span className="plans-dot plans-dot-orange reveal"></span>
              <div className="plans-price-title reveal">Pro</div>
              <div className="plans-price reveal">£1,500+</div>
              <div className="plans-price-desc reveal">multi-page site + integrated dashboard + form connections</div>
            </div>
            <div className="plans-price-col plans-enterprise reveal">
              <span className="plans-dot plans-dot-blue reveal"></span>
              <div className="plans-price-title reveal">Enterprise</div>
              <div className="plans-price reveal">Custom quote</div>
              <div className="plans-price-desc reveal">advanced design, custom backend, full integration</div>
            </div>
            <div className="plans-row-cta reveal">
              <span className="reveal">Let’s build a digital home for your business.</span>
              <a href="/contact" className="ai-systems-cta-btn plans-cta-btn reveal" aria-label="Book Free Consultation">Book a Free Consultation</a>
            </div>
          </div>
          {/* Other Integrations */}
          <div className="plans-row reveal">
            <div className="plans-service-col reveal">
              <h3 className="reveal">Other Integrations</h3>
              <p className="plans-service-desc reveal">💬 We link your payments, bookings, analytics, and reviews so they work seamlessly with your system.</p>
              <div className="plans-includes reveal">
                <strong>What’s included:</strong>
                <ul className="reveal">
                  <li className="reveal">Stripe payment links and invoicing</li>
                  <li className="reveal">Calendly bookings</li>
                  <li className="reveal">Google Analytics connection</li>
                  <li className="reveal">Review request automations</li>
                </ul>
                <strong>Example use cases:</strong>
                <ul className="reveal">
                  <li className="reveal">A consultant automates booking, invoicing, and review requests</li>
                  <li className="reveal">A service business links payment and onboarding in one flow</li>
                </ul>
              </div>
            </div>
            <div className="plans-price-col plans-starter reveal">
              <span className="plans-dot plans-dot-green reveal"></span>
              <div className="plans-price-title reveal">Starter</div>
              <div className="plans-price reveal">£300+</div>
              <div className="plans-price-desc reveal">single integration (e.g. Stripe setup)</div>
            </div>
            <div className="plans-price-col plans-pro reveal">
              <span className="plans-dot plans-dot-orange reveal"></span>
              <div className="plans-price-title reveal">Pro</div>
              <div className="plans-price reveal">£600+</div>
              <div className="plans-price-desc reveal">2–3 integrations connected to your system</div>
            </div>
            <div className="plans-price-col plans-enterprise reveal">
              <span className="plans-dot plans-dot-blue reveal"></span>
              <div className="plans-price-title reveal">Enterprise</div>
              <div className="plans-price reveal">Custom quote</div>
              <div className="plans-price-desc reveal">complex setup with automation, reporting, and training</div>
            </div>
            <div className="plans-row-cta reveal">
              <span className="reveal">Ask us how we can connect your tools and save you time.</span>
              <a href="/contact" className="ai-systems-cta-btn plans-cta-btn reveal" aria-label="Book Free Consultation">Book a Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
