import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const Blog = () => {
  useScrollToTop();
  return React.createElement(
    'main',
    { className: 'blog-page', tabIndex: -1, 'aria-label': 'Blog Page' },
    React.createElement('h1', null, 'Blog / Resources'),
    React.createElement('section', null,
      React.createElement('h2', null, 'AI for Small Business'),
      React.createElement('p', null, 'Coming soon: tips, guides, and more!')
    )
  );
};

export default Blog;
