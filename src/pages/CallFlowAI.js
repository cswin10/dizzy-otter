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
            CallFlow AI is your intelligent call assistant that never sleeps. It picks up every
            incoming call instantly, whether you're busy, after hours, or simply can't get to the
            phone. Unlike a traditional receptionist, it's always available, always consistent,
            and never needs a break.
          </p>
          <ul className="feature-list">
            <li>Answers every call instantly, even outside opening hours, so you never miss an opportunity</li>
            <li>Handles common questions about your services, pricing, location and availability with natural conversation</li>
            <li>Books appointments or jobs directly into your calendar based on your availability</li>
            <li>Collects caller details including name, contact info and enquiry specifics</li>
            <li>Filters out time wasters, spam calls and low value enquiries before they reach you</li>
            <li>Pushes qualified leads straight into your CRM or database automatically</li>
            <li>Provides clear call summaries so you can skim what happened in seconds</li>
          </ul>
        </section>

        {/* What you get each month */}
        <section className="product-section reveal">
          <h2>What you get each month</h2>
          <p>
            CallFlow AI is a fully managed service. We set it up, keep it running, and make sure
            it gets smarter every month based on your real calls and feedback.
          </p>
          <ul className="feature-list">
            <li>AI assistant trained on your business, services and frequently asked questions</li>
            <li>Custom phone number or integration with your existing line</li>
            <li>Unlimited incoming calls handled 24/7 throughout the month</li>
            <li>Automatic calendar integration for seamless appointment booking</li>
            <li>CRM integration to capture and store every lead that comes through</li>
            <li>Call summaries and transcripts delivered after every conversation</li>
            <li>Monthly performance reports showing calls handled, leads captured and appointments booked</li>
            <li>Ongoing training and updates to improve responses based on real call data</li>
          </ul>
        </section>

        {/* Why businesses pay for this */}
        <section className="product-section reveal">
          <h2>Why businesses pay for this</h2>
          <p>
            CallFlow AI costs a fraction of hiring a receptionist, and it never gets sick, never
            takes a day off, and never lets a call go to voicemail. For most businesses, it pays
            for itself by capturing just two or three jobs per month that would have otherwise
            slipped through.
          </p>
          <ul className="feature-list">
            <li>Captures revenue from calls you'd normally miss during evenings, weekends or when you're busy</li>
            <li>Saves hours every week by handling repetitive enquiries automatically</li>
            <li>Filters out low value calls so you only speak to serious prospects</li>
            <li>Delivers a professional first impression every single time, no matter when someone calls</li>
            <li>Costs less than minimum wage for a part-time receptionist but works full-time</li>
            <li>Scales with your business without needing to hire, train or manage staff</li>
            <li>Provides data on call patterns, common questions and lead quality to inform your marketing</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to capture every call?</h3>
          <p>
            Book a call to see CallFlow AI in action. We'll show you how it works, answer your
            questions, and set up a demo tailored to your business.
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
