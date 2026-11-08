export interface Slideshow17Props {
  /**
   * Content — pass as `slots` not `content`.
   */
  slots?: unknown[];
  /**
   * Direction
   * Options: "left" | "right" | "top" | "bottom"
   */
  direction?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Auto Play — pass as `autoPlayControl` not `autoPlay`.
   * @default true
   */
  autoPlayControl?: boolean;
  /**
   * Interval — pass as `intervalControl` not `interval`.
   * Range: min: 0.5, max: 10, step: 0.1
   * @default 1.5
   */
  intervalControl?: number;
  /**
   * Draggable — pass as `dragControl` not `draggable`.
   * @default false
   */
  dragControl?: boolean;
  /**
   * Current — pass as `startFrom` not `current`.
   * Range: min: 0, max: 10
   */
  startFrom?: number;
  /**
   * Effects — pass as `effectsOptions` not `effects`.
   */
  effectsOptions?: Record<string, unknown>;
  /**
   * Align — pass as `alignment` not `align`.
   * Options: "flex-start" | "center" | "flex-end"
   * @default "center"
   */
  alignment?: 'flex-start' | 'center' | 'flex-end';
  /**
   * Items — pass as `itemAmount` not `items`.
   * Range: min: 1, max: 10
   */
  itemAmount?: number;
  /**
   * Gap
   * Range: min: 0
   */
  gap?: number;
  /**
   * Padding
   * Range: min: 0
   * @default 0
   */
  padding?: string;
  /**
   * Radius — pass as `borderRadius` not `radius`.
   * Range: min: 0, max: 500
   * @default 0
   */
  borderRadius?: number;
  /**
   * Transition — pass as `transitionControl` not `transition`.
   */
  transitionControl?: object;
  /**
   * Clipping — pass as `fadeOptions` not `clipping`.
   */
  fadeOptions?: Record<string, unknown>;
  /**
   * Arrows — pass as `arrowOptions` not `arrows`.
   */
  arrowOptions?: Record<string, unknown>;
  /**
   * Dots — pass as `progressOptions` not `dots`.
   */
  progressOptions?: Record<string, unknown>;
  /** Additional properties */
  [key: string]: unknown;
}
