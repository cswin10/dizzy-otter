import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function ClientOS() {
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
          <i className="fa-solid fa-users-gear"></i>
        </div>
        <h1>ClientOS</h1>
        <p className="subtitle">
          Your complete client management and automation system that runs the backend of your business
        </p>
        <div className="price">From £499 per month</div>
      </section>

      {/* Main Content */}
      <div className="product-content">
        {/* View Other Products */}
        <div className="view-other-products reveal">
          <h3>
            <i className="fa-solid fa-grid-2" style={{ marginRight: '0.5rem' }}></i>
            View Other Products
          </h3>
          <div className="products-grid">
            <Link to="/callflow-ai" className="product-card">
              <h4>CallFlow AI</h4>
              <p>Your AI call assistant that answers every call, books work and filters out time wasters</p>
            </Link>
          </div>
        </div>

        {/* What it does */}
        <section className="product-section reveal">
          <h2>What it does</h2>
          <p>
            ClientOS is your business operating system. It brings together client management, workflow
            automation and backend operations into one organised system. No more spreadsheets, sticky notes
            or scattered tools. Just one platform that manages clients, automates admin and gives you
            complete visibility over your business.
          </p>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Everything in one place</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                Stop juggling spreadsheets, emails and sticky notes. ClientOS brings your entire business
                together in one organised, automated system.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/services3.jpg" alt="ClientOS client management system" />
            </div>
          </div>
        </section>

        {/* Three Columns - Clients, Workflows, Reporting */}
        <section className="product-section reveal">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Clients */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#50E3C2', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-users" style={{ marginRight: '0.6rem' }}></i>
                Clients
              </h3>
              <ul className="feature-list" style={{ fontSize: '1rem' }}>
                <li>Complete client profiles and history</li>
                <li>Visual pipeline management</li>
                <li>Document storage and version control</li>
                <li>Custom fields and segmentation</li>
              </ul>
            </div>

            {/* Workflows & Automation */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#2979FF', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-gears" style={{ marginRight: '0.6rem' }}></i>
                Workflows
              </h3>
              <ul className="feature-list" style={{ fontSize: '1rem' }}>
                <li>Automated lead capture and routing</li>
                <li>Quote and invoice templates</li>
                <li>Payment reminders and follow-ups</li>
                <li>Calendar and email integration</li>
              </ul>
            </div>

            {/* Reporting */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#50E3C2', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-chart-line" style={{ marginRight: '0.6rem' }}></i>
                Reporting
              </h3>
              <ul className="feature-list" style={{ fontSize: '1rem' }}>
                <li>Real-time dashboard with key metrics</li>
                <li>Revenue tracking and forecasting</li>
                <li>Pipeline and conversion reports</li>
                <li>Mobile access anywhere, anytime</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="product-section reveal">
          <h2>What you get</h2>
          <p>
            ClientOS is built specifically for your business. We design the system around how you work,
            automate the workflows that waste your time, and keep everything running smoothly as you grow.
          </p>
          <ul className="feature-list">
            <li>Custom-built system designed for your specific workflows</li>
            <li>Full integration with your existing tools and platforms</li>
            <li>Monthly workflow reviews and optimisation</li>
            <li>Ongoing support, training and updates</li>
          </ul>
        </section>

        {/* Why it matters */}
        <section className="product-section reveal">
          <h2>Why it matters</h2>
          <p>
            Most small businesses waste hours every week on manual admin, lose revenue because things slip
            through the cracks, and struggle to scale because chaos doesn't scale. ClientOS fixes that.
          </p>
          <ul className="feature-list">
            <li>Saves hours every week by automating repetitive tasks</li>
            <li>Captures more revenue by ensuring nothing gets forgotten</li>
            <li>Reduces stress with organised clarity instead of scattered notes</li>
            <li>Scales with your business without hiring admin staff</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to organise your business?</h3>
          <p>
            Book a call and we'll show you exactly how ClientOS would transform your operations.
          </p>
          <Link to="/contact" className="cta-button">
            Book a call
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.8rem' }}></i>
          </Link>
        </section>
      </div>

      {/* Final CTA Band */}
      <section className="final-cta-band">
        <h3>Start with one product, scale when you're ready</h3>
        <p>
          Most clients begin with one product and add the other later. ClientOS pairs perfectly with
          CallFlow AI to create a complete system that captures every call, manages every client and
          automates the entire backend of your business.
        </p>
        <Link to="/contact" className="cta-button">
          Book a call
          <i className="fa-solid fa-calendar-check" style={{ marginLeft: '0.8rem' }}></i>
        </Link>
      </section>
    </div>
  );
}

export default ClientOS;
