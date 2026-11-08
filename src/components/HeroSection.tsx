import React from 'react';
import { motion } from 'framer-motion';
import { BlurText } from './BlurText';
import { blurAssetVariants } from '../utils/motionVariants';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="adviest-hero-section">
      {/* Giant Architectural Brand Text */}
      <div className="adviest-giant-title-wrapper" aria-hidden="true">
        <BlurText
          as="div"
          text="GRADASTRA"
          mode="letter"
          className="adviest-giant-title"
          delay={0.1}
          stagger={0.03}
        />
      </div>

      {/* Hero Banner Area */}
      <div className="adviest-hero-banner-wrapper">
        {/* The Blue/Purple Banner Card */}
        <div className="adviest-hero-banner">
          {/* Left Text Block (Desktop & Tablet) - Single Primary Semantic H1 */}
          <div className="adviest-hero-col adviest-hero-col-left">
            <BlurText
              as="h1"
              text="Independent Global College Intelligence & Senior Student Advisory."
              mode="letter"
              className="adviest-hero-heading"
              delay={0.25}
              stagger={0.015}
            />
          </div>

          {/* Center spacer column for the cutout figure */}
          <div className="adviest-hero-col adviest-hero-col-center" aria-hidden="true" />

          {/* Right Text Block (Desktop & Tablet) */}
          <div className="adviest-hero-col adviest-hero-col-right">
            <BlurText
              as="p"
              text="Real colleges. Real students. Unfiltered campus realities and 100% free guidance from verified senior students worldwide. Always free."
              mode="word"
              className="adviest-hero-description"
              delay={0.4}
              stagger={0.035}
            />
          </div>

          {/* Center Cutout Photo - Layered between banner background and mobile frosted glass */}
          <div className="adviest-hero-cutout-wrapper">
            <motion.img 
              src="/hero-character.png" 
              alt="Gradastra Verified Senior Student Advisor"
              className="adviest-hero-cutout-img"
              loading="eager"
              variants={blurAssetVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 0.32, duration: 0.8 }}
            />
          </div>

          {/* Mobile Frosted Blur Gradient Overlay */}
          <div className="adviest-hero-mobile-blur-overlay">
            <BlurText
              as="h2"
              text="Independent College Intelligence and Student Advisory for Informed Decisions."
              mode="letter"
              className="adviest-hero-mobile-overlay-title"
              delay={0.3}
              stagger={0.015}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
