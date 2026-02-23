import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────────────────────
// 1. SCROLL RESET ON ROUTE CHANGE
// ─────────────────────────────────────────────────────────────────────────────
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout lets the new page render before scrolling,
    // preventing a flash of the old page position.
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

