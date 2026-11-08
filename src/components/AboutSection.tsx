import React from 'react';
import { motion } from 'framer-motion';
import { SubTitle, LayoutIsland } from '../framer';
import { Star } from 'lucide-react';
import { AdviestButton } from './AdviestButton';
import { blurTextVariants } from '../utils/motionVariants';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="adviest-section adviest-about-section">
      <div className="adviest-container">
        {/* Section Tag Badge */}
        <motion.div 
          className="adviest-badge-row"
          variants={blurTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={{ delay: 0, duration: 0.6 }}
        >
          <LayoutIsland width="auto" minHeight={40}>
            <SubTitle title="ABOUT GRADASTRA" />
          </LayoutIsland>
        </motion.div>

        {/* Section Heading */}
        <motion.h2 
          className="adviest-about-heading"
          variants={blurTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={{ delay: 0.12, duration: 0.65 }}
        >
          We help students understand what studying at a college is actually like before applying or enrolling. Zero commissions. Zero sponsored placements.
        </motion.h2>

        {/* Responsive Content Grid */}
        <motion.div 
          className="adviest-about-grid"
          variants={blurTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={{ delay: 0.22, duration: 0.7 }}
        >
          {/* Architecture / Campus Building Card */}
          <div className="adviest-about-card-building">
            <div className="adviest-card-image-box">
              <img 
                src="https://framerusercontent.com/images/DMlUCGGMzVafAtP3YgY1Z7nAfhE.jpg?width=1050&height=759" 
                alt="Global University Campus Architecture" 
                className="adviest-card-photo"
              />
            </div>
          </div>

          {/* Student Portrait Card */}
          <div className="adviest-about-card-portrait">
            <div className="adviest-portrait-card">
              <img 
                src="https://framerusercontent.com/images/orECDk1yHAceniWXq7yKvfvv7Y.jpg?width=2544&height=2704" 
                alt="Gradastra Verified Senior Student" 
                className="adviest-portrait-img"
              />
              <div className="adviest-portrait-overlay">
                <p>Peer-to-peer university guidance grounded in real campus truth, not agency sales pitches.</p>
              </div>
            </div>

            {/* Team Metric Badge below portrait */}
            <div className="adviest-metric-badge">
              <div className="adviest-star-rating">
                <Star size={16} fill="#FF6A00" color="#FF6A00" />
                <span className="adviest-rating-val">5.0</span>
              </div>
              <div className="adviest-metric-divider" />
              <div className="adviest-team-members">
                <span className="adviest-red-dot" />
                <span>500+ Verified Campuses • 100% Free</span>
              </div>
            </div>
          </div>

          {/* Performance Analytics Graphic Card */}
          <div className="adviest-about-card-analytics">
            <div className="adviest-card-analytics-box">
              <div className="adviest-chart-header">
                <span className="adviest-chart-badge">Advisor Authenticity</span>
                <span className="adviest-chart-stat">100% Free</span>
              </div>
              
              {/* Visual Chart Bars */}
              <div className="adviest-chart-bars">
                <div className="adviest-chart-bar" style={{ height: '35%' }} />
                <div className="adviest-chart-bar" style={{ height: '55%' }} />
                <div className="adviest-chart-bar" style={{ height: '45%' }} />
                <div className="adviest-chart-bar" style={{ height: '75%' }} />
                <div className="adviest-chart-bar active" style={{ height: '95%' }} />
                <div className="adviest-chart-bar" style={{ height: '80%' }} />
              </div>

              <div className="adviest-analytics-footer">
                <AdviestButton title="Contact Us" onClick={onOpenContact} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
