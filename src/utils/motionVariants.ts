import { Variants } from 'framer-motion';

/**
 * Blur Fade Animation Variants for Text Elements
 * Elements transition from blurred (blur(12px)), semi-transparent, and translated down
 * into sharp (blur(0px)), fully visible, and positioned naturally.
 */
export const blurTextVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: (custom = {}) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: custom.duration || 0.5,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const blurAssetVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: (custom = {}) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/**
 * Stagger Container Variants
 * Automatically staggers child elements so each text item reveals one after the other.
 */
export const blurStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || 0.12,
      delayChildren: custom.delay || 0.05,
    },
  }),
};

/**
 * Full Page Blur Opening Animation
 * Gives each page view a rich, cinematic optical entrance and exit.
 */
export const pageBlurMotion: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(14px)',
    y: 16,
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(12px)',
    y: -14,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

