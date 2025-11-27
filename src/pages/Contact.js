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
          Ready to build something incredible? Book a free consultation or send us a message.
          We'll get back to you within 24 hours.
        </p>
        <a
          href="https://calendly.com/studio-dizzyotter/30min"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem' }}
        >
          Book a free consultation
          <i className="fa-solid fa-calendar-check" style={{ marginLeft: '0.8rem' }}></i>
        </a>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* Contact Methods */}
        <section className="product-section reveal">
          <h2>How to Reach Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#50E3C2', marginBottom: '1rem' }}>
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Book a Call</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Free 30-minute consultation to discuss your project and explore what's possible.
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
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Email Us</h3>
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
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Call Us</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                Available Monday to Friday, 8am - 6pm.
              </p>
              <a
                href="tel:+441392542251"
                style={{ color: '#50E3C2', textDecoration: 'none', fontWeight: '600' }}
              >
                01392 542251 →
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
              <h2>Let's Talk About Your Vision</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                Whether you have a detailed spec or just an idea on a napkin, we're here to help.
                Book a free consultation and let's explore what's possible.
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
                <h3>What happens in a free consultation?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 0 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>
                    We'll spend 30 minutes learning about your project, understanding your goals, and exploring
                    how we can help. You'll leave with a clear picture of what's possible and what it would
                    take to make it happen. No pressure, no obligations.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(1)}>
              <div className="faq-question">
                <h3>How long does a typical project take?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 1 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>
                    It depends on the scope, but we're known for moving fast. Simple projects can launch in
                    weeks. Larger builds typically take 1-3 months. We'll give you a realistic timeline
                    after understanding your specific needs.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(2)}>
              <div className="faq-question">
                <h3>What technologies do you work with?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 2 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>
                    We're technology-agnostic and choose the best tools for each project. That said, we're
                    particularly experienced with React, Node.js, Python, TypeScript, and modern cloud
                    infrastructure. For mobile, we work with React Native and native iOS/Android development.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(3)}>
              <div className="faq-question">
                <h3>Do you work with startups or established businesses?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 3 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>
                    Both! We've built MVPs for early-stage startups and complex systems for established
                    companies. What matters most is that you're excited about what you're building and
                    ready to move fast.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(4)}>
              <div className="faq-question">
                <h3>Do you offer ongoing support after launch?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 4 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 4 && (
                <div className="faq-answer">
                  <p>
                    Absolutely. We don't just build and disappear. Many of our clients choose to work with
                    us on an ongoing basis for maintenance, new features, and iteration. We're in it for
                    the long haul.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(5)}>
              <div className="faq-question">
                <h3>Can you work with our existing team?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 5 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 5 && (
                <div className="faq-answer">
                  <p>
                    Yes! We frequently collaborate with in-house teams, whether that means augmenting your
                    development capacity or bringing specialized expertise to a specific project. We're
                    flexible and easy to work with.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item" onClick={() => toggleFaq(6)}>
              <div className="faq-question">
                <h3>Where are you based?</h3>
                <i className={`fa-solid fa-chevron-${openFaq === 6 ? 'up' : 'down'}`}></i>
              </div>
              {openFaq === 6 && (
                <div className="faq-answer">
                  <p>
                    We're based in Exeter, UK, but we work with clients across the UK and internationally.
                    Remote collaboration is second nature to us. We're just as effective working across
                    time zones as we are face-to-face.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to Start?</h3>
          <p>
            Book a free consultation and let's bring your vision to life.
          </p>
          <a
            href="https://calendly.com/studio-dizzyotter/30min"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free consultation
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.8rem' }}></i>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Contact;
