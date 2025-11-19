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
            automation and backend operations into one organised system. Instead of juggling spreadsheets,
            sticky notes and scattered tools, you get a single platform that manages clients, automates
            the admin and gives you complete visibility over your business.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            It captures every lead, tracks every client, automates repetitive tasks and shows you exactly
            what needs doing, what's pending and where your business stands at any moment.
          </p>
        </section>

        {/* Section 1: Clients */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-users" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Clients
          </h2>
          <p>
            Everything you need to know about your clients lives in one place. No more searching through
            emails, digging through folders or trying to remember what was discussed three months ago.
          </p>
          <ul className="feature-list">
            <li>Complete client profiles with contact details, project history, preferences and notes all stored together</li>
            <li>Full timeline of every interaction, email, call and meeting linked back to each client</li>
            <li>Visual pipeline showing exactly where each client sits in your sales or delivery process</li>
            <li>Project organisation by status, priority and deadline so you always know what needs attention</li>
            <li>Document management with version control, contracts, briefs and files accessible instantly</li>
            <li>Custom fields and tags to capture the specific information that matters for your business</li>
            <li>Client segmentation by value, industry, status or any criteria you choose</li>
          </ul>
        </section>

        {/* Section 2: Workflows & Automation */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-gears" style={{ marginRight: '0.8rem', color: '#2979FF' }}></i>
            Workflows & Automation
          </h2>
          <p>
            The repetitive tasks that eat up hours every week run automatically. ClientOS handles the admin,
            sends the reminders, moves things through your pipeline and ensures nothing falls through the cracks.
          </p>
          <ul className="feature-list">
            <li>Automated lead capture from your website, phone calls and enquiry forms into one central database</li>
            <li>Pipeline automation that moves leads from new enquiry through quoted, won or lost without manual updates</li>
            <li>Task creation triggered by events, like follow-ups after quotes or prep work before jobs start</li>
            <li>Quote and invoice templates that get sent automatically based on your workflow rules</li>
            <li>Payment reminders for overdue invoices sent politely and persistently without you thinking about it</li>
            <li>Follow-up sequences for nurturing leads, checking in after delivery or requesting reviews</li>
            <li>Confirmation messages, booking details and next step emails sent at exactly the right time</li>
            <li>Integration with your calendar, email, accounting software and existing tools</li>
          </ul>
        </section>

        {/* Section 3: Reporting & Clarity */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-chart-line" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Reporting & Clarity
          </h2>
          <p>
            Know exactly what's happening across your business without digging through files or building
            spreadsheets. ClientOS gives you clear visibility into work, clients, revenue and what needs doing next.
          </p>
          <ul className="feature-list">
            <li>Dashboard showing upcoming work, outstanding payments and active clients at a glance</li>
            <li>Revenue tracking with clear visibility into what's invoiced, paid and still pending</li>
            <li>Pipeline reports showing where leads are getting stuck and which sources convert best</li>
            <li>Task overview so you can see what needs doing today, this week and beyond</li>
            <li>Client performance metrics showing who's profitable, who's high maintenance and where time goes</li>
            <li>Custom views and filters to slice your data exactly how you need it</li>
            <li>Mobile access so you can check status, update records and respond to queries from anywhere</li>
          </ul>
        </section>

        {/* What you get each month */}
        <section className="product-section reveal">
          <h2>What you get each month</h2>
          <p>
            ClientOS is built specifically for your business. We design the system around how you work,
            automate the workflows that waste your time, and keep everything running smoothly as your
            business grows.
          </p>
          <ul className="feature-list">
            <li>Custom-built system designed around your specific business model, clients and workflows</li>
            <li>Full integration with your existing tools including calendar, email, invoicing and payment platforms</li>
            <li>Automated workflows for lead capture, client onboarding, quote generation and invoice management</li>
            <li>Pipeline automation that moves clients through your process without manual intervention</li>
            <li>Template library for quotes, invoices, confirmations and all your standard communications</li>
            <li>Reporting dashboard with real-time visibility into clients, projects, tasks and revenue</li>
            <li>Mobile-friendly access so your team can work from anywhere</li>
            <li>Monthly workflow reviews to add new automations, optimise processes and adapt to changing needs</li>
            <li>Ongoing support, training and updates as your business scales</li>
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
            <li>Saves hours every week by automating repetitive tasks, reminders, follow-ups and status updates</li>
            <li>Captures more revenue by ensuring nothing gets forgotten, no invoices go unpaid and no leads fall through</li>
            <li>Reduces stress by replacing scattered notes, mental checklists and constant firefighting with organised clarity</li>
            <li>Improves cash flow with automatic invoice tracking, payment reminders and overdue follow-ups</li>
            <li>Delivers consistent client experience because everyone gets the same professional treatment every time</li>
            <li>Scales with your business without needing to hire admin staff or rebuild systems later</li>
            <li>Provides visibility into what's working, which clients are profitable and where time actually goes</li>
            <li>Makes it easy to onboard team members without losing context or critical client information</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to organise your business?</h3>
          <p>
            Book a call and we'll walk through your current workflow, identify what's costing you time
            and money, and show you exactly how ClientOS would transform your operations.
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
          ClientOS pairs perfectly with CallFlow AI to create a complete system that captures
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

export default ClientOS;
