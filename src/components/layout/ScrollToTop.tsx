import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    
    // Scroll to top instantly
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    html.scrollTop = 0; // For Chrome, Firefox, IE
    
    // Restore original scroll behavior after a brief delay
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior || '';
    });
  }, [pathname]);

  return null;
};

