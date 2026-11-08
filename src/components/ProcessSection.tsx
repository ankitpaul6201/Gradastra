import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { BlurText } from './BlurText';
import { blurTextVariants } from '../utils/motionVariants';

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Starts the animation as soon as the section enters the screen from the bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'center 45%'],
  });

  // Fast, buttery-smooth spring response to scrolling up & down
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  // Card 1: starts stacked in center (Col 2), moves left into Col 1
  const card1X = useTransform(smoothProgress, [0, 1], ['100%', '0%']);

  // Card 3: starts stacked in center (Col 2), moves right into Col 3
  const card3X = useTransform(smoothProgress, [0, 1], ['-100%', '0%']);

  // Card 2: starts stacked in center (Row 1), moves down into Row 2
  const card2Y = useTransform(smoothProgress, [0, 1], ['-100%', '0%']);

  return (
    <section
      id="process"
      ref={containerRef}
      className="adviest-process-section-wrapper"
    >
      <div className="adviest-process-outer">
        <div className="adviest-process-banner">
          {/* Badge Label */}
          <motion.div 
            className="adviest-process-badge"
            variants={blurTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            custom={{ delay: 0, duration: 0.4 }}
          >
            [ OUR 3-STEP PROCESS ]
          </motion.div>

          {/* Header Row: Title on Left, Subtitle on Right */}
          <div className="adviest-process-header">
            <BlurText 
              as="h2"
              text="Our Student-to-Student Advisory Framework"
              mode="letter"
              className="adviest-process-title"
              delay={0.05}
              stagger={0.012}
            />
            <BlurText 
              as="p"
              text="A transparent, step-by-step roadmap: you share your details, we analyze your eligibility and course matches, and connect you with verified campus seniors and our advisory team for complete guidance."
              mode="word"
              className="adviest-process-desc"
              delay={0.12}
              stagger={0.025}
            />
          </div>

          {/* 3 Step Cards Grid: Fanning from Center Stack into Corner-to-Corner Placement */}
          <div className="adviest-process-cards-grid">
            {/* Card 01: Top Left (Row 1, Col 1) */}
            <motion.div
              className="adviest-process-card adviest-process-card-1"
              style={{ x: card1X, zIndex: 30 }}
            >
              <div className="adviest-process-card-number">01</div>
              <h3 className="adviest-process-card-title">Share Your Details</h3>
              <p className="adviest-process-card-text">
                First, you share your academic records, test scores, target major, and budget with us so we can understand your unique profile, competence, and study abroad aspirations.
              </p>
            </motion.div>

            {/* Card 02: Center Bottom (Row 2, Col 2) */}
            <motion.div
              className="adviest-process-card adviest-process-card-2"
              style={{ y: card2Y, zIndex: 20 }}
            >
              <div className="adviest-process-card-number">02</div>
              <h3 className="adviest-process-card-title">Eligibility Analysis</h3>
              <p className="adviest-process-card-text">
                Next, we analyze your eligibility, academic competence, and financial feasibility in detail to evaluate where you stand and map the strongest university and course matches.
              </p>
            </motion.div>

            {/* Card 03: Top Right (Row 1, Col 3) */}
            <motion.div
              className="adviest-process-card adviest-process-card-3"
              style={{ x: card3X, zIndex: 10 }}
            >
              <div className="adviest-process-card-number">03</div>
              <h3 className="adviest-process-card-title">Connect with Seniors & Us</h3>
              <p className="adviest-process-card-text">
                Then, we connect you with enrolled student seniors who share their authentic campus experiences and services, while our team guides you with document preparation, visa support, and full advisory.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
