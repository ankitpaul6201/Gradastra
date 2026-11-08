import React from 'react';
import { motion } from 'framer-motion';
import { BlurText } from './BlurText';
import { blurTextVariants, blurAssetVariants } from '../utils/motionVariants';

interface DifferenceItem {
  counter: string;
  title: string;
  description: string;
}

const DIFFERENCES: DifferenceItem[] = [
  {
    counter: '01',
    title: 'Zero Commission. Zero Drama.',
    description: 'No university kickbacks. No sales targets. We never push colleges for admission commissions.',
  },
  {
    counter: '02',
    title: 'Real Seniors, Not Sales Agents',
    description: 'Talk 1-on-1 with verified students actually attending your colleges—not sales counselors reading brochures.',
  },
  {
    counter: '03',
    title: 'Unfiltered Campus Realities',
    description: 'The ground truth on real workloads, faculty, attendance rules, hostel food, and hidden living costs.',
  },
  {
    counter: '04',
    title: 'Real Placement Truth',
    description: 'Authentic median packages and real hiring numbers—cutting through inflated marketing claims.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="adviest-section adviest-services-section">
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
          <span className="adviest-section-badge">[ WHY WE'RE DIFFERENT ]</span>
        </motion.div>

        {/* Section Header */}
        <div className="adviest-section-header-split">
          <BlurText 
            as="h2"
            text="No Sales Pitch. No College Buttering. Just Facts."
            mode="letter"
            className="adviest-section-title"
            delay={0.05}
            stagger={0.01}
          />

          <BlurText 
            as="p"
            text="No college partnerships. No sponsored rankings. Just independent, student-backed guidance so you make the right choice."
            mode="word"
            className="adviest-section-subtitle"
            delay={0.12}
            stagger={0.02}
          />
        </div>

        {/* 2-Column Content */}
        <div className="adviest-services-grid">
          {/* Left Column: Visual Media Box with Chart Overlay */}
          <motion.div 
            className="adviest-services-media-col"
            variants={blurAssetVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="adviest-services-photo-box adviest-blur-stabilized">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1336&h=1616&q=85" 
                alt="Real senior students sharing their campus experiences"
                className="adviest-services-photo"
              />

              {/* Floating Intelligence Analytics Widget */}
              <div className="adviest-floating-widget">
                <img 
                  src="https://framerusercontent.com/images/w3a6K30kwRgfW5LWY8jl0URTDwo.png?width=1688&height=800" 
                  alt="College comparison and verified education insights" 
                  className="adviest-widget-img"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean List Items Explaining What Makes Us Unique */}
          <div className="adviest-services-list-col">
            {DIFFERENCES.map((item, index) => (
              <motion.div 
                key={item.counter} 
                className="adviest-service-list-item adviest-blur-stabilized"
                variants={blurAssetVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
              >
                <div className="adviest-service-counter-circle">
                  {item.counter}
                </div>
                <div className="adviest-service-content">
                  <h3 className="adviest-service-title">{item.title}</h3>
                  <p className="adviest-service-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Bottom Punchline Statement */}
            <motion.div 
              className="adviest-services-footer-quote"
              variants={blurAssetVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={{ delay: 0.35, duration: 0.5 }}
            >
              <p className="adviest-services-quote-text">
                Because your college decision deserves facts, not a sales pitch.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
