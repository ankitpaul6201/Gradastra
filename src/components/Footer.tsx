import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { AdviestButton } from './AdviestButton';
import { blurTextVariants } from '../utils/motionVariants';

interface FooterProps {
  onNavigate?: (page: 'home' | 'contact' | '404' | 'privacy' | 'terms', targetSectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    const lenis = (window as any).__gradastraLenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLink = (e: React.MouseEvent, page: 'home' | 'contact' | '404' | 'privacy' | 'terms', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="adviest-footer">
      <div className="adviest-container">
        {/* Top Content Row */}
        <div className="adviest-footer-top">
          {/* Left Column: Tagline & Social Icons */}
          <div className="adviest-footer-brand-col">
            <motion.h3 
              className="adviest-footer-tagline"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={{ delay: 0.1, duration: 0.5 }}
            >
              Independent Global College Intelligence & Student Advisory Platform.
            </motion.h3>
            
            <div className="adviest-footer-socials">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="adviest-social-btn"
                aria-label="LinkedIn"
              >
                <img 
                  src="https://framerusercontent.com/images/Ot8OKCzulylneqfh15IVEkBZVq8.svg?width=32&height=32" 
                  alt="LinkedIn" 
                  width={20} 
                  height={20} 
                />
              </a>

              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="adviest-social-btn"
                aria-label="X (Twitter)"
              >
                <img 
                  src="https://framerusercontent.com/images/qCWvLff7EOqVKn95M40zJcKZQg.svg?width=32&height=32" 
                  alt="X (Twitter)" 
                  width={20} 
                  height={20} 
                />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="adviest-social-btn"
                aria-label="Instagram"
              >
                <img 
                  src="https://framerusercontent.com/images/vwtvMCPzC53KxqVm04ecDX0mk.svg?width=32&height=32" 
                  alt="Instagram" 
                  width={20} 
                  height={20} 
                />
              </a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="adviest-footer-nav-col">
            {/* Explorer Column: Mirrors the Navbar Navigation */}
            <div className="adviest-footer-link-group">
              <h4>Explorer</h4>
              <ul>
                <li><a href="#services" onClick={(e) => handleLink(e, 'home', 'services')}>Why Us</a></li>
                <li><a href="#comparison" onClick={(e) => handleLink(e, 'home', 'comparison')}>Agency Comparison</a></li>
                <li><a href="#process" onClick={(e) => handleLink(e, 'home', 'process')}>Process</a></li>
                <li><a href="#experience" onClick={(e) => handleLink(e, 'home', 'experience')}>Services</a></li>
                <li><a href="#reviews" onClick={(e) => handleLink(e, 'home', 'reviews')}>Testimonials</a></li>
                <li><a href="#faq" onClick={(e) => handleLink(e, 'home', 'faq')}>FAQs</a></li>
              </ul>
            </div>

            {/* Legal Column: Dedicated Pages for Terms & Privacy Policy */}
            <div className="adviest-footer-link-group">
              <h4>Legal & Policies</h4>
              <ul>
                <li>
                  <a href="/terms" onClick={(e) => handleLink(e, 'terms')}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" onClick={(e) => handleLink(e, 'privacy')}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column: Contact Page and One Email */}
            <div className="adviest-footer-link-group">
              <h4>Contact</h4>
              <ul>
                <li><a href="/contact" onClick={(e) => handleLink(e, 'contact')}>Contact Us</a></li>
                <li><a href="mailto:hello@gradastra.com">hello@gradastra.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Architectural GRADASTRA Logo Banner */}
        <div className="adviest-footer-giant-logo-wrapper">
          <motion.div 
            className="gradastra-footer-giant-text"
            variants={blurTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            custom={{ delay: 0.15, duration: 0.6 }}
          >
            GRADASTRA
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="adviest-footer-bottom">
          <div className="adviest-footer-legal">
            <span>© 2026 Gradastra. All rights reserved. Always free for students.</span>
          </div>

          <AdviestButton 
            onClick={scrollToTop} 
            title="Back to top" 
            variant="glass"
            icon={<ArrowUp size={18} strokeWidth={2} />}
            className="adviest-footer-back-to-top"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
