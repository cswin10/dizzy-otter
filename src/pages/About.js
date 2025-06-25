import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/about.css';

// Scroll to top on route change
function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}

const aboutImages = ['/about1.jpg', '/about2.jpg', '/about3.jpg', '/about4.jpg', '/about5.jpg'];

const About = () => {
  useScrollToTop();
  useScrollReveal();

  const scrollToNextSection = () => {
    const hero = document.querySelector('.about-hero-section');
    if (hero) {
      const next = hero.nextElementSibling;
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="about-page" tabIndex={-1} aria-label="About Page">
      {/* Hero Section - no reveal, no inline style */}
      <section
        className="about-hero-section"
        style={{
          background: "linear-gradient(rgba(26,31,54,0.18), rgba(26,31,54,0.18)), url('/about-hero.jpg') center/cover no-repeat"
        }}
      >
        <div className="about-hero-overlay reveal">
          <h1 className="about-hero-title">
            About Dizzy Otter
          </h1>
          <p className="about-hero-subtitle">
            Turning ideas into powerful AI powered systems, automation tools, and smart websites that help small businesses grow.
          </p>
        </div>
        <div
          className="scroll-down-arrow"
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          style={{ cursor: 'pointer' }}
          onClick={scrollToNextSection}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToNextSection(); }}
        >
          <span>&#x25bc;</span>
        </div>
      </section>
      {/* Fun Fact Card */}
      <div className="about-funfact reveal">
        <span className="sparkle">✨</span>
        {'  Even simple automations can save businesses 5–10 hours a week, we build systems that free up your time so you can grow. '}
        <span className="sparkle">✨</span>
      </div>
      {/* About Page Content */}
      <section className="about-section about-story reveal">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Dizzy Otter was founded in late 2024 by Charlie Swinhoe, a freelance developer with a passion for helping small businesses succeed through technology. What started as a web design service focused on sleek, minimalist sites has grown into a full service AI systems company.</p>
          <p>Today, Dizzy Otter builds intelligent digital solutions that go beyond design. We combine automation, AI tools, and seamless integrations to create systems that work for you. From the start, our goal has been to take the stress out of technology and make it work harder for small business owners.</p>
          <p>Whether you need a lead capture system, custom AI assistant, or complete automation workflow, we design solutions that save time, reduce errors, and free you up to focus on what you do best.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[0]} alt="Dizzy Otter founder and story" className="about-img reveal" loading="lazy" />
          {/* Animated Otter SVG */}
          <svg className="otter-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="40" cy="50" rx="28" ry="18" fill="#2979FF" opacity="0.13" />
            <ellipse cx="40" cy="38" rx="18" ry="24" fill="#50E3C2" opacity="0.22" />
            <ellipse cx="40" cy="38" rx="13" ry="16" fill="#2979FF" opacity="0.32" />
            <ellipse cx="40" cy="38" rx="7" ry="8" fill="#2979FF" opacity="0.7" />
            <circle cx="40" cy="38" r="4.5" fill="#fff" stroke="#2979FF" strokeWidth="2" />
          </svg>
        </div>
      </section>
      <section className="about-section about-experience reveal">
        <div className="about-content">
          <h2>Our Experience</h2>
          <p>We have had the privilege of working with a wide range of businesses from solo entrepreneurs and local service providers to multi million pound organisations. Our work includes everything from simple lead capture websites to fully integrated systems with dashboards, automation workflows, AI powered tools, and custom bots.</p>
          <p>Here are just a few of the industries we have served:</p>
          <details className="about-industries-dropdown">
            <summary>Industries Served</summary>
            <ul className="about-industries">
              <li>Life coaches and consultants</li>
              <li>Authors and creatives</li>
              <li>Trades and repair services</li>
              <li>E commerce startups</li>
              <li>Professional services firms</li>
            </ul>
          </details>
          <p>No matter the size of the business, our focus is always the same. We build solutions that work and deliver results.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[2]} alt="Experience and industries served" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-mission reveal">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>Our mission is to help small businesses harness the power of AI and automation without the overwhelm. We believe in creating systems that are practical, powerful, and easy to use. Our tools work quietly in the background to move your business forward.</p>
          <p>We are here to make smart technology accessible so you can stay focused on growing your business while we handle the technical side.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[1]} alt="Mission and values" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-why reveal">
        <div className="about-content">
          <h2>Why Choose Dizzy Otter</h2>
          <ul className="about-why-list">
            <li><b>Personal service.</b> You work directly with the expert building your system. No middlemen, no confusion.</li>
            <li><b>Tailored solutions.</b> Every system is custom built to fit your goals, tools, and workflows.</li>
            <li><b>Clarity over complexity.</b> We explain what we are building in plain language so you stay in control.</li>
            <li><b>Results driven.</b> We design systems that save you time, reduce errors, and help you grow.</li>
          </ul>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[3]} alt="Why choose Dizzy Otter" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-different reveal">
        <div className="about-content">
          <h2>What Makes Us Different</h2>
          <p>Dizzy Otter is not just a web design studio or automation agency. We sit at the intersection of design, AI, and automation. We build solutions that are as functional as they are beautiful. We do not believe in one size fits all packages. Instead, we listen, plan, and build tools that match your vision and help you scale.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[4]} alt="What makes Dizzy Otter different" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-cta reveal">
        <div className="about-cta-content">
          <h2>Let’s build something smart together</h2>
          <a href="/contact" className="about-cta-btn" aria-label="Book a Free Consultation">Book a Free Consultation</a>
        </div>
      </section>
    </main>
  );
};

export default About;
