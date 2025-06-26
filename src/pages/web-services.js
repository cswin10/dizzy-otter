import React, { useEffect } from 'react';
import '../styles/home.css';
import '../styles/web-services.css';
import Navbar from '../components/Header';

// Add a simple icon for each service (can be replaced with SVGs or a library like react-icons)
const serviceIcons = [
  '🌐', // Custom Website Design
  '📱', // Responsive Design
  '🔍', // SEO Optimisation
  '🤖', // AI Integration
  '🛒', // E-commerce Solutions
  '📝', // Content Management Systems
  '⚡', // Performance Optimisation
  '🔒', // Security Enhancements
];

const services = [
  {
    title: 'Custom Website Design',
    desc: 'We create custom website designs tailored to your brand and business needs.'
  },
  {
    title: 'Responsive Design',
    desc: 'Our designs are fully responsive and mobile-friendly, ensuring a seamless experience on all devices.'
  },
  {
    title: 'SEO Optimisation',
    desc: 'We optimise your website for search engines to improve your online visibility and rankings.'
  },
  {
    title: 'AI Integration',
    desc: 'We integrate AI tools and chatbots to enhance user interaction and automate processes.'
  },
  {
    title: 'E-commerce Solutions',
    desc: 'We provide e-commerce solutions to help you sell your products and services online.'
  },
  {
    title: 'Content Management Systems',
    desc: 'We implement CMS solutions to make it easy for you to manage your website content.'
  },
  {
    title: 'Performance Optimisation',
    desc: 'We optimise your website\'s performance to ensure fast loading times and a smooth user experience.'
  },
  {
    title: 'Security Enhancements',
    desc: 'We enhance your website\'s security to protect it from threats and vulnerabilities.'
  }
];

