import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';
import CookieBanner from './components/CookieBanner';

// Lazy load page components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const AiAudit = React.lazy(() => import('./pages/ai-audit'));
const ClientOS = React.lazy(() => import('./pages/ClientOS'));
const CallFlowAI = React.lazy(() => import('./pages/CallFlowAI'));

function App() {
  // Polyfill for smooth scroll in Safari
  React.useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style === false) {
      import('smoothscroll-polyfill').then(mod => mod.polyfill());
    }
  }, []);

  // Custom cursor effect
  React.useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'custom-cursor-glow';
    document.body.appendChild(cursorGlow);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let glowX = 0, glowY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth following effect
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (cursorGlow.parentNode) cursorGlow.parentNode.removeChild(cursorGlow);
    };
  }, []);

  return React.createElement(
    Router,
    null,
    React.createElement(Header),
    React.createElement(CookieBanner),
    React.createElement(
      Suspense,
      { fallback: React.createElement('div', { style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, 'Loading...') },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Home) }),
        React.createElement(Route, { path: '/services', element: React.createElement(Services) }),
        React.createElement(Route, { path: '/clientos', element: React.createElement(ClientOS) }),
        React.createElement(Route, { path: '/callflow-ai', element: React.createElement(CallFlowAI) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About) }),
        React.createElement(Route, { path: '/contact', element: React.createElement(Contact) }),
        React.createElement(Route, { path: '/privacy-policy', element: React.createElement(PrivacyPolicy) }),
        React.createElement(Route, { path: '/terms-of-service', element: React.createElement(TermsOfService) }),
        React.createElement(Route, { path: '/cookies', element: React.createElement(Cookies) }),
        React.createElement(Route, { path: '/ai-audit', element: React.createElement(AiAudit) })
      )
    ),
    React.createElement(Footer)
  );
}

export default App;
