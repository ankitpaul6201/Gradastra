import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface BlurTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  delay?: number;
  stagger?: number;
  mode?: 'letter' | 'word';
  once?: boolean;
  style?: React.CSSProperties;
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  as = 'div',
  delay = 0,
  stagger,
  mode = 'letter',
  once = true,
  style = {},
}) => {
  const Component = motion[as] as any;
  const words = text.split(' ');

  const defaultStagger = mode === 'letter' ? 0.015 : 0.035;
  const staggerValue = stagger !== undefined ? stagger : defaultStagger;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerValue,
        delayChildren: delay,
      },
    },
  };

  const isInline = as === 'span';

  return (
    <Component
      className={`blur-text-container adviest-blur-stabilized ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0 }}
      style={{
        display: isInline ? 'inline-block' : 'block',
        willChange: 'transform, opacity, filter',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        ...style,
      }}
    >
      {mode === 'letter' ? (
        words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="blur-word-wrapper adviest-blur-stabilized"
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: wordIndex === words.length - 1 ? 0 : '0.28em',
            }}
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letterVariants}
                className="blur-char-span adviest-blur-stabilized"
                style={{
                  display: 'inline-block',
                  willChange: 'transform, opacity, filter',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))
      ) : (
        words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            variants={wordVariants}
            className="blur-word-span adviest-blur-stabilized"
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              marginRight: wordIndex === words.length - 1 ? 0 : '0.28em',
            }}
          >
            {word}
          </motion.span>
        ))
      )}
    </Component>
  );
};

export default BlurText;

