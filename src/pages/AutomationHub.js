import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function AutomationHub() {
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
          <i className="fa-solid fa-gears"></i>
        </div>
        <h1>Automation Hub</h1>
        <p className="subtitle">
          Your complete automation system that runs the backend of your business for you
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
              <p>Your complete client management system that organises everything in one place</p>
            </Link>
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
            Automation Hub is your business operating system. It replaces the chaos of spreadsheets,
            sticky notes and scattered information with one organised system that handles the
            repetitive admin automatically, so you can focus on doing the work that actually makes money.
          </p>
          <ul className="feature-list">
            <li>Captures every lead from your website, phone calls and enquiry forms into one central place</li>
            <li>Stores all client details, project history and communication in a simple CRM or Notion workspace</li>
            <li>Moves leads through your sales pipeline automatically, from new enquiry to quoted, won or lost</li>
            <li>Creates tasks and reminders when certain events happen, like follow-ups after quotes or prep work before jobs</li>
            <li>Sends quote templates, invoice reminders and payment links without you lifting a finger</li>
            <li>Tracks overdue invoices and sends polite follow-up messages automatically</li>
            <li>Gives you one dashboard to see upcoming work, outstanding payments and active clients at a glance</li>
          </ul>
        </section>

        {/* What you get each month */}
        <section className="product-section reveal">
          <h2>What you get each month</h2>
          <p>
            Automation Hub is built around your specific workflows. We map out how your business
            runs, automate the repetitive parts, and make sure the system keeps working smoothly
            as your needs evolve.
          </p>
          <ul className="feature-list">
            <li>Custom CRM or Notion setup tailored to how your business actually operates</li>
            <li>Automated workflows that move leads through your pipeline without manual updates</li>
            <li>Integration with your existing tools like calendars, email, invoicing and payment systems</li>
            <li>Task automation that creates reminders, sends messages and updates records based on triggers</li>
            <li>Template library for quotes, invoices, confirmations and follow-up messages</li>
            <li>Dashboard that shows work scheduled, invoices pending and client status in real-time</li>
            <li>Monthly workflow reviews to add new automations and optimise existing processes</li>
            <li>Ongoing support to fix issues, add features and train your team as needed</li>
          </ul>
        </section>

        {/* Why it matters */}
        <section className="product-section reveal">
          <h2>Why it matters</h2>
          <p>
            Most small businesses lose hours every week to repetitive admin, chasing payments,
            updating spreadsheets and trying to remember what needs doing next. Automation Hub
            eliminates that waste, saves time and ensures nothing falls through the cracks.
          </p>
          <ul className="feature-list">
            <li>Saves hours every week by automating repetitive tasks like follow-ups, invoicing and status updates</li>
            <li>Reduces stress by making sure nothing gets forgotten or missed in the chaos of day-to-day work</li>
            <li>Improves cash flow by automatically chasing overdue invoices and sending payment reminders</li>
            <li>Organises scattered information into one system so you always know what's happening across the business</li>
            <li>Scales with you without needing to hire admin staff or waste time on manual processes</li>
            <li>Provides clarity on what's working, what's pending and where your time is best spent</li>
            <li>Frees you up to focus on delivering great work instead of drowning in paperwork</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to automate your workflows?</h3>
          <p>
            Book a call and we'll map out your current processes, identify what can be automated,
            and show you exactly how Automation Hub would work for your business.
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
          Most clients begin with one product and add the others later as their business grows.
          Automation Hub works perfectly alongside CallFlow AI to create a seamless system that
          captures leads and manages them from first contact through to final payment.
        </p>
        <Link to="/contact" className="cta-button">
          Book a call
          <i className="fa-solid fa-calendar-check" style={{ marginLeft: '0.8rem' }}></i>
        </Link>
      </section>
    </div>
  );
}

export default AutomationHub;
