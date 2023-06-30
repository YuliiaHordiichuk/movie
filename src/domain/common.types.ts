export type UIList = UICard[];
export type TrendingTimeWindow = 'day' | 'week';

export interface UICard {
  poster_path: string;
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

export interface ListAPIResponse<ListType> {
  page: number;
  results: ListType[];
  total_results: number;
  total_pages: number;
}

export interface CreditsAPI {
  cast: CastAPI[];
  crew: Record<string, unknown>[];
}

export interface CastAPI {
  adult: boolean;
  gender: number;
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

export interface LastEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface SeasonDetails {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Languages {
  iso_639_1: string;
  name: string;
}

export interface Cast {
  name: string;
  character: string;
  poster_path: string | null;
  id: number;
}

export interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}
