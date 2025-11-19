import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function Services() {
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
          <i className="fa-solid fa-screwdriver-wrench"></i>
        </div>
        <h1>Our Products</h1>
        <p className="subtitle">
          Every business is different. These are examples of the systems we design after an AI Audit.
        </p>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* Subscription Products */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-box-open" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Subscription Products
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Managed services that run continuously, designed to save time, capture revenue and automate operations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link to="/clientos" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>ClientOS</h3>
              <p>Complete client management and automation system. Manage clients, automate workflows and track everything in one place.</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>From £499/month →</div>
            </Link>

            <Link to="/callflow-ai" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>CallFlow AI</h3>
              <p>AI call assistant that answers calls 24/7, books appointments, collects details and filters time wasters.</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>From £499/month →</div>
            </Link>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-wand-magic-sparkles" style={{ marginRight: '0.8rem', color: '#2979FF' }}></i>
            Custom Solutions
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Bespoke systems built for your specific needs, workflows and tools. Pricing depends on scope and complexity.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-robot" style={{ marginRight: '0.5rem' }}></i>
                AI Assistants & Bots
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Custom AI assistants, chatbots and intelligent agents that integrate with your systems and handle specific tasks.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-diagram-project" style={{ marginRight: '0.5rem' }}></i>
                Automation Workflows
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Connect tools, automate repetitive tasks and build workflows that save hours using platforms like Zapier, n8n and Make.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-chart-mixed" style={{ marginRight: '0.5rem' }}></i>
                Dashboards & Reporting
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Real-time dashboards built with Airtable, Notion or custom solutions that give you visibility into your business.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-database" style={{ marginRight: '0.5rem' }}></i>
                CRM & Database Systems
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Custom CRM and database solutions using Airtable, Notion or other platforms tailored to your workflow.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-plug" style={{ marginRight: '0.5rem' }}></i>
                Tool Integrations
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Connect your existing tools and platforms to work together seamlessly, eliminating manual data entry.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="product-section reveal">
          <h2>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>1</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Free AI Audit</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                30-minute review of your workflows. We identify opportunities and provide actionable recommendations.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>2</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Clear proposal</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Fixed-price quote with clear deliverables and timelines. No surprises, no hidden costs.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>3</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Build & deliver</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                We design, build and implement the system. You get training, documentation and ongoing support.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Not sure what you need?</h3>
          <p>
            Book a free AI audit. We'll review your workflows, identify opportunities and recommend the
            best solution for your business.
          </p>
          <Link to="/ai-audit" className="cta-button">
            Book your free audit
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.8rem' }}></i>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Services;
