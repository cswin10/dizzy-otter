import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function Home() {
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
          <i className="fa-solid fa-rocket"></i>
        </div>
        <h1>Welcome to Dizzy Otter</h1>
        <p className="subtitle">
          AI consultancy for growing businesses. We audit your workflows, design custom automations
          and AI assistants, and support you as you scale.
        </p>
        <a
          href="https://calendly.com/studio-dizzyotter/30min"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem' }}
        >
          Book your free AI audit
          <i className="fa-solid fa-calendar-check" style={{ marginLeft: '0.8rem' }}></i>
        </a>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* What we do */}
        <section className="product-section reveal">
          <h2>What we do</h2>
          <p>
            We help growing businesses save time, reduce costs and scale efficiently through AI and automation.
            From free audits that identify opportunities, to custom systems that transform operations, we're with
            you at every step.
          </p>
        </section>

        {/* Our Products */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-box-open" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Our Products
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <Link to="/clientos" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>ClientOS</h3>
              <p>Your complete client management and automation system that runs the backend of your business</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>From £499/month →</div>
            </Link>

            <Link to="/callflow-ai" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>CallFlow AI</h3>
              <p>Your AI call assistant that answers every call, books work and filters out time wasters</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>From £499/month →</div>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-screwdriver-wrench" style={{ marginRight: '0.8rem', color: '#2979FF' }}></i>
            Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-magnifying-glass-chart" style={{ marginRight: '0.5rem' }}></i>
                AI Audit
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Free 30-minute review of your workflows. We identify opportunities where AI and automation
                can save time, reduce costs and increase profit.
              </p>
              <Link to="/ai-audit" style={{ color: '#50E3C2', textDecoration: 'none', fontSize: '0.95rem', marginTop: '0.5rem', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-wand-magic-sparkles" style={{ marginRight: '0.5rem' }}></i>
                Custom AI Systems
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Bespoke AI assistants, chatbots and intelligent systems built specifically for your business
                and integrated with your existing tools.
              </p>
              <Link to="/services" style={{ color: '#50E3C2', textDecoration: 'none', fontSize: '0.95rem', marginTop: '0.5rem', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-diagram-project" style={{ marginRight: '0.5rem' }}></i>
                Automation Workflows
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Connect your tools, automate repetitive tasks and build workflows that save hours every
                week without writing a single line of code.
              </p>
              <Link to="/services" style={{ color: '#50E3C2', textDecoration: 'none', fontSize: '0.95rem', marginTop: '0.5rem', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Transform your business with AI</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                From small automations that save hours each week, to complete systems that transform how you operate.
                We build solutions that scale with your business.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/services2.jpg" alt="AI and automation solutions" />
            </div>
          </div>
        </section>

        {/* Why Dizzy Otter */}
        <section className="product-section reveal">
          <h2>Why Dizzy Otter</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Diagnose first, build second</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Most agencies jump straight to building. We start with a free audit to identify the right problems to solve.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>No code, no complexity</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                We build systems that are simple to use, easy to understand and don't require technical knowledge.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Ongoing support</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                We don't build and disappear. We provide ongoing optimization, new automations and support as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-quote-left" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            What our clients say
          </h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Dizzy Otter made the process easy, handling all the technical details and delivering a fantastic result. I highly recommend them for small businesses."
              </p>
              <div className="testimonial-author">
                <strong>Paul Streeter</strong>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Dizzy Otter took the time to understand our vision and delivered a sleek, user-friendly system that exceeded our expectations."
              </p>
              <div className="testimonial-author">
                <strong>Jo Marshall</strong>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Working with Dizzy Otter was a dream. They brought creativity, efficiency, and flair to the project. Highly recommended."
              </p>
              <div className="testimonial-author">
                <strong>M.J Powell</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to transform your business?</h3>
          <p>
            Book a free 30-minute AI audit. We'll identify opportunities, provide actionable recommendations
            and show you exactly what's possible.
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

export default Home;
