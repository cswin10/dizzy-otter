import { useEffect } from 'react';

/**
 * Custom hook to reveal elements on scroll using IntersectionObserver
 * Elements with class 'reveal' will get 'revealed' class when they become visible
 */
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
      // Fallback for browsers without IntersectionObserver
      revealEls().forEach(el => el.classList.add('revealed'));
    }
  }, []);
}

export default useScrollReveal;
