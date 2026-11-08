export interface Subtitle48Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Variant 1" → ajwmX82GS
   *   "Variant 2" → mZJeRLKkS
   *   "Variant 3" → DRqzetxvm
   *   "Variant 4" → HdtzUbiik
   */
  variant?: 'Variant 1' | 'Variant 2' | 'Variant 3' | 'Variant 4' | 'ajwmX82GS' | 'mZJeRLKkS' | 'DRqzetxvm' | 'HdtzUbiik';
  /**
   * Title — pass as `zTskitVfw` not `title`.
   * @default "ABOUT US"
   */
  zTskitVfw?: string;
  onzTskitVfwChange?: string;
  /** Additional properties */
  [key: string]: unknown;
}
