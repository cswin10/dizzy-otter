import React, { useEffect, useState } from 'react';
import '../styles/products.css';

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
                href="mailto:studio@dizzyotter.com"
                style={{ color: '#50E3C2', textDecoration: 'none', fontWeight: '600' }}
              >
                studio@dizzyotter.com →
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-brands fa-tiktok"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>TikTok</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Watch quick tips and automation ideas on TikTok.
              </p>
              <a
                href="https://www.tiktok.com/@dizzy.otter"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#50E3C2', textDecoration: 'none', fontWeight: '600' }}
              >
                @dizzy.otter →
              </a>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-image">
              <img src="/contact-hero.jpg" alt="Get in touch with Dizzy Otter" />
            </div>
            <div className="showcase-text">
              <h2>Let's talk about your business</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                Whether you're looking for a quick win or a complete transformation, we're here to help.
                Book a free audit and let's explore what's possible.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="product-section reveal">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item" onClick={() => toggleFaq(0)}>
              <div className="faq-question">
                <h3>What is an AI Audit?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 0 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>
                    A free 30-minute review of your workflows, tools and processes. We identify the top opportunities
                    where automation and AI can save you time, reduce costs and increase profit. You'll leave with
                    clear recommendations and a simple action plan.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(1)}>
              <div className="faq-question">
                <h3>How much does an AI Audit cost?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 1 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>
                    Nothing. The AI Audit is completely free. After the call, if you'd like us to implement the
                    systems we recommend, we'll provide a clear quote before any work begins.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(2)}>
              <div className="faq-question">
                <h3>How much do implementation projects cost?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 2 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>
                    Every project is different. We provide transparent, fixed-price quotes after the audit so you know
                    exactly what you're investing in before any work begins. Pricing depends on scope, complexity and
                    the specific tools involved.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(3)}>
              <div className="faq-question">
                <h3>How long does it take to see results?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 3 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>
                    Most clients start seeing results within the first 14 days thanks to the quick-win plan we provide.
                    Larger implementation projects typically take 2–6 weeks depending on complexity.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(4)}>
              <div className="faq-question">
                <h3>Do you offer ongoing support?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 4 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 4 && (
                <div className="faq-answer">
                  <p>
                    Yes. After implementation, many clients choose a monthly retainer for ongoing optimisation, new
                    automations, and reporting. We offer flexible support packages tailored to your needs.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(5)}>
              <div className="faq-question">
                <h3>What tools and platforms do you work with?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 5 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 5 && (
                <div className="faq-answer">
                  <p>
                    We work with a wide range of platforms including Airtable, Notion, Zapier, Make (Integromat), n8n, OpenAI,
                    Google Workspace, Microsoft 365, and many more. We choose the best tools for your specific needs and
                    ensure everything integrates seamlessly with your existing systems.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(6)}>
              <div className="faq-question">
                <h3>Do I need technical knowledge to use the systems you build?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 6 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 6 && (
                <div className="faq-answer">
                  <p>
                    No. We design everything to be simple and intuitive. You don't need any technical knowledge or coding
                    skills. We provide full training, clear documentation, and ongoing support to ensure you're comfortable
                    using the systems we build.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(7)}>
              <div className="faq-question">
                <h3>What industries do you work with?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 7 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 7 && (
                <div className="faq-answer">
                  <p>
                    We work with a wide range of industries including professional services, local service businesses,
                    consultancies, agencies, trades, healthcare, e-commerce, and more. If your business involves repetitive
                    tasks, client management, or manual processes, we can help.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(8)}>
              <div className="faq-question">
                <h3>Can you integrate with my existing tools?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 8 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 8 && (
                <div className="faq-answer">
                  <p>
                    Yes. We specialize in connecting your existing tools and automating workflows between them. Whether
                    you use CRMs, accounting software, project management tools, or custom systems, we can integrate them
                    to work together seamlessly.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(9)}>
              <div className="faq-question">
                <h3>What happens if I'm not happy with the work?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 9 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 9 && (
                <div className="faq-answer">
                  <p>
                    We work iteratively and keep you involved throughout the process. You'll see progress regularly and
                    have opportunities to provide feedback. We don't consider a project complete until you're satisfied
                    with the results. Our goal is to deliver systems that genuinely transform your business.
                  </p>
                </div>
              )}
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
