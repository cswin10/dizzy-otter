import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Header';
import '../styles/home.css';

function useScrollReveal() {
  useEffect(() => {
    let observer;
    const revealEls = () => Array.from(document.querySelectorAll('.reveal:not(.revealed)'));
    const observeAll = () => {
      revealEls().forEach(el => observer.observe(el));
    };
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );
      observeAll();
      const mutationObserver = new MutationObserver(() => {
        observeAll();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
        mutationObserver.disconnect();
      };
    } else {
      revealEls().forEach(el => el.classList.add('revealed'));
    }
  }, []);
}

const heroBg = {
  background: 'linear-gradient(rgba(26,31,54,0.18), rgba(26,31,54,0.18)), url("/Ai-audit-hero.jpg") center/cover no-repeat'
};

const AiAudit = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useScrollReveal();
  // Scroll to next section for hero arrow
  const scrollToNextSection = e => {
    const arrow = e?.target?.closest('.scroll-down-arrow');
    const hero = arrow?.closest('section, .ai-audit-hero-section');
    if (hero) {
      const sections = Array.from(document.querySelectorAll('section')).filter(s => s.offsetParent !== null);
      const idx = sections.indexOf(hero);
      if (idx !== -1 && idx < sections.length - 1) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <>
      <Navbar />
      <main className="ai-audit-page" tabIndex={-1} aria-label="AI Audit Page">
        {/* Hero Section */}
          <section className="hero-section" style={heroBg}>
            <h1 className="ai-audit-title hero-title reveal">Start with an AI Audit</h1>
            <p className="ai-audit-subline hero-subtitle reveal">The fastest way to uncover how AI can save you time and increase profit.</p>
            <a
              href="https://calendly.com/studio-dizzyotter/30min"
              className="secondary-cta-button reveal"
              aria-label="Book Your Audit"
            >
              Book Your Audit
            </a>
            <div
              className="scroll-down-arrow"
              role="button"
              tabIndex={0}
              aria-label="Scroll to next section"
              style={{ cursor: 'pointer' }}
              onClick={scrollToNextSection}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToNextSection(e); }}
            >
              <span>&#x25bc;</span>
            </div>
          </section>
        {/* Section 1: What is an AI Audit? */}
        <section className="ai-audit-section reveal" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: 'linear-gradient(120deg, #fff 60%, var(--color-accent) 100%)', borderRadius: 0, boxShadow: '0 8px 32px var(--color-accent)', padding: '3.5rem 0', transition: 'background 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(120deg, #fff 40%, var(--color-highlight) 100%)'}
          onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(120deg, #fff 60%, var(--color-accent) 100%)'}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.7rem', color: 'var(--color-accent)' }}>🧠</div>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-accent)', marginBottom: '1.1rem', textAlign: 'center', letterSpacing: '-0.02em' }}>What is an AI Audit?</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '1.2rem', textAlign: 'center' }}>An AI Audit is a structured review of your business processes, tools, and data flows.<br/>We uncover where AI and automation can:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '1.2rem' }}>
              {[{ icon: '⏳', text: 'Eliminate repetitive admin tasks' },
                { icon: '📈', text: 'Capture and convert more leads' },
                { icon: '🤝', text: 'Improve client onboarding and retention' },
                { icon: '📊', text: 'Give you visibility with clear reporting' },
                { icon: '💡', text: 'Save your team hours every week' }].map(({ icon, text }) => (
                <div key={text} style={{
                  background: 'var(--color-accent)',
                  borderRadius: '18px',
                  boxShadow: '0 2px 8px var(--color-accent)',
                  padding: '1.2rem 1.5rem',
                  minWidth: 180,
                  textAlign: 'center',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.7rem',
                  transition: 'background 0.2s, color 0.2s',
                  cursor: 'pointer'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = '#fff'; }}
                >
                  <span style={{ fontSize: '2rem' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section 2: What You Get */}
        <section className="ai-audit-section reveal interactive-section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: 'linear-gradient(120deg, #fff 60%, var(--color-accent) 100%)', borderRadius: 0, boxShadow: '0 8px 32px var(--color-accent)', padding: '3.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-accent)', marginBottom: '1.1rem', textAlign: 'center', letterSpacing: '-0.02em' }}>What You Get</h2>
            <ul style={{ fontSize: '1.15rem', color: 'var(--color-primary)', margin: '2rem auto 0 auto', paddingLeft: 0, listStyle: 'none', maxWidth: '700px' }}>
              { [
                'Discovery session to understand your business and goals',
                'Review of your current tools and workflows',
                'Identification of the top 3 AI opportunities in your business',
                'A 14-day quick win plan',
                'ROI estimate (hours saved, payback period)',
                'Recorded Loom walkthrough + written report'
              ].map((text, idx) => (
                <li
                  key={text}
                  className="reveal"
                  style={{
                    marginBottom: '1.1rem',
                    padding: '0.7rem 1.2rem',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px var(--color-accent, #2979ff)',
                    transition: 'background 0.2s, color 0.2s',
                    cursor: 'pointer',
                    color: 'var(--color-primary)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                >
                  {text}
                </li>
              )) }
            </ul>
          </div>
        </section>
        {/* Section 3: How It Works */}
        <section className="ai-audit-section reveal interactive-section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: 'linear-gradient(120deg, #fff 60%, var(--color-accent) 100%)', borderRadius: 0, boxShadow: '0 8px 32px var(--color-accent)', padding: '3.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-accent)', marginBottom: '1.1rem', textAlign: 'center', letterSpacing: '-0.02em' }}>How It Works</h2>
            <ol style={{ fontSize: '1.15rem', color: 'var(--color-primary)', margin: '2rem auto 0 auto', paddingLeft: 0, listStyle: 'none', maxWidth: '700px' }}>
              { [
                { label: 'Free Consultation', desc: 'a 30-minute call to understand your business.' },
                { label: 'Audit Session', desc: 'we map your processes, tools, and pain points.' },
                { label: 'Audit Report', desc: 'within 7 days you receive your roadmap and ROI breakdown.' },
                { label: 'Next Steps', desc: 'if you choose, we design and implement the solutions for you.' }
              ].map((step, idx) => (
                <li
                  key={step.label}
                  className="reveal"
                  style={{
                    marginBottom: '1.1rem',
                    padding: '0.7rem 1.2rem',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px var(--color-accent, #2979ff)',
                    transition: 'background 0.2s, color 0.2s',
                    cursor: 'pointer',
                    color: 'var(--color-primary)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                >
                  <b>{step.label}</b> – {step.desc}
                </li>
              )) }
            </ol>
          </div>
        </section>
        {/* Section 4: Pricing */}
        <section className="ai-audit-section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: 'linear-gradient(120deg, #fff 60%, var(--color-accent) 100%)', borderRadius: 0, boxShadow: '0 8px 32px var(--color-accent)', padding: '3.5rem 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-accent)', marginBottom: '1.1rem', textAlign: 'center', letterSpacing: '-0.02em' }}>Pricing</h2>
            <div style={{ fontWeight: '700', fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>AI Audits start from £500.</div>
            <div style={{ fontSize: '1.08rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Tailored pricing for larger teams or complex workflows.</div>
            <div style={{ fontSize: '1.08rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>100% of your audit fee can be applied to a future implementation project.</div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="ai-audit-final-cta-section" style={{ background: 'linear-gradient(90deg, #2979FF 0%, #50E3C2 100%)', color: '#fff', textAlign: 'center', padding: '3rem 1rem', borderRadius: '32px', maxWidth: '1100px', margin: '2.5rem auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Ready to discover your AI opportunities?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Book your AI Audit today and get a clear roadmap for growth.</p>
          <a
            href="https://calendly.com/studio-dizzyotter/30min"
            className="cta-button interactive-cta"
            style={{
              background: '#fff',
              color: '#2979FF',
              fontWeight: '700',
              fontSize: '1.15rem',
              padding: '1rem 2.5rem',
              borderRadius: '32px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '1rem',
              boxShadow: '0 2px 12px #2979ff33',
              transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#2979FF';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 4px 24px #2979ff66';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#2979FF';
              e.currentTarget.style.boxShadow = '0 2px 12px #2979ff33';
            }}
            onMouseDown={e => {
              e.currentTarget.style.transform = 'scale(0.97)';
            }}
            onMouseUp={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Book Your Audit"
          >
            Book Your Audit
          </a>
        </section>
  </main>
    </>
  );
};

export default AiAudit;
