import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function CallFlowAI() {
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
          <i className="fa-solid fa-phone-volume"></i>
        </div>
        <h1>CallFlow AI</h1>
        <p className="subtitle">
          Your AI call assistant that answers every call, books work and filters out time wasters
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
            <Link to="/clientos" className="product-card">
              <h4>ClientOS</h4>
              <p>Your complete client management and automation system that runs the backend of your business</p>
            </Link>
          </div>
        </div>

        {/* What it does */}
        <section className="product-section reveal">
          <h2>What it does</h2>
          <p>
            CallFlow AI is your intelligent call assistant that never sleeps. It picks up every incoming
            call instantly, handles common questions, books appointments and filters out time wasters before
            they reach you. Unlike a traditional receptionist, it's always available, always consistent, and
            never needs a break.
          </p>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-image">
              <img src="/services4.jpg" alt="CallFlow AI call assistant" />
            </div>
            <div className="showcase-text">
              <h2>Never miss a call again</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                Your AI assistant picks up instantly, every time. Day or night, busy or free, every call
                is answered professionally and every opportunity is captured.
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="product-section reveal">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* What it handles */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#50E3C2', marginBottom: '1rem' }}>What it handles</h3>
              <ul className="feature-list" style={{ fontSize: '1rem' }}>
                <li>Answers calls instantly, 24/7, even outside hours</li>
                <li>Handles FAQs about services, pricing and availability</li>
                <li>Books appointments directly into your calendar</li>
                <li>Collects caller details and enquiry information</li>
                <li>Filters out spam calls and low value enquiries</li>
                <li>Sends confirmations and follow-up messages</li>
              </ul>
            </div>

            {/* What you get */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#2979FF', marginBottom: '1rem' }}>What you get</h3>
              <ul className="feature-list" style={{ fontSize: '1rem' }}>
                <li>AI assistant trained on your business</li>
                <li>Custom phone number or existing line integration</li>
                <li>Unlimited calls handled throughout the month</li>
                <li>Calendar and CRM integration</li>
                <li>Call summaries and transcripts</li>
                <li>Monthly performance reports and updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why businesses pay for this */}
        <section className="product-section reveal">
          <h2>Why businesses pay for this</h2>
          <p>
            CallFlow AI costs a fraction of hiring a receptionist and never gets sick, never takes a day
            off, and never lets a call go to voicemail. For most businesses, it pays for itself by capturing
            just two or three jobs per month that would have otherwise slipped through.
          </p>
          <ul className="feature-list">
            <li>Captures revenue from calls you'd normally miss during evenings, weekends or when you're busy</li>
            <li>Saves hours every week by handling repetitive enquiries automatically</li>
            <li>Filters out low value calls so you only speak to serious prospects</li>
            <li>Costs less than minimum wage but works full-time, 24/7</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to capture every call?</h3>
          <p>
            Book a call to see CallFlow AI in action. We'll show you how it works and set up a demo
            tailored to your business.
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
          Most clients begin with one product and add the other later as their business grows.
          CallFlow AI pairs perfectly with ClientOS to create a complete system that captures
          every call, manages every client and automates the entire backend of your business.
        </p>
        <Link to="/contact" className="cta-button">
          Book a call
          <i className="fa-solid fa-calendar-check" style={{ marginLeft: '0.8rem' }}></i>
        </Link>
      </section>
    </div>
  );
}

export default CallFlowAI;
