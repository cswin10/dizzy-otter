import React, { useEffect } from 'react';
import '../styles/products.css';

function About() {
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
          <i className="fa-solid fa-bolt"></i>
        </div>
        <h1>About Dizzy Otter</h1>
        <p className="subtitle">
          We're a software studio based in Exeter, UK. We build impossible tech at unthinkable speed.
          Beautiful software that works flawlessly and ships fast.
        </p>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* Who we are */}
        <section className="product-section reveal">
          <h2>Who We Are</h2>
          <p>
            Dizzy Otter is a premier software studio. We don't do templates. We don't do "good enough."
            We build custom software that's beautiful, powerful, and built to last.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            Our team lives at the intersection of design and engineering. We believe software should feel
            like magic. Intuitive, fast, and delightful to use. And we believe it shouldn't take forever
            to build.
          </p>
        </section>

        {/* What drives us */}
        <section className="product-section reveal">
          <h2>What Drives Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Craft Without Compromise</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                Every line of code matters. Every pixel is intentional. We build software that we're proud of, and that our clients love to show off.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Speed as a Superpower</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We've mastered the art of moving fast without breaking things. What takes others months, we deliver in weeks.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Partnership Over Projects</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                We're not vendors. We're partners. We care about your success as much as you do, and we're here for the long haul.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Built for Impact</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                We've shipped software for startups, scale ups, and established businesses. Every project
                pushes us to do our best work, because we know it matters.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/about-hero.jpg" alt="Software studio team" />
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="product-section reveal">
          <h2>Our Approach</h2>
          <ul className="feature-list">
            <li>We start by understanding your vision. Not just the features, but the feeling you want to create</li>
            <li>We design and prototype rapidly, so you can see and feel the product before it's built</li>
            <li>We build with modern tools and clean architecture that scales</li>
            <li>We ship iteratively, so you're never waiting months to see progress</li>
            <li>We stay engaged after launch, because software is never really "done"</li>
          </ul>
        </section>

        {/* Location */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-location-dot" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Based in Exeter, UK
          </h2>
          <p>
            We're proud to call Exeter home. From our base in Devon, we work with clients across the UK
            and beyond. Whether you're local or remote, we bring the same energy, craft, and commitment
            to every project.
          </p>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Let's Build Something Incredible</h3>
          <p>
            Got a project in mind? We'd love to hear about it. Book a free consultation and let's explore
            what's possible.
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

export default About;
