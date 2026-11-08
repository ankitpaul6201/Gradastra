import React from 'react';
import { motion } from 'framer-motion';
import { AdviestButton } from './AdviestButton';

interface EnvelopeFeedbackCardProps {
  status: 'success' | 'error';
  errorMessage?: string;
  onReset: () => void;
  onNavigateHome?: () => void;
}

export const EnvelopeFeedbackCard: React.FC<EnvelopeFeedbackCardProps> = ({
  status,
  errorMessage,
  onReset,
  onNavigateHome,
}) => {
  const isSuccess = status === 'success';

  return (
    <motion.div
      className="envelope-feedback-card"
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        padding: '0',
        textAlign: 'center',
        maxWidth: '480px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Animated Envelope Graphic */}
      <div 
        style={{
          position: 'relative',
          width: '160px',
          height: '130px',
          margin: '0 auto 20px auto',
        }}
      >
        <svg 
          viewBox="0 0 160 130" 
          width="160" 
          height="130" 
          style={{ overflow: 'visible', display: 'block' }}
        >
          {/* Layer 1: Envelope Back Wall */}
          <polygon points="10,45 80,10 150,45 150,115 10,115" fill="#CBD5E1" />
          
          {/* Layer 1b: Interior Flap Shadow */}
          <polygon points="10,45 80,72 150,45 80,10" fill="#94A3B8" />

          {/* Layer 2: Animated Sliding Card (Green with Check for success, Red with Cross for error) */}
          <g>
            <motion.g
              initial={{ y: -38, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 22,
                delay: 0.18,
              }}
            >
              {/* Rounded Card Rectangle */}
              <rect
                x="45"
                y="22"
                width="70"
                height="62"
                rx="8"
                fill={isSuccess ? '#48BB78' : '#EF4444'}
                filter="drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15))"
              />

              {/* Icon inside Card */}
              {isSuccess ? (
                // Bold White Checkmark Tick
                <path
                  d="M 64 53 L 75 64 L 97 42"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                // Bold White Cross for Error
                <g>
                  <line
                    x1="66"
                    y1="42"
                    x2="94"
                    y2="66"
                    stroke="#FFFFFF"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="94"
                    y1="42"
                    x2="66"
                    y2="66"
                    stroke="#FFFFFF"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                </g>
              )}
            </motion.g>
          </g>

          {/* Layer 3: Envelope Front Pocket (Tucks the bottom half of the card) */}
          {/* Left Flap */}
          <polygon points="10,115 10,45 80,78" fill="#E2E8F0" />

          {/* Right Flap */}
          <polygon points="150,115 150,45 80,78" fill="#EBF0F5" />

          {/* Bottom Flap */}
          <polygon points="10,115 80,68 150,115" fill="#F8FAFC" />
        </svg>
      </div>

      {/* Main Heading */}
      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 38px)',
          fontWeight: 800,
          color: '#111827',
          letterSpacing: '-0.02em',
          marginBottom: '14px',
          lineHeight: 1.15,
        }}
      >
        {isSuccess ? 'Thank You!' : 'Submission Failed!'}
      </h2>

      {/* Descriptive Paragraph */}
      <p
        style={{
          fontSize: '15px',
          lineHeight: 1.6,
          color: '#4B5563',
          maxWidth: '440px',
          margin: '0 auto 32px auto',
          textWrap: 'pretty',
        }}
      >
        {isSuccess
          ? 'Our student advisory team has received your message safely, and a verified senior advisor will connect with you within 24 business hours.'
          : errorMessage || 'We could not deliver your message due to a network connection issue. Please check your connection and try again.'}
      </p>

      {/* Signature Rolling Adviest Button matching the site button style */}
      <AdviestButton
        type="button"
        title={isSuccess ? 'Back to Home' : 'Try Again'}
        onClick={isSuccess ? (onNavigateHome || onReset) : onReset}
        variant="primary"
      />
    </motion.div>
  );
};

export default EnvelopeFeedbackCard;
