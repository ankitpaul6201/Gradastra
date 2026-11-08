import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AdviestButton } from './AdviestButton';
import { BlurText } from './BlurText';
import { blurTextVariants } from '../utils/motionVariants';

interface InsightsSectionProps {
  onOpenExplore: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onOpenExplore }) => {
  const [activeTab, setActiveTab] = useState(0);

  const TABS = [
    {
      id: 'undergrad',
      tag: 'Undergraduate Programs',
      title: 'For Prospective Undergrads',
      desc: 'Compare true admissions benchmarks, faculty accessibility, real tuition costs, and ground-level campus culture.',
      bgClass: 'adviest-tab-black',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'postgrad',
      tag: 'Master\'s & Doctoral',
      title: 'For Graduate & Master\'s Applicants',
      desc: 'Evaluate research lab funding, supervisor mentorship styles, teaching assistantships, and post-study opportunities.',
      bgClass: 'adviest-tab-charcoal',
      img: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'international',
      tag: 'Cross-Border Relocation',
      title: 'For International Applicants',
      desc: 'Access unfiltered data on off-campus rent, actual living expenses, healthcare, and post-study visa regulations.',
      bgClass: 'adviest-tab-pattern',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="insights" className="adviest-section adviest-insights-section">
      <div className="adviest-container">
        {/* Section Badge */}
        <motion.div 
          className="adviest-badge-row"
          variants={blurTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          custom={{ delay: 0, duration: 0.4 }}
        >
          <span className="adviest-section-badge">[ CAMPUS INTELLIGENCE ]</span>
        </motion.div>

        {/* Section Header */}
        <div className="adviest-section-header-split">
          <BlurText 
            as="h2"
            text="Data-Driven College Intelligence"
            mode="letter"
            className="adviest-section-title"
            delay={0.05}
            stagger={0.012}
          />
          <div className="adviest-insights-header-right">
            <BlurText 
              as="p"
              text="Empowering student and family decisions with unvarnished campus analytics, living cost calculators, and placement audits."
              mode="word"
              className="adviest-section-subtitle"
              delay={0.12}
              stagger={0.025}
            />
            <div style={{ marginTop: '16px' }}>
              <AdviestButton title="Explore Colleges" onClick={onOpenExplore} />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="adviest-insights-grid">
          {/* Left: 3 Stacked Cards */}
          <div className="adviest-insights-tabs-col">
            {TABS.map((tab, idx) => (
              <motion.div 
                key={tab.id}
                className={`adviest-insight-card ${tab.bgClass} ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
                variants={blurTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
              >
                <div className="adviest-insight-card-inner">
                  <div className="adviest-insight-card-top">
                    <span className="adviest-insight-tag">{tab.tag}</span>
                    <h3 className="adviest-insight-title">{tab.title}</h3>
                  </div>
                  <p className="adviest-insight-desc">{tab.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Large Featured Media Card */}
          <motion.div 
            className="adviest-insights-media-col"
            variants={blurTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={{ delay: 0.25, duration: 0.7 }}
          >
            <div className="adviest-insights-photo-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1980&h=2040&q=85" 
                alt="Student evaluating university insights and campus analytics"
                className="adviest-insights-main-photo"
              />

              {/* Floating Chart Metric Overlay */}
              <div className="adviest-insights-floating-chart">
                <div className="adviest-mini-chart-card">
                  <div className="adviest-mini-chart-header">
                    <span className="adviest-mini-label">Verified Student Accuracy</span>
                    <span className="adviest-mini-value">99.4%</span>
                  </div>
                  <div className="adviest-mini-bars">
                    <span style={{ height: '40%' }} />
                    <span style={{ height: '70%' }} />
                    <span style={{ height: '55%' }} />
                    <span style={{ height: '90%' }} className="highlight" />
                    <span style={{ height: '65%' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
