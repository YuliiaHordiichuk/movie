export interface UICard {
  poster_path: string | null;
  detail?: string;
  id: number;
  title: string;
  vote_average?: number;
  path: string;
}

export interface CastItem {
  adult: boolean;
  gender: string;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export type UIList = UICard[];
export type TrendingTimeWindow = 'day' | 'week';
