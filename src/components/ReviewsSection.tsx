import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BlurText } from './BlurText';
import { blurTextVariants } from '../utils/motionVariants';

interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Chen",
    designation: "Senior @ MIT (Computer Science & AI)",
    quote: "“Gradastra’s senior gave me the unfiltered truth about MIT coursework, saving my first semester from costly mistakes.”",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sophie Miller",
    designation: "Finalist @ Oxford (Jurisprudence / Law)",
    quote: "“Gradastra helped me evaluate Oxford collegiate endowments and accommodation guarantees with zero commercial sales bias.”",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Vikram Sethi",
    designation: "Master's Candidate @ TU Munich (Informatics)",
    quote: "“A senior’s warning about Munich student housing helped me apply early and avoid steep temporary accommodation costs.”",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Aarav Sharma",
    designation: "Incoming CS Student, University of Waterloo",
    quote: "“Speaking 1-on-1 with a verified 3rd-year senior gave me clarity no overseas education agency could offer.”",
    image: "https://framerusercontent.com/images/pWdflF1Kk7imAbImoSDBfTT3JsE.png?width=1144&height=1200",
  },
  {
    name: "Elena Rostova",
    designation: "Master's Candidate, TU Munich",
    quote: "“The authentic breakdown of European thesis supervisor dynamics and living costs gave me genuine relocation confidence.”",
    image: "https://framerusercontent.com/images/8nmd4a4Fuz2gP25iKfTc5Obrs.png?width=1144&height=1200",
  },
  {
    name: "Hao Rong",
    designation: "Junior @ NUS Singapore (Computer Science)",
    quote: "“Candid advice on NUS bell-curve grading and Silicon Valley internships gave me the exact roadmap I needed.”",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Emily Johnson",
    designation: "Finance Operations Manager",
    quote: "“Their authentic advisory approach provided complete clarity and confidence throughout our international higher education decisions.”",
    image: "https://framerusercontent.com/images/uRKXHBxeoPwtybT5XgJa7vvt2Q.jpg?width=1144&height=1200",
  },
  {
    name: "Daniel Carter",
    designation: "Chief Financial Officer",
    quote: "“Independent student perspectives enabled confident, well-aligned choices for our family’s educational and financial planning.”",
    image: "https://framerusercontent.com/images/6KOKZ6o9umNtbSW8DNXdQdttgbU.png?width=1144&height=1200",
  },
];

// True 3D Rotating Cube Transition Variants - Lag-free, responsive hardware-accelerated cube rotation
const cubeVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    rotateY: direction > 0 ? -42 : 42,
    opacity: 0.3,
    scale: 0.9,
    transformPerspective: 1200,
  }),
  center: {
    x: '0%',
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transformPerspective: 1200,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 28, mass: 0.65 },
      rotateY: { type: 'spring', stiffness: 320, damping: 28, mass: 0.65 },
      scale: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    rotateY: direction > 0 ? 42 : -42,
    opacity: 0,
    scale: 0.9,
    transformPerspective: 1200,
    transition: {
      duration: 0.25,
      ease: [0.32, 0, 0.67, 0],
    },
  }),
};

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastClickRef = React.useRef(0);

  const prevSlide = () => {
    const now = Date.now();
    if (now - lastClickRef.current < 260) return;
    lastClickRef.current = now;
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    const now = Date.now();
    if (now - lastClickRef.current < 260) return;
    lastClickRef.current = now;
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="adviest-reviews-section-wrapper">
      <div className="adviest-reviews-outer">
        <div className="adviest-reviews-banner adviest-blur-stabilized">
          {/* Header Controls */}
          <div className="adviest-reviews-header">
            <motion.div 
              className="adviest-badge-row"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={{ delay: 0, duration: 0.5 }}
            >
              <span className="adviest-section-badge" style={{ color: '#FFFFFF' }}>
                [ VERIFIED STUDENT STORIES ]
              </span>
            </motion.div>

            {/* Carousel Navigation Arrows (Desktop & Tablet) */}
            <div className="adviest-reviews-arrows">
              <button 
                onClick={prevSlide}
                className="adviest-arrow-btn"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft size={20} color="#FFFFFF" />
              </button>
              <button 
                onClick={nextSlide}
                className="adviest-arrow-btn"
                aria-label="Next Testimonial"
              >
                <ArrowRight size={20} color="#FFFFFF" />
              </button>
            </div>
          </div>

          {/* Heading */}
          <BlurText 
            as="h2"
            text="Trusted by Prospective Students and Families Worldwide"
            mode="letter"
            className="adviest-reviews-title"
            delay={0.1}
            stagger={0.015}
          />

          {/* 3D Cube Viewport for Desktop & Tablet (Image 1 Layout) */}
          <div className="adviest-reviews-3d-viewport">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cubeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset }) => {
                  if (offset.x < -40) {
                    nextSlide();
                  } else if (offset.x > 40) {
                    prevSlide();
                  }
                }}
                className="adviest-testimonial-item"
              >
                {/* Clean White Quote Card */}
                <div className="adviest-testimonial-card">
                  {/* Top Quotation Mark */}
                  <svg 
                    width="36" 
                    height="26" 
                    viewBox="0 0 36 26" 
                    fill="none" 
                    className="adviest-testimonial-quote-icon"
                  >
                    <path 
                      d="M0 15.6C0 6.98 5.6 0 14.36 0v5.2c-5.06 0-7.83 3.26-7.83 7.84H14.36V26H0V15.6zm21.64 0C21.64 6.98 27.24 0 36 0v5.2c-5.06 0-7.83 3.26-7.83 7.84H36V26H21.64V15.6z" 
                      fill="#111111" 
                    />
                  </svg>

                  {/* Middle: Large Quote Statement */}
                  <blockquote className="adviest-testimonial-quote">
                    {current.quote}
                  </blockquote>

                  {/* Bottom: Author Avatar + Name + Designation */}
                  <div className="adviest-testimonial-author">
                    <img 
                      src={current.image} 
                      alt={current.name} 
                      className="adviest-testimonial-avatar" 
                    />
                    <div>
                      <div className="adviest-testimonial-name">{current.name}</div>
                      <div className="adviest-testimonial-role">{current.designation}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
