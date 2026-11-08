export interface List40Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Variant 1" → rYBTT3Ftn
   *   "Variant 2" → IW7JIin8C
   *   "Variant 3" → kFQ9o3LBN
   *   "Variant 4" → c6lASVFLs
   */
  variant?: 'Variant 1' | 'Variant 2' | 'Variant 3' | 'Variant 4' | 'rYBTT3Ftn' | 'IW7JIin8C' | 'kFQ9o3LBN' | 'c6lASVFLs';
  /**
   * Counter — pass as `FowRFWagy` not `counter`.
   * @default "01"
   */
  FowRFWagy?: string;
  onFowRFWagyChange?: string;
  /**
   * Title — pass as `otA2bGBS4` not `title`.
   * @default "Banking Advisory"
   */
  otA2bGBS4?: string;
  onotA2bGBS4Change?: string;
  /**
   * Description — pass as `McGeJqpaw` not `description`.
   * @default "We support clients with strategic banking solutions, capital structuring, and institutional financial planning for long-term financial stability."
   */
  McGeJqpaw?: string;
  onMcGeJqpawChange?: string;
  /** Additional properties */
  [key: string]: unknown;
}
