import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function Home() {
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
      <section className="product-hero hero-home">
        <h1>Dizzy Otter</h1>
        <p className="tagline">Impossible tech at unthinkable speed</p>
        <p className="subtitle">
          We're a software studio that builds beautiful, powerful software.
          From concept to launch, we craft digital experiences that feel like magic.
        </p>
        <a
          href="https://calendly.com/studio-dizzyotter/30min"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem' }}
        >
          Book a free consultation
          <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.8rem' }}></i>
        </a>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* What we do */}
        <section className="product-section reveal">
          <h2>What We Build</h2>
          <p>
            We're the studio you call when you need software that doesn't exist yet.
            Web apps, mobile apps, SaaS products — if you can dream it, we can build it.
            And we'll do it faster than you thought possible.
          </p>
        </section>

        {/* Featured Work */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-sparkles" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Recent Work
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <a href="https://www.hellonavi.io/" target="_blank" rel="noopener noreferrer" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#50E3C2' }}>
                <i className="fa-solid fa-compass"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>HelloNavi</h3>
              <p>A revolutionary navigation platform with intuitive design and seamless user experience.</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>View project →</div>
            </a>

            <a href="https://gosynq.io/" target="_blank" rel="noopener noreferrer" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2979FF' }}>
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>GoSynq</h3>
              <p>Powerful synchronization software that keeps your data connected across platforms.</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>View project →</div>
            </a>

            <a href="https://brickie-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="product-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#FF6B6B' }}>
                <i className="fa-solid fa-cubes"></i>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>Brickie</h3>
              <p>A modern web application showcasing beautiful interfaces and robust functionality.</p>
              <div style={{ marginTop: '1.5rem', color: '#50E3C2', fontWeight: '600' }}>View project →</div>
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/projects" className="cta-button" style={{ background: 'transparent', border: '2px solid #50E3C2', color: '#50E3C2' }}>
              View all projects
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.8rem' }}></i>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-code" style={{ marginRight: '0.8rem', color: '#2979FF' }}></i>
            What We Do
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-laptop-code" style={{ marginRight: '0.5rem' }}></i>
                Web Applications
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Full-stack web applications with stunning interfaces and seamless performance.
                React, Node, Python — whatever the tech, we've mastered it.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-mobile-screen" style={{ marginRight: '0.5rem' }}></i>
                Mobile Apps
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Native and cross-platform mobile apps that feel incredible to use.
                iOS, Android, or both — we deliver pixel-perfect experiences.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-cloud" style={{ marginRight: '0.5rem' }}></i>
                SaaS Products
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Complete software-as-a-service solutions from the ground up. Authentication,
                billing, dashboards — everything you need to launch and scale.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Built Different</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                We're not an agency. We're a studio. That means every project gets our full attention,
                our best thinking, and our relentless drive to build something exceptional.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/services2.jpg" alt="Custom software development" />
            </div>
          </div>
        </section>

        {/* Why Dizzy Otter */}
        <section className="product-section reveal">
          <h2>Why Dizzy Otter</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Unmatched Speed</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                We deliver in weeks what others take months to build. No bloat, no bureaucracy — just beautiful software, fast.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>Obsessive Craft</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Every pixel matters. Every interaction counts. We sweat the details so your users don't have to.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#50E3C2', marginBottom: '0.8rem' }}>True Partnership</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                We don't just build and disappear. We're in it with you — from first concept to launch and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-quote-left" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            What Our Clients Say
          </h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Dizzy Otter made the process easy, handling all the technical details and delivering a fantastic result. I highly recommend them for small businesses."
              </p>
              <div className="testimonial-author">
                <strong>Paul Streeter</strong>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Dizzy Otter took the time to understand our vision and delivered a sleek, user-friendly system that exceeded our expectations."
              </p>
              <div className="testimonial-author">
                <strong>Jo Marshall</strong>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Working with Dizzy Otter was a dream. They brought creativity, efficiency, and flair to the project. Highly recommended."
              </p>
              <div className="testimonial-author">
                <strong>M.J Powell</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Ready to build something incredible?</h3>
          <p>
            Book a free consultation. We'll talk about your vision and show you what's possible.
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

export default Home;
