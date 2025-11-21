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
        <h1>Our Products & Services</h1>
        <p className="subtitle">
          As a software and automation company in Exeter, we create bespoke SaaS products, SEO-optimized websites,
          and custom app development solutions. Every business is different – these are examples of the systems we design.
        </p>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* Core Services */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-code" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Software Development Services
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Professional software and automation services for growing businesses in Exeter and beyond.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(80, 227, 194, 0.08)', borderRadius: '12px', border: '1px solid rgba(80, 227, 194, 0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-solid fa-laptop-code" style={{ marginRight: '0.5rem' }}></i>
                Bespoke SaaS Products
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Custom software-as-a-service solutions built specifically for your business. From client management
                systems to specialized business tools, we create scalable SaaS products that grow with you.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'rgba(80, 227, 194, 0.08)', borderRadius: '12px', border: '1px solid rgba(80, 227, 194, 0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-solid fa-globe" style={{ marginRight: '0.5rem' }}></i>
                Websites including SEO
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Professional websites optimized for search engines and conversions. We build fast, responsive sites
                with built-in SEO best practices to help your business get found online.
              </p>
            </div>

            <div style={{ padding: '2rem', background: 'rgba(80, 227, 194, 0.08)', borderRadius: '12px', border: '1px solid rgba(80, 227, 194, 0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-solid fa-mobile-screen" style={{ marginRight: '0.5rem' }}></i>
                App Development
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Custom mobile and web applications tailored to your specific needs. We develop intuitive, powerful
                apps that solve real business problems and delight your users.
              </p>
            </div>
          </div>
        </section>

        {/* Subscription Products */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-box-open" style={{ marginRight: '0.8rem', color: '#2979FF' }}></i>
            Our Products
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Ready-to-use software products including AI Audit, managed SaaS solutions, and custom automation systems.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link to="/ai-audit" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>AI Audit</h3>
              <p>Free 30-minute review of your workflows. We identify opportunities where AI and automation can save time, reduce costs and increase profit.</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>Free consultation →</div>
            </Link>

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

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-image">
              <img src="/services-hero.jpg" alt="Custom AI and automation solutions" />
            </div>
            <div className="showcase-text">
              <h2>Built for your business</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                Every system we build is designed around how you work. We integrate with your existing tools,
                automate your specific workflows and deliver solutions that save time from day one.
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
