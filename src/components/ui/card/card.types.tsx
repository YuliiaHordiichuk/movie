export interface CardProps {
  id: number;
  image: string | null;
  title: string;
  detail?: string;
  rate?: number;
  place?: string;
  path: string;
}
