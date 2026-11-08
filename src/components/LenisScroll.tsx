import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __gradastraLenis?: Lenis | null;
  }
}

interface LenisScrollProps {
  currentPage?: string;
}

export const LenisScroll: React.FC<LenisScrollProps> = ({ currentPage }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with refined cubic easing for luxury smooth scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;
    window.__gradastraLenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Watch for modal or overlay stop scroll requests
    const checkStopScroll = () => {
      const modalOpen = document.body.classList.contains('adviest-modal-open') || 
                        document.body.style.overflow === 'hidden';
      if (modalOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const observer = new MutationObserver(checkStopScroll);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
      window.__gradastraLenis = null;
    };
  }, []);

  // When page changes, scroll smoothly to top and ensure scroll is active
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.start();
      lenisRef.current.resize();
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Refresh layout measurements and trigger intersection observers
    const timer1 = setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('resize'));
    }, 40);

    const timer2 = setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('resize'));
    }, 120);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentPage]);

  return null;
};

export default LenisScroll;

