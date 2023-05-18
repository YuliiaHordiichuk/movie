export interface UICard {
  poster_path: string | null;
  detail?: string;
  id: number;
  title: string;
  vote_average?: number;
  path: string;
}

export type UIList = UICard[];

export interface Movie {
  poster_path: string | null;
  overview: string;
  release_date: string;
  id: number;
  title: string;
  popularity: number;
  type: string;
  vote_average: number;
}

export type TrendingTimeWindow = 'day' | 'week';
export interface TrendingMovies {
  day: UIList;
  week: UIList;
}

export interface MovieDetails {
  backdrop_path: string;
  genres: Genres[];
  id: number;
  languages: string[];
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: Date;
  duration: string;
  original_title: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  type: 'movie' | 'tv';
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

export interface PersonDetails {
  birthday: string | null;
  age: number | null;
  known_for_department: string;
  deathday: string | null;
  id: number;
  name: string;
  also_known_as: string[];
  gender: string;
  biography: string;
  place_of_birth: string | null;
  poster_path: string | null;
}

export interface PersonCreditsCast {
  id: number;
  original_language: string;
  episode_count: number;
  overview: string;
  origin_country: string[];
  original_name: string;
  genre_ids: number[];
  title: string;
  media_type: string;
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  character: string;
  backdrop_path: string | null;
  popularity: number;
  credit_id: string;
}
