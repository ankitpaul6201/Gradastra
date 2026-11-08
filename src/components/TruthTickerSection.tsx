import React from 'react';

const TRUTH_POINTS = [
  "NO PARTNERSHIP WITH ANY COLLEGE",
  "REAL, RAW CAMPUS TRUTH",
  "ZERO COMMISSIONS & ZERO KICKBACKS",
  "VERIFIED SENIOR STUDENTS ONLY",
  "UNFILTERED PLACEMENT REALITIES",
  "FACTS OVER GLOSSY BROCHURES",
];

export const TruthTickerSection: React.FC = () => {
  return (
    <section className="adviest-truth-ticker-section">
      <div className="adviest-truth-marquee-wrapper">
        <div className="adviest-truth-track">
          {/* Triple the list to ensure infinite, seamless right-to-left loop */}
          {[...TRUTH_POINTS, ...TRUTH_POINTS, ...TRUTH_POINTS].map((point, index) => (
            <div key={index} className="adviest-truth-item">
              <span className="adviest-truth-bullet">✦</span>
              <span className="adviest-truth-text">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruthTickerSection;

