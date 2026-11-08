import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndiaIcon } from './icons/IndiaIcon';
import { WorldIcon } from './icons/WorldIcon';
import { BlurText } from './BlurText';
import { blurTextVariants, blurAssetVariants } from '../utils/motionVariants';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const INDIAN_SERVICES: ServiceItem[] = [
  {
    id: 'ind-1',
    title: 'Connect with Verified Seniors',
    description: 'Book direct 1-on-1 private sessions with verified seniors studying at IITs, NITs, BITS, IIMs, DU, and premier private colleges for genuine placement reality and hostel truth.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&h=900&q=85'
  },
  {
    id: 'ind-2',
    title: 'College Shortlisting by Rank & Cutoff',
    description: 'Accurate college recommendations based on your JEE Main/Advanced, NEET, CUET, CAT, or state CET ranks and closing trends—maximizing your chances with zero biased agent advice.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=900&q=85'
  },
  {
    id: 'ind-3',
    title: 'Fee Structure & True Placement ROI',
    description: 'Transparent financial breakdown separating hidden hostel, mess, and exam charges, alongside verified median CTC placement reports versus inflated marketing claims.',
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&h=900&q=85'
  },
  {
    id: 'ind-4',
    title: 'Counseling & Choice-Filling Guide',
    description: 'Step-by-step guidance for JoSAA, CSAB, JAC, CUET, and state counseling portals—crafting customized preference order choice-filling lists to avoid seat allotment pitfalls.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=85'
  }
];

const FOREIGN_SERVICES: ServiceItem[] = [
  {
    id: 'for-1',
    title: 'Connect with Verified Seniors',
    description: 'Book direct 1-on-1 private sessions with verified seniors currently enrolled in US, UK, German, and Canadian universities for unfiltered truth on coursework, professors, and campus life.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&h=900&q=85'
  },
  {
    id: 'for-2',
    title: 'University Shortlisting by Eligibility',
    description: 'Personalized university recommendations matched strictly to your GPA, standardized GRE/GMAT/IELTS scores, and profile eligibility—with zero commercial agency kickbacks.',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&h=900&q=85'
  },
  {
    id: 'for-3',
    title: 'Complete Budget & Cost Analysis',
    description: 'Transparent, end-to-end financial forecasting covering authentic tuition fees, hidden lab charges, local housing rents, grocery indices, and realistic part-time work viability.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=900&q=85'
  },
  {
    id: 'for-4',
    title: 'Visa Guidance & Accommodation Guidance',
    description: 'Comprehensive student visa documentation support (F-1 / Tier 4), financial proof audits, interview preparation strategies, and senior-led verified accommodation guidance.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&h=900&q=85'
  }
];

export const ExperienceSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'indian' | 'foreign'>('indian');

  const services = activeCategory === 'indian' ? INDIAN_SERVICES : FOREIGN_SERVICES;

  return (
    <section id="experience" className="adviest-section adviest-experience-section">
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
          <span className="adviest-section-badge">[ COMPLETE ADVISORY SERVICES ]</span>
        </motion.div>

        {/* Short, SEO-Friendly Section Title */}
        <div className="adviest-section-header">
          <BlurText 
            as="h2"
            text="Complete Student Advisory Services"
            mode="letter"
            className="adviest-section-title"
            delay={0.05}
            stagger={0.012}
          />
        </div>

        {/* Category Switcher Tabs: Indian Universities vs Foreign Universities */}
        <motion.div 
          className="adviest-category-tabs-container"
          variants={blurAssetVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          custom={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="adviest-category-tabs" role="tablist" aria-label="Advisory Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'indian'}
              className={`adviest-category-tab ${activeCategory === 'indian' ? 'active' : ''}`}
              onClick={() => setActiveCategory('indian')}
            >
              {activeCategory === 'indian' && (
                <motion.div
                  layoutId="adviestCategoryPill"
                  className="adviest-category-pill-active"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 26,
                    mass: 0.7
                  }}
                />
              )}
              <span className="adviest-tab-content">
                <IndiaIcon className="adviest-tab-svg" />
                <span>Indian Universities</span>
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'foreign'}
              className={`adviest-category-tab ${activeCategory === 'foreign' ? 'active' : ''}`}
              onClick={() => setActiveCategory('foreign')}
            >
              {activeCategory === 'foreign' && (
                <motion.div
                  layoutId="adviestCategoryPill"
                  className="adviest-category-pill-active"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 26,
                    mass: 0.7
                  }}
                />
              )}
              <span className="adviest-tab-content">
                <WorldIcon className="adviest-tab-svg" />
                <span>Foreign Universities</span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Alternating Zig-Zag Advisory Rows */}
        <motion.div 
          key={activeCategory} 
          className="adviest-zigzag-list"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {services.map((item, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={item.id} 
                className={`adviest-zigzag-row ${isImageLeft ? 'adviest-zigzag-left' : 'adviest-zigzag-right'}`}
              >
                {isImageLeft ? (
                  <>
                    {/* Image to the Left */}
                    <div className="adviest-zigzag-col-image">
                      <div className="adviest-zigzag-image-box">
                        <motion.div 
                          className="adviest-zigzag-sweep"
                          initial={{ x: 0, y: 0 }}
                          whileInView={{ x: '105%', y: '105%' }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{ delay: 0.15, duration: 1.0, ease: [0.85, 0, 0.15, 1] }}
                        />
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="adviest-zigzag-img"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Contents to the Right */}
                    <div className="adviest-zigzag-col-content">
                      <h3 className="adviest-zigzag-title">{item.title}</h3>
                      <p className="adviest-zigzag-desc">{item.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Contents to the Left */}
                    <div className="adviest-zigzag-col-content">
                      <h3 className="adviest-zigzag-title">{item.title}</h3>
                      <p className="adviest-zigzag-desc">{item.description}</p>
                    </div>

                    {/* Image to the Right */}
                    <div className="adviest-zigzag-col-image">
                      <div className="adviest-zigzag-image-box">
                        <motion.div 
                          className="adviest-zigzag-sweep"
                          initial={{ x: 0, y: 0 }}
                          whileInView={{ x: '105%', y: '105%' }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{ delay: 0.15, duration: 1.0, ease: [0.85, 0, 0.15, 1] }}
                        />
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="adviest-zigzag-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
