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
          Your complete client management system that organises everything in one place
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
            <Link to="/automation-hub" className="product-card">
              <h4>Automation Hub</h4>
              <p>Your complete automation system that runs the backend of your business for you</p>
            </Link>
          </div>
        </div>

        {/* What it does */}
        <section className="product-section reveal">
          <h2>What it does</h2>
          <p>
            ClientOS is your central command centre for managing client relationships. It brings
            together every conversation, every project and every piece of client information into
            one organised system, so you always know who needs what, when, and where things stand.
          </p>
          <ul className="feature-list">
            <li>Stores complete client profiles including contact details, project history, preferences and notes all in one place</li>
            <li>Tracks every interaction from first enquiry through ongoing work, creating a full timeline for each client</li>
            <li>Organises projects by status, priority and deadline so you can see what needs attention at a glance</li>
            <li>Captures communication from emails, calls and messages, linking everything back to the relevant client</li>
            <li>Provides a visual pipeline showing where each client sits in your sales or delivery process</li>
            <li>Manages documents, contracts and files with proper version control and easy access</li>
            <li>Creates custom views and filters so you can find exactly what you need in seconds</li>
          </ul>
        </section>

        {/* What you get each month */}
        <section className="product-section reveal">
          <h2>What you get each month</h2>
          <p>
            ClientOS is built specifically for your business. We design the system around how you
            work, integrate it with your existing tools, and keep it running smoothly as your
            client base grows and your needs change.
          </p>
          <ul className="feature-list">
            <li>Custom-built client database designed around your specific business model and workflow</li>
            <li>Integration with your calendar, email, invoicing and other critical tools</li>
            <li>Automated client onboarding sequences that collect information and set expectations</li>
            <li>Project templates that create standard workflows for different types of work</li>
            <li>Smart notifications and reminders for follow-ups, deadlines and important milestones</li>
            <li>Reporting dashboard showing client acquisition, project status and revenue metrics</li>
            <li>Regular system updates to add new features, improve workflows and adapt to your evolving needs</li>
            <li>Ongoing training and support for you and your team as the business scales</li>
          </ul>
        </section>

        {/* Why businesses pay for this */}
        <section className="product-section reveal">
          <h2>Why businesses pay for this</h2>
          <p>
            Without ClientOS, most businesses rely on a messy combination of spreadsheets, email
            folders, sticky notes and memory. That approach breaks down as soon as you get busy,
            and it makes it nearly impossible to deliver a consistent client experience.
          </p>
          <ul className="feature-list">
            <li>Eliminates the stress of trying to remember every client detail, deadline and commitment</li>
            <li>Ensures nothing falls through the cracks when you're juggling multiple clients and projects</li>
            <li>Delivers a professional, organised experience that makes clients feel valued and looked after</li>
            <li>Saves hours every week searching for information, chasing updates and piecing together context</li>
            <li>Makes it easy to hand off work to team members without losing important details or context</li>
            <li>Provides clear visibility into what's working, which clients are profitable and where time is being spent</li>
            <li>Scales alongside your business without needing to rebuild systems or migrate data later</li>
          </ul>
        </section>

        {/* Interactive Features Section */}
        <section className="product-section reveal">
          <h2>Built for your business</h2>
          <p>
            ClientOS isn't a one-size-fits-all platform. It's a custom system designed specifically
            for how you work, the clients you serve, and the outcomes you deliver. Every feature,
            view and workflow is tailored to make your life easier.
          </p>
          <div className="feature-list">
            <li>Client segmentation that groups clients by value, status, industry or any criteria that matters to you</li>
            <li>Custom fields and data points that capture exactly the information you need for your specific business</li>
            <li>Flexible workflows that match your actual sales and delivery process, not a generic template</li>
            <li>Integrations with the specific tools you already use, from accounting software to scheduling platforms</li>
            <li>Mobile-friendly access so you can update client details, check project status and respond to queries from anywhere</li>
            <li>Role-based access for team members who need different levels of visibility and editing permissions</li>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to organise your clients?</h3>
          <p>
            Book a call and we'll walk through your current client management process, identify
            what's working and what's not, and show you how ClientOS would transform your workflow.
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
          ClientOS pairs perfectly with CallFlow AI and Automation Hub to create a complete
          business operating system that captures leads, manages relationships and automates the admin.
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
