import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Cookies from './pages/Cookies';
import WebServices from './pages/web-services';
import CookieBanner from './components/CookieBanner';

function App() {
  // Polyfill for smooth scroll in Safari
  React.useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style === false) {
      import('smoothscroll-polyfill').then(mod => mod.polyfill());
    }
  }, []);
  return React.createElement(
    Router,
    null,
    React.createElement(Header),
    React.createElement(CookieBanner),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/services', element: React.createElement(Services) }),
      React.createElement(Route, { path: '/about', element: React.createElement(About) }),
      React.createElement(Route, { path: '/contact', element: React.createElement(Contact) }),
      React.createElement(Route, { path: '/privacy-policy', element: React.createElement(PrivacyPolicy) }),
      React.createElement(Route, { path: '/terms-of-service', element: React.createElement(TermsOfService) }),
      React.createElement(Route, { path: '/cookies', element: React.createElement(Cookies) }),
      React.createElement(Route, { path: '/web-services', element: React.createElement(WebServices) })
    ),
    React.createElement(Footer)
  );
}

export default App;
