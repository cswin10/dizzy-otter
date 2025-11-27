import React, { useEffect } from 'react';
import '../styles/products.css';

function Projects() {
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

  const projects = [
    {
      name: 'HelloNavi',
      url: 'https://www.hellonavi.io/',
      description: 'A revolutionary navigation platform delivering seamless user experiences through intuitive design and cutting-edge technology.',
      icon: 'fa-solid fa-compass',
      color: '#50E3C2'
    },
    {
      name: 'GoSynq',
      url: 'https://gosynq.io/',
      description: 'Powerful synchronization software that keeps your data connected across platforms with lightning-fast performance.',
      icon: 'fa-solid fa-arrows-rotate',
      color: '#2979FF'
    },
    {
      name: 'Brickie',
      url: 'https://brickie-web.vercel.app/',
      description: 'A modern web application built with precision, showcasing beautiful interfaces and robust functionality.',
      icon: 'fa-solid fa-cubes',
      color: '#FF6B6B'
    }
  ];

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="icon-wrapper">
          <i className="fa-solid fa-rocket"></i>
        </div>
        <h1>Our Work</h1>
        <p className="subtitle">
          Beautiful software, built at unthinkable speed. Explore some of our recent projects
          that showcase what's possible when craft meets velocity.
        </p>
      </section>

      {/* Main Content */}
      <div className="product-content">

        {/* Projects Grid */}
        <section className="product-section reveal">
          <h2>
            <i className="fa-solid fa-folder-open" style={{ marginRight: '0.8rem', color: '#50E3C2' }}></i>
            Recent Projects
          </h2>
          <div className="projects-showcase-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-showcase-card"
              >
                <div className="project-card-glow" style={{ '--glow-color': project.color }}></div>
                <div className="project-card-content">
                  <div className="project-icon" style={{ color: project.color }}>
                    <i className={project.icon}></i>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-link">
                    View Project <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '0.5rem' }}></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* What We Build */}
        <section className="product-section reveal">
          <h2>What We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-laptop-code" style={{ marginRight: '0.5rem' }}></i>
                Web Applications
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Full-stack web applications with stunning interfaces, seamless performance,
                and scalable architecture. From startups to enterprise.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-mobile-screen" style={{ marginRight: '0.5rem' }}></i>
                Mobile Apps
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Native and cross-platform mobile applications that feel incredible
                to use. iOS, Android, or both.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#50E3C2', marginBottom: '0.8rem' }}>
                <i className="fa-solid fa-cloud" style={{ marginRight: '0.5rem' }}></i>
                SaaS Products
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6' }}>
                Complete software-as-a-service solutions built from the ground up.
                Authentication, billing, dashboards, and everything in between.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="product-section reveal">
          <div className="image-showcase-grid">
            <div className="showcase-text">
              <h2>Craft Meets Speed</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                We don't believe you have to choose between beautiful and fast. Every project
                we deliver is built with meticulous attention to detail, at a pace that
                seems impossible.
              </p>
            </div>
            <div className="showcase-image">
              <img src="/services2.jpg" alt="Custom software development" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta reveal">
          <h3>Have a project in mind?</h3>
          <p>
            Let's talk about what you're building. Book a free consultation and discover
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

export default Projects;
