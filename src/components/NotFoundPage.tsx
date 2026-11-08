import React from 'react';
import { motion } from 'framer-motion';
import { AdviestButton } from './AdviestButton';
import { BlurText } from './BlurText';
import { blurAssetVariants } from '../utils/motionVariants';

interface NotFoundPageProps {
  onNavigateHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="notfound-page-wrapper">
      <div className="adviest-container notfound-container">
        {/* 3D Isometric 404 Illustration */}
        <motion.div 
          className="notfound-illustration-box adviest-blur-stabilized"
          variants={blurAssetVariants}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.1, duration: 0.75 }}
        >
          <img 
            src="/404-illustration.png" 
            alt="404 Page Not Found Illustration" 
            className="notfound-img"
          />
        </motion.div>

        {/* Heading */}
        <BlurText 
          as="h1"
          text="Oops!"
          mode="letter"
          className="notfound-title"
          delay={0.22}
        />

        {/* Subtitle */}
        <BlurText 
          as="p"
          text="Page not found, please try again or go back Home."
          mode="word"
          className="notfound-subtitle"
          delay={0.34}
        />

        {/* Back to Home Button */}
        <motion.div
          variants={blurAssetVariants}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.46, duration: 0.65 }}
        >
          <AdviestButton 
            type="button" 
            title="Back to Home"
            onClick={onNavigateHome}
            variant="primary"
            className="notfound-home-adviest-btn"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
