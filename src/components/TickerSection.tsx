import React from 'react';
import { motion } from 'framer-motion';
import { blurTextVariants } from '../utils/motionVariants';

interface University {
  name: string;
  displayName: string;
  logo: string;
}

const UNIVERSITIES: University[] = [
  // Leading Indian Universities
  { name: 'IIT Bombay', displayName: 'IIT Bombay', logo: '/logos/iitb.png' },
  { name: 'IIT Delhi', displayName: 'IIT Delhi', logo: '/logos/iitd.svg' },
  { name: 'IIT Madras', displayName: 'IIT Madras', logo: '/logos/iitm.svg' },
  { name: 'BITS Pilani', displayName: 'BITS Pilani', logo: '/logos/bits.svg' },
  { name: 'IIIT Hyderabad', displayName: 'IIIT Hyderabad', logo: '/logos/iiith.png' },
  { name: 'NIT Trichy', displayName: 'NIT Trichy', logo: '/logos/nitt.png' },
  { name: 'NIT Surathkal', displayName: 'NIT Surathkal', logo: '/logos/nitk.png' },
  { name: 'DTU', displayName: 'DTU Delhi', logo: '/logos/dtu.png' },
  { name: 'NSUT', displayName: 'NSUT Delhi', logo: '/logos/nsut.svg' },
  { name: 'VIT Vellore', displayName: 'VIT Vellore', logo: '/logos/vit.svg' },
  { name: 'SRM University', displayName: 'SRM University', logo: '/logos/srm.svg' },
  { name: 'Galgotias University', displayName: 'Galgotias', logo: '/logos/galgotias.png' },

  // Global Leading Universities
  { name: 'MIT', displayName: 'MIT', logo: '/logos/mit.svg' },
  { name: 'Harvard', displayName: 'Harvard', logo: '/logos/harvard.svg' },
  { name: 'University of Chicago', displayName: 'UChicago', logo: '/logos/uchicago.svg' },
  { name: 'University of Michigan', displayName: 'UMichigan', logo: '/logos/umich.svg' },
  { name: 'University of Nottingham', displayName: 'UNottingham', logo: '/logos/nottingham.svg' },
];

export const TickerSection: React.FC = () => {
  return (
    <section className="adviest-ticker-section">
      <div className="adviest-container adviest-ticker-flex">
        {/* Label on Left: 2 lines matching the reference UI */}
        <motion.div 
          className="adviest-ticker-label"
          variants={blurTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={{ delay: 0.1, duration: 0.6 }}
        >
          <span>Verified Student Advisors<br />Across Leading Institutions</span>
        </motion.div>

        {/* Infinite Running Marquee */}
        <div className="adviest-ticker-marquee-wrapper">
          <div className="adviest-ticker-track">
            {/* Duplicated arrays for seamless infinite loop */}
            {[...UNIVERSITIES, ...UNIVERSITIES, ...UNIVERSITIES].map((uni, index) => (
              <div key={index} className="adviest-ticker-item">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="gradastra-ticker-brand-logo"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="gradastra-ticker-brand-name">{uni.displayName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
