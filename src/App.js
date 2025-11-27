import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';
import CookieBanner from './components/CookieBanner';

// Lazy load page components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Cookies = React.lazy(() => import('./pages/Cookies'));

function App() {
  // Polyfill for smooth scroll in Safari
  React.useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style === false) {
      import('smoothscroll-polyfill').then(mod => mod.polyfill());
    }
  }, []);

  // Custom cursor effect - subtle glow
  React.useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
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
        React.createElement(Route, { path: '/projects', element: React.createElement(Projects) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About) }),
        React.createElement(Route, { path: '/contact', element: React.createElement(Contact) }),
        React.createElement(Route, { path: '/privacy-policy', element: React.createElement(PrivacyPolicy) }),
        React.createElement(Route, { path: '/terms-of-service', element: React.createElement(TermsOfService) }),
        React.createElement(Route, { path: '/cookies', element: React.createElement(Cookies) }),
        // Redirects for old pages
        React.createElement(Route, { path: '/clientos', element: React.createElement(Navigate, { to: '/', replace: true }) }),
        React.createElement(Route, { path: '/services', element: React.createElement(Navigate, { to: '/', replace: true }) }),
        React.createElement(Route, { path: '/ai-audit', element: React.createElement(Navigate, { to: '/', replace: true }) }),
        React.createElement(Route, { path: '/callflow-ai', element: React.createElement(Navigate, { to: '/', replace: true }) }),
        // Catch all - redirect to home
        React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: '/', replace: true }) })
      )
    ),
    React.createElement(Footer)
  );
}

export default App;
