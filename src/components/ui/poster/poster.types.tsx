export interface PosterProps {
  src: string | null;
  title: string;
  loading?: 'lazy' | 'eager';
  classname?: string;
}
