import React, { useEffect } from 'react';
import '../styles/products.css';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="icon-wrapper">
          <i className="fa-solid fa-users"></i>
        </div>
        <h1>About Dizzy Otter</h1>
        <p className="subtitle">
          An Exeter-based software and automation company helping growing businesses save time, reduce costs,
          and scale efficiently through custom software, AI solutions, and intelligent automation.
        </p>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* What we do */}
        <section className="product-section reveal">
          <h2>What we do</h2>
          <p>
            As a software and automation company in Exeter, we specialize in creating bespoke SaaS products, custom
            websites with SEO optimization, and mobile app development. Most agencies jump straight to building.
            We diagnose first. Our free AI audits identify the right problems to solve, and our custom software
            solutions deliver real results that save time and money.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            We work with solo founders, local service businesses and growing teams who want to automate the
            repetitive work, streamline operations and focus on what actually drives growth.
          </p>
        </section>

        {/* How we're different */}
        <section className="product-section reveal">
          <h2>How we're different</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Diagnose first, build second</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We start with a free audit to understand your business and identify opportunities. No guesswork, no generic solutions.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>No code, no complexity</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We build systems that are simple to use and easy to understand. No technical knowledge required.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Ongoing support</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We don't build and disappear. We provide ongoing optimization, new automations and support as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Real solutions, real results</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                From automating quote requests to building complete client management systems, we deliver solutions
                that make a measurable difference to your bottom line.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/about-hero.jpg" alt="AI solutions for growing businesses" />
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="product-section reveal">
          <h2>Who we work with</h2>
          <ul className="feature-list">
            <li>Solo founders wearing too many hats and drowning in admin work</li>
            <li>Local service businesses managing bookings, invoices and customers manually</li>
            <li>Growing teams whose processes are breaking down as they scale</li>
            <li>Businesses tired of scattered tools, manual data entry and things slipping through the cracks</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to get started?</h3>
          <p>
            Book a free 30-minute AI audit. We'll identify opportunities and show you exactly what's possible.
          </p>
          <a
            href="https://calendly.com/studio-dizzyotter/30min"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your free audit
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.8rem' }}></i>
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;
