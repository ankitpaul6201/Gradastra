import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdviestButton } from './AdviestButton';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate?: (page: 'home' | 'contact' | '404' | 'privacy' | 'terms', targetSectionId?: string) => void;
  currentPage?: 'home' | 'contact' | '404' | 'privacy' | 'terms';
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenContact, 
  onNavigate, 
  currentPage = 'home'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(66);

  // Measure header height so the dark blurred backdrop starts exactly BELOW the header
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Lock scrolling on html & body and apply blur to website
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('nav-menu-open');
      document.documentElement.classList.add('nav-menu-open');
      document.body.style.overflow = 'hidden';
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    } else {
      document.body.classList.remove('nav-menu-open');
      document.documentElement.classList.remove('nav-menu-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('nav-menu-open');
      document.documentElement.classList.remove('nav-menu-open');
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home', id);
        return;
      }
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef} className="adviest-header">
      <div className="adviest-header-inner">
        {/* Brand Logo */}
        <a 
          href="/" 
          className="adviest-logo" 
          onClick={(e) => { 
            e.preventDefault(); 
            if (currentPage !== 'home' && onNavigate) {
              onNavigate('home');
            } else {
              const lenis = (window as any).__gradastraLenis;
              if (lenis) {
                lenis.scrollTo(0, { duration: 1 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }
          }}
        >
          <span className="gradastra-logo-text">
            Gradastra
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="adviest-nav-links">
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Why Us</a>
          <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Process</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Services</a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollTo('reviews'); }}>Testimonials</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQs</a>
        </nav>

        {/* Right CTA Button */}
        <div className="adviest-nav-cta">
          <div className="adviest-nav-desktop-cta">
            <AdviestButton 
              title="Contact Us" 
              onClick={() => {
                if (onNavigate) onNavigate('contact');
                else onOpenContact();
              }} 
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="adviest-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              {/* Top Bar: M 3 6 L 15 6 morphs into first diagonal arm of the X */}
              <motion.path 
                stroke="#111827" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={false}
                animate={{ 
                  d: mobileMenuOpen ? "M 4.5 4.5 L 19.5 19.5" : "M 3 6 L 15 6" 
                }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Middle Bar: M 3 12 L 21 12 fades out smoothly */}
              <motion.path 
                stroke="#111827" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={false}
                animate={{ 
                  d: "M 3 12 L 21 12",
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? -5 : 0,
                }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Bottom Bar: M 9 18 L 21 18 morphs into second diagonal arm of the X */}
              <motion.path 
                stroke="#111827" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={false}
                animate={{ 
                  d: mobileMenuOpen ? "M 4.5 19.5 L 19.5 4.5" : "M 9 18 L 21 18" 
                }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown & Dark Blurred Backdrop below Header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Blurred Backdrop: Starts strictly below header so the header stays 100% visible */}
            <motion.div
              className="adviest-mobile-backdrop"
              style={{
                top: `${headerHeight}px`,
                height: `calc(100vh - ${headerHeight}px)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
            />

            {/* Smooth Floating Menu Card over the blurred page */}
            <motion.div
              className="adviest-mobile-menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="adviest-mobile-nav-links">
                <a 
                  href="#services" 
                  className="adviest-mobile-nav-item"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                >
                  <span>Why Us</span>
                  <ChevronRight size={18} className="adviest-mobile-nav-arrow" />
                </a>
                <a 
                  href="#process" 
                  className="adviest-mobile-nav-item"
                  onClick={(e) => { e.preventDefault(); scrollTo('process'); }}
                >
                  <span>Our Process</span>
                  <ChevronRight size={18} className="adviest-mobile-nav-arrow" />
                </a>
                <a 
                  href="#experience" 
                  className="adviest-mobile-nav-item"
                  onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}
                >
                  <span>Advisory Services</span>
                  <ChevronRight size={18} className="adviest-mobile-nav-arrow" />
                </a>
                <a 
                  href="#reviews" 
                  className="adviest-mobile-nav-item"
                  onClick={(e) => { e.preventDefault(); scrollTo('reviews'); }}
                >
                  <span>Testimonials</span>
                  <ChevronRight size={18} className="adviest-mobile-nav-arrow" />
                </a>
                <a 
                  href="#faq" 
                  className="adviest-mobile-nav-item"
                  onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}
                >
                  <span>Frequently Asked Questions</span>
                  <ChevronRight size={18} className="adviest-mobile-nav-arrow" />
                </a>

              </nav>

              <div className="adviest-mobile-menu-cta">
                <AdviestButton 
                  title="Contact Us" 
                  onClick={() => { 
                    setMobileMenuOpen(false); 
                    if (onNavigate) onNavigate('contact');
                    else onOpenContact(); 
                  }}
                  style={{ width: '100%', justifyContent: 'space-between' }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