const ServicesGrid = () => (
  <section className="services-section">
    <h2 className="services-heading">Our Services</h2>
    <div className="services-grid">
      {services.map((service, i) => (
        <div className="service-card" key={i} tabIndex={0}>
          <div className="service-card-inner">
            <div className="service-card-front">
              <div className="service-card-icon" aria-hidden="true">{serviceIcons[i]}</div>
              <h3>{service.title}</h3>
            </div>
            <div className="service-card-back">
              <p>{service.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WebServicesHero = () => {
  // Scroll to next section (match Home)
  const scrollToNextSection = () => {
    const hero = document.querySelector('.vhm-hero-container');
    if (hero) {
      const next = hero.nextElementSibling;
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div className="vhm-hero-container" style={{ position: 'relative' }}>
      <img className="vhm-hero-image" src="/web-hero.jpg" alt="Web Design Hero" />
      <div className="vhm-hero-content">
        <h1 className="hero-title">Modern Web Design and Software Applications</h1>
        <p className="hero-subtitle" style={{ marginTop: '2.5rem' }}>
          Websites and dashboards that work as hard as you do. Fast, beautiful, and built for your business.
        </p>
        <div
          className="scroll-down-arrow"
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          onClick={scrollToNextSection}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToNextSection(); }}
          style={{ cursor: 'pointer' }}
        >
          <span>▼</span>
        </div>
      </div>
    </div>
  );
};

export default function WebServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <WebServicesHero />
      <ServicesGrid />
      <section className="case-studies-section">
        <h2 className="case-studies-heading">Real Results for Real Businesses</h2>
        <div className="case-studies-intro">
          At Dizzy Otter, we don’t just build websites, we create digital tools that help businesses grow, automate tasks, and connect with their audience. Here are just a few of the projects we’ve delivered.
        </div>
        <div className="case-studies-list">
          <a className="case-study-card" href="https://the-real-mj-powell.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="case-study-logo" src="/website1.png" alt="MJ Powell logo" />
            <div className="case-study-title">MJ Powell — Author Website</div>
            <div className="case-study-desc">A sleek, minimalist site for an author to showcase their work, personality, and contact details. Built for speed, clarity, and easy updates.</div>
          </a>
          <a className="case-study-card" href="https://ariellionartists.com" target="_blank" rel="noopener noreferrer">
            <img className="case-study-logo" src="/website2.png" alt="Ariellion Artists logo" />
            <div className="case-study-title">Ariellion Artists — Agency Site</div>
            <div className="case-study-desc">A creative agency site with dynamic sections, clean layout, and simple CMS integration for future updates.</div>
          </a>
          <a className="case-study-card" href="https://gosynq.io" target="_blank" rel="noopener noreferrer">
            <img className="case-study-logo" src="/website3.png" alt="GoSynq logo" />
            <div className="case-study-title">GoSynq — SaaS Landing Page</div>
            <div className="case-study-desc">A modern, tech-focused landing page for a SaaS platform, highlighting product features, benefits, and clear CTAs.</div>
          </a>
          <a className="case-study-card" href="https://eco-merce-retail.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="case-study-logo" src="/website4.png" alt="Eco-Merce logo" />
            <div className="case-study-title">Eco-Merce — Concept Retail Drone Delivery</div>
            <div className="case-study-desc">A bold, concept site for an eco-friendly drone delivery startup, designed to tell a story and attract attention.</div>
          </a>
          <a className="case-study-card" href="https://vibe-haus-media.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="case-study-logo" src="/website5.png" alt="Vibe Haus Media logo" />
            <div className="case-study-title">Vibe Haus Media — Agency Landing Page</div>
            <div className="case-study-desc">A vibrant, stylish site for a media agency, built to highlight services, case studies, and drive enquiries.</div>
          </a>
          <a className="case-study-card" href="https://glittering-douhua-a9da74.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="case-study-logo" src="/website6.png" alt="Air Marketing logo" />
            <div className="case-study-title">Air Marketing — Sales Academy Website</div>
            <div className="case-study-desc">A clean, minimalist site built for a sales training academy. Designed for clarity, ease of navigation, and clear conversion points.</div>
          </a>
        </div>
        <a className="case-studies-cta" href="/contact">Let's Build Your Success Story</a>
      </section>
      <section className="pricing-section">
        <h2 className="pricing-heading">🚀 Web Design & Development Pricing</h2>
        <div className="pricing-tiers">
          <div className="pricing-card">
            <div className="pricing-title">Starter <span className="pricing-from">— From £500</span></div>
            <div className="pricing-desc">Perfect for small businesses needing a professional online presence</div>
            <ul className="pricing-list">
              <li>1-page or simple multi-section website</li>
              <li>Basic SEO setup</li>
              <li>Mobile-friendly, responsive design</li>
              <li>Contact form integration</li>
              <li>Launch support</li>
            </ul>
          </div>
          <div className="pricing-card">
            <div className="pricing-title">Pro <span className="pricing-from">— From £1000</span></div>
            <div className="pricing-desc">For growing businesses ready for more features</div>
            <ul className="pricing-list">
              <li>Multi-page website</li>
              <li>Custom design matched to your brand</li>
              <li>Integrated forms (lead capture, booking, etc.)</li>
              <li>Basic dashboard or Notion portal</li>
              <li>SEO optimisation</li>
              <li>Analytics setup</li>
            </ul>
          </div>
          <div className="pricing-card">
            <div className="pricing-title">Enterprise <span className="pricing-from">— Custom Pricing</span></div>
            <div className="pricing-desc">Tailored solutions for businesses with advanced needs</div>
            <ul className="pricing-list">
              <li>Complex sites, client portals, e-commerce</li>
              <li>Full AI tool integration (optional)</li>
              <li>Custom dashboards (Notion, Airtable)</li>
              <li>Unique functionality and backend features</li>
              <li>Dedicated support</li>
            </ul>
          </div>
        </div>
        <div className="pricing-support">
          <h3 className="pricing-support-heading">🌟 Maintenance & Support Packages</h3>
          <div className="pricing-support-desc">
            We keep your website secure, fast, and up-to-date. Choose a plan that fits your needs, or request ad-hoc support.
          </div>
          <ul className="pricing-support-list">
            <li>Hourly rate: <b>£35/hour</b> (custom work, feature updates, fixes)</li>
            <li>Basic maintenance: <b>£60/month</b> — includes 2 hours<br/><span className="pricing-support-detail">Plugin updates, security checks, minor text/image updates</span></li>
            <li>Intermediate maintenance: <b>£110/month</b> — includes 4 hours<br/><span className="pricing-support-detail">All basic features plus blog uploads, keyword updates</span></li>
            <li>Advanced maintenance: <b>£200/month</b> — includes 8 hours<br/><span className="pricing-support-detail">Full site review, performance tuning, caching, database cleanup, ongoing SEO tweaks</span></li>
          </ul>
        </div>
      </section>
      <section className="why-web-section">
        <h2 className="why-heading">Why Choose Our Web Services</h2>
        <ul className="why-list">
          <li>Personal, friendly service</li>
          <li>Sites built to scale with your business</li>
          <li>Seamless integration with your AI systems</li>
        </ul>
      </section>
    </>
  );
}
