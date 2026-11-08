import type Lenis from 'lenis';

declare global {
  interface Window {
    __gradastraLenis?: Lenis | null;
  }
}

export {};

