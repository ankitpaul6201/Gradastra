import React, { useState } from 'react';
import { AdviestButton } from './AdviestButton';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from './BlurText';
import { blurTextVariants, blurAssetVariants } from '../utils/motionVariants';

interface FaqSectionProps {
  onOpenContact: () => void;
}

const FAQ_ITEMS = [
  {
    id: 'free',
    question: "Is Gradastra really 100% free for students?",
    answer: "Yes, always. We never charge prospective students for exploratory research, university comparisons, or consultations with senior student advisors. We accept zero admission commissions from universities."
  },
  {
    id: 'advisors',
    question: "Who are the senior student advisors on Gradastra?",
    answer: "Our advisors are verified current university students—primarily in their third year, fourth year, or postgraduate study—who have submitted official proof of enrolment to guarantee authentic, first-hand campus experience."
  },
  {
    id: 'independent',
    question: "How is Gradastra different from education agencies?",
    answer: "Commercial admission agents typically earn financial kickbacks or referral commissions when you enrol in their partner universities. Gradastra has zero commercial agreements or admission partnerships, guaranteeing 100% independent guidance."
  },
  {
    id: 'programs',
    question: "Can I connect with students from specific majors or programs?",
    answer: "Absolutely. You can filter advisors by target institution, department, academic degree level, and language to connect directly with senior students studying your exact field of interest."
  },
  {
    id: 'become-advisor',
    question: "How can current university students become peer mentors?",
    answer: "Current students in eligible stages of study can register, securely verify their student credentials, and publish an advisor profile. Participation is voluntary, flexible, and completely student-driven."
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openId, setOpenId] = useState<string | null>('free');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="adviest-section adviest-faq-section">
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
          <span className="adviest-section-badge">[ FREQUENTLY ASKED QUESTIONS ]</span>
        </motion.div>

        {/* 2-Column Layout for Desktop / Stacked for Mobile */}
        <div className="adviest-faq-grid">
          {/* Left Column: Title + Action Button */}
          <div className="adviest-faq-left-col">
            <BlurText 
              as="h2"
              text="Frequently Asked Questions"
              mode="letter"
              className="adviest-section-title"
              delay={0.05}
              stagger={0.012}
            />

            <motion.div 
              className="adviest-faq-cta-box" 
              style={{ marginTop: '32px' }}
              variants={blurAssetVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={{ delay: 0.15, duration: 0.5 }}
            >
              <AdviestButton title="Contact Us" onClick={onOpenContact} />
            </motion.div>
          </div>

          {/* Right Column: Clean Line-Divided Accordion (Matching Reference) */}
          <div className="adviest-faq-accordion-col">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div 
                  key={item.id} 
                  className="adviest-faq-row adviest-blur-stabilized"
                  onClick={() => toggle(item.id)}
                  variants={blurAssetVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                  custom={{ delay: 0.05 + index * 0.05, duration: 0.5 }}
                >
                  <div className="adviest-faq-header-row">
                    <h3 className="adviest-faq-question">{item.question}</h3>
                    <div 
                      className={`adviest-faq-circle-btn ${isOpen ? 'open' : ''}`}
                      aria-label={isOpen ? "Collapse question" : "Expand question"}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'block', overflow: 'visible' }}
                      >
                        {/* Horizontal Bar - Fixed */}
                        <line 
                          x1="2.5" 
                          y1="8" 
                          x2="13.5" 
                          y2="8" 
                          stroke="#111827" 
                          strokeWidth="1.35" 
                          strokeLinecap="round" 
                        />
                        {/* Vertical Bar - Rotates anticlockwise (-90deg) to overlap with horizontal bar into minus icon */}
                        <motion.line 
                          x1="8" 
                          y1="2.5" 
                          x2="8" 
                          y2="13.5" 
                          stroke="#111827" 
                          strokeWidth="1.35" 
                          strokeLinecap="round" 
                          initial={false}
                          animate={{ rotate: isOpen ? -90 : 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          style={{ originX: '8px', originY: '8px' }}
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="adviest-faq-answer-wrap"
                      >
                        <p className="adviest-faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
