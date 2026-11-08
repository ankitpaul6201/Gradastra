import React, { useState, useEffect } from 'react';
import { LenisScroll } from './components/LenisScroll';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TruthTickerSection } from './components/TruthTickerSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { NotFoundPage } from './components/NotFoundPage';
import { LegalPage } from './components/LegalPage';
import { SeoHead } from './components/SeoHead';
import { ComparisonSection } from './components/ComparisonSection';

export type AppDocPage = 'home' | 'contact' | '404' | 'privacy' | 'terms';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppDocPage>('home');

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('privacy') || hash.includes('privacy')) {
        setCurrentPage('privacy');
      } else if (path.includes('terms') || hash.includes('terms')) {
        setCurrentPage('terms');
      } else if (path.includes('contact') || hash.includes('contact')) {
        setCurrentPage('contact');
      } else if (path.includes('404') || hash.includes('404')) {
        setCurrentPage('404');
      } else if (path !== '/' && path !== '' && !path.includes('index.html')) {
        setCurrentPage('404');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  // When returning to home, ensure scroll position and intersection observers sync cleanly
  useEffect(() => {
    if (currentPage === 'home') {
      window.scrollTo(0, 0);
      const lenis = (window as any).__gradastraLenis;
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(0, { immediate: true });
      }
      const t1 = setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
        window.dispatchEvent(new Event('resize'));
      }, 40);
      const t2 = setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
        window.dispatchEvent(new Event('resize'));
      }, 120);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [currentPage]);

  const navigateTo = (page: AppDocPage, targetSectionId?: string) => {
    const executeNavigation = () => {
      setCurrentPage(page);
      const route = page === 'home' ? (targetSectionId ? `#${targetSectionId}` : '/') : `/${page}`;
      
      try {
        window.history.pushState(null, '', route);
      } catch {
        window.location.hash = page === 'home' ? (targetSectionId || '') : page;
      }

      if (targetSectionId) {
        setTimeout(() => {
          const el = document.getElementById(targetSectionId);
          const lenis = (window as any).__gradastraLenis;
          if (el) {
            if (lenis) {
              lenis.start();
              lenis.scrollTo(el, { duration: 1.2 });
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            if (lenis) {
              lenis.start();
              lenis.scrollTo(0, { duration: 1 });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        }, 50);
      } else {
        const lenis = (window as any).__gradastraLenis;
        if (lenis) {
          lenis.start();
          lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
      }
    };

    // Chrome View Transitions API (Detail 9)
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        executeNavigation();
      });
    } else {
      executeNavigation();
    }
  };

  const handleOpenContact = () => {
    navigateTo('contact');
  };

  return (
    <div className="adviest-app-wrapper">
      {/* Dynamic SEO, AEO & Meta Manager */}
      <SeoHead currentPage={currentPage} />

      {/* Universal Lenis Smooth Scroll runtime active over all sections and pages */}
      <LenisScroll currentPage={currentPage} />

      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onNavigate={navigateTo}
        currentPage={currentPage}
      />

      {/* Dynamic View rendering */}
      {currentPage === 'privacy' || currentPage === 'terms' ? (
        <main key="legal-page" className="adviest-main-content">
          <LegalPage 
            initialDoc={currentPage} 
            onNavigateHome={() => navigateTo('home')} 
            onChangeDoc={(doc) => navigateTo(doc)}
          />
        </main>
      ) : currentPage === 'contact' ? (
        <main key="contact-page" className="adviest-main-content">
          <ContactPage onNavigateHome={() => navigateTo('home')} />
        </main>
      ) : currentPage === '404' ? (
        <main key="notfound-page" className="adviest-main-content">
          <NotFoundPage onNavigateHome={() => navigateTo('home')} />
        </main>
      ) : (
        <main key="home-page" className="adviest-main-content">
          {/* Giant CONSULTATIVE heading + Blue Hero Card */}
          <HeroSection />

          {/* Bold Points Marquee: No partnerships, raw truth, zero commissions */}
          <TruthTickerSection />

          {/* [ WHY WE ARE UNIQUE ] Section with 4 List Items */}
          <ServicesSection />

          {/* [ FACTUAL COMPARISON • AEO & GEO ] Comparison Matrix Table */}
          <ComparisonSection />

          {/* [ OUR PROCESS ] Section with 3 Process Cards */}
          <ProcessSection />

          {/* [ COMPLETE ADVISORY SERVICES ] Section with Staggered Engagement Cards */}
          <ExperienceSection />

          {/* [ STUDENT STORIES ] Section with Blue Banner & Review Card */}
          <ReviewsSection />

          {/* [ FREQUENTLY ASKED QUESTIONS ] Section with Accordion Items */}
          <FaqSection onOpenContact={handleOpenContact} />
        </main>
      )}

      {/* Footer with giant GRADASTRA graphic */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
