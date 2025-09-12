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

  // Bulletproof scroll to next section for hero arrow
  const scrollToNextSection = e => {
    const arrow = e?.target?.closest('.scroll-down-arrow');
    const hero = arrow?.closest('section, .about-hero-section');
    if (hero) {
      const sections = Array.from(document.querySelectorAll('section')).filter(s => s.offsetParent !== null);
      const idx = sections.indexOf(hero);
      if (idx !== -1 && idx < sections.length - 1) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
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
          <h1 className="about-hero-title">About Dizzy Otter</h1>
          <p className="about-hero-subtitle">Smarter Systems for Growing Businesses</p>
        </div>
        <div
          className="scroll-down-arrow"
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          style={{ cursor: 'pointer' }}
          onClick={e => scrollToNextSection(e)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToNextSection(e); }}
        >
          <span>&#x25bc;</span>
        </div>
      </section>
      {/* Fun Fact Card */}
      <div className="about-funfact reveal">
        <span className="sparkle">✨</span>
        {'  Even simple automations can save businesses 5 to 10 hours a week. At Dizzy Otter, we design AI-powered systems that give you that time back, so you can focus on growth, not admin. ✨'}
      </div>
      {/* About Page Content */}
      <section className="about-section about-story reveal">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Dizzy Otter was founded by Charlie Swinhoe with one clear goal: to help businesses harness the power of AI and automation without the overwhelm.</p>
          <p>What began as a freelance project quickly evolved into a consultancy focused on creating intelligent systems that cut wasted time, capture more opportunities, and make daily operations smoother.</p>
          <p>Today, Dizzy Otter runs as an AI consultancy. We don’t just build tools, we partner with you to audit your workflows, uncover your biggest opportunities, and deliver custom solutions that move your business forward.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[0]} alt="Dizzy Otter founder and story" className="about-img reveal" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-experience reveal">
        <div className="about-content">
          <h2>Our Experience</h2>
          <p>We’ve worked with businesses of all sizes, from solo entrepreneurs and local service providers to multi-million pound organisations.</p>
          <p>Our projects include:</p>
          <ul>
            <li>Lead capture and client onboarding systems</li>
            <li>Custom AI assistants and chatbots</li>
            <li>End-to-end automation workflows</li>
            <li>Integrated dashboards and reporting tools</li>
          </ul>
          <p>No matter the industry, our focus is always the same, design systems that work, save time, and deliver measurable results.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[2]} alt="Experience and industries served" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-mission reveal">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>Our mission is simple, to make AI practical, powerful, and accessible. We believe technology should work quietly in the background to move your business forward, not add more stress to your day.</p>
          <p>We handle the technical side so you and your team can stay focused on growth.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[1]} alt="Mission and values" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-why reveal">
        <div className="about-content">
          <h2>Why Choose Dizzy Otter</h2>
          <ul className="about-why-list">
            <li><b>Personal service</b> — you work directly with the consultant, not a faceless team.</li>
            <li><b>Tailored solutions</b> — every system is custom built for your workflows.</li>
            <li><b>Clarity over complexity</b> — we explain in plain language, not jargon.</li>
            <li><b>Results driven</b> — everything we design is built to save time, reduce errors, and increase profit.</li>
          </ul>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[3]} alt="Why choose Dizzy Otter" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-different reveal">
        <div className="about-content">
          <h2>What Makes Us Different</h2>
          <p>Dizzy Otter isn’t a web design studio or just another automation agency. We sit at the intersection of strategy, AI, and operations.</p>
          <p>Our process starts with an AI Audit, where we uncover where you can save the most time and money. From there, we design and implement the systems that fit your business, not a one size fits all template.</p>
          <p>We combine creativity, technical skill, and a consultant’s mindset to deliver solutions that scale with you.</p>
        </div>
        <div className="about-img-wrap">
          <img src={aboutImages[4]} alt="What makes Dizzy Otter different" className="about-img" loading="lazy" />
        </div>
      </section>
      <section className="about-section about-cta reveal">
        <div className="about-cta-content">
          <h2>Let’s build something smart together</h2>
          <a href="https://calendly.com/dizzyotter/consultation" className="about-cta-btn" aria-label="Book a Free Consultation">Book a Free Consultation</a>
        </div>
      </section>
    </main>
  );
};

export default About;
