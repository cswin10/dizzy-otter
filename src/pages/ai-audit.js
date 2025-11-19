import React, { useEffect } from 'react';
import '../styles/products.css';

function AIAudit() {
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
          <i className="fa-solid fa-magnifying-glass-chart"></i>
        </div>
        <h1>Free AI Audit</h1>
        <p className="subtitle">
          30-minute review of your workflows, tools and processes. We identify opportunities where AI and
          automation can save time, reduce costs and increase profit.
        </p>
        <a
          href="https://calendly.com/studio-dizzyotter/30min"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem' }}
        >
          Book your free audit
          <i className="fa-solid fa-calendar-check" style={{ marginLeft: '0.8rem' }}></i>
        </a>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* What happens */}
        <section className="product-section reveal">
          <h2>What happens in an AI audit</h2>
          <p style={{ marginBottom: '2rem' }}>
            We review your current workflows, identify bottlenecks and show you exactly where AI and automation
            can make the biggest impact. You'll leave with clear recommendations and an action plan.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Review your workflows</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We walk through your current processes, tools and pain points. Where are you wasting time?
                What's costing you money?
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Identify opportunities</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We highlight the top 3-5 areas where AI and automation can save hours, reduce errors and
                improve outcomes.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Get actionable recommendations</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                You'll receive clear recommendations prioritised by impact and effort, so you know exactly
                what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* What we look at */}
        <section className="product-section reveal">
          <h2>What we look at</h2>
          <ul className="feature-list">
            <li>Repetitive tasks that could be automated to save hours every week</li>
            <li>Manual data entry between systems that could be connected</li>
            <li>Customer communication that could be handled by AI assistants</li>
            <li>Reporting and dashboards that could be built automatically</li>
            <li>Lead capture and follow-up processes that could be streamlined</li>
            <li>Tools you're using inefficiently or paying for but not maximising</li>
          </ul>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Find your opportunities</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                Most businesses have dozens of opportunities to automate, streamline and optimise. The hard
                part is knowing where to start. That's what we do.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/services5.jpg" alt="AI audit opportunities" />
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="product-section reveal">
          <h2>Who it's for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>
                <i className="fa-solid fa-user-tie" style={{ marginRight: '0.5rem' }}></i>
                Solo founders
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Wearing too many hats and drowning in admin. We help you automate the repetitive work so you
                can focus on growth.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>
                <i className="fa-solid fa-store" style={{ marginRight: '0.5rem' }}></i>
                Local service businesses
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Managing bookings, invoices and customers manually. We show you how to systemise and scale
                without hiring.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>
                <i className="fa-solid fa-users" style={{ marginRight: '0.5rem' }}></i>
                Growing teams
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Processes breaking down as you scale. We identify bottlenecks and build systems that grow
                with you.
              </p>
            </div>
          </div>
        </section>

        {/* What happens after */}
        <section className="product-section reveal">
          <h2>What happens after the audit</h2>
          <p style={{ marginBottom: '2rem' }}>
            After the call, you'll receive a short summary with our recommendations. If you choose to move
            forward, we'll provide a clear quote and build the systems we discussed.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>No obligation</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                The audit is completely free. Use the recommendations however you like, with no pressure to work with us.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Clear pricing</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                If you want us to build the systems, we provide transparent, fixed-price quotes before any work begins.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Fast results</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Most clients start seeing results within the first 14 days thanks to the quick-win plan we provide.
              </p>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="product-section reveal">
          <h2>Investment</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            After the audit, we'll give you a clear quote for any systems you'd like us to build.
          </p>
          <div style={{ background: 'rgba(80,227,194,0.1)', padding: '2rem', borderRadius: '16px', border: '2px solid rgba(80,227,194,0.3)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '1rem' }}>We offer flexible pricing tailored to your needs:</h3>
            <ul className="feature-list" style={{ marginBottom: 0 }}>
              <li>Small automation projects to get you started</li>
              <li>Complete business systems that transform operations</li>
              <li>Ongoing support and management</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to uncover your AI opportunities?</h3>
          <p>
            Book your free audit today and get a clear roadmap for growth.
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

export default AIAudit;
