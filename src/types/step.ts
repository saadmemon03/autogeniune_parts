export type StepIconKey = 'Search' | 'CheckCircle' | 'Lock' | 'Box';

export interface Step {
  num: string;
  title: string;
  desc: string;
  /** Only used by the 'icon' StepCard variant (How It Works). */
  icon?: StepIconKey;
}