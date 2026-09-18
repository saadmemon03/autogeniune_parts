// Keys of the lucide-react icons used for category tiles.
// Kept as string keys (not JSX) so this data can live in a plain .ts data file.
export type CategoryIconKey = 'Disc' | 'Settings' | 'Wrench' | 'Filter' | 'Zap' | 'PaintBucket';

export interface Category {
  title: string;
  icon: CategoryIconKey;
}