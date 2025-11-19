import React, { useEffect } from 'react';
import '../styles/products.css';

function Contact() {
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
          <i className="fa-solid fa-comments"></i>
        </div>
        <h1>Get in Touch</h1>
        <p className="subtitle">
          Book a free 30-minute AI audit or send us a message. We'll get back to you within 24 hours.
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

        {/* Contact Methods */}
        <section className="product-section reveal">
          <h2>How to reach us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Book a call</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Free 30-minute AI audit to review your workflows and identify opportunities.
              </p>
              <a
                href="https://calendly.com/studio-dizzyotter/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#50E3C2', textDecoration: 'none', fontWeight: '600' }}
              >
                Schedule now →
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Email us</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Send us a message and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@dizzyotter.co.uk"
                style={{ color: '#50E3C2', textDecoration: 'none', fontWeight: '600' }}
              >
                hello@dizzyotter.co.uk →
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Follow us</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Connect with us on LinkedIn for updates, tips and case studies.
              </p>
              <a
                href="https://www.linkedin.com/company/dizzyotter/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#50E3C2', textDecoration: 'none', fontWeight: '600' }}
              >
                Follow us →
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="product-section reveal">
          <h2>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>What is an AI Audit?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                A free 30-minute review of your workflows, tools and processes. We identify the top opportunities
                where automation and AI can save you time, reduce costs and increase profit. You'll leave with
                clear recommendations and a simple action plan.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>How much does an AI Audit cost?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                Nothing. The AI Audit is completely free. After the call, if you'd like us to implement the
                systems we recommend, we'll provide a clear quote before any work begins.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>How much do implementation projects cost?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                Every project is different. We provide transparent, fixed-price quotes after the audit so you know
                exactly what you're investing in before any work begins. Pricing depends on scope, complexity and
                the specific tools involved.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>How long does it take to see results?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                Most clients start seeing results within the first 14 days thanks to the quick-win plan we provide.
                Larger implementation projects typically take 2–6 weeks depending on complexity.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.5rem' }}>Do you offer ongoing support?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                Yes. After implementation, many clients choose a monthly retainer for ongoing optimisation, new
                automations, and reporting. We offer flexible support packages tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Still have questions?</h3>
          <p>
            Book a free audit and we'll answer everything. No pressure, no obligations.
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

export default Contact;
