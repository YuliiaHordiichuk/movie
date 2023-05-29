import { Creator, Genres, Languages, LastEpisode, SeasonDetails } from '../../api/common.types';

import type { QueryParams } from '../../core/http/HttpClient.types';
import type { TrendingTimeWindow, CastItem } from '../common.types';
import type { TVItemAPI, TVDetailsAPI } from '../../api/tv/TV_API.types';
import type { CastAPI } from '../../api/common.types';

export { MEDIA_TYPES, GENDER_TYPES } from '../../configs/movie.config';
export { QueryParams, TrendingTimeWindow, TVItemAPI, TVDetailsAPI, CastAPI, CastItem };

export interface TV {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: Date;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
  type: string;
}

export interface TVDetails {
  backdrop_path: string;
  created_by: Creator[];
  episode_run_time: number[];
  first_air_date: Date;
  genres: Genres[];
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisode;
  name: string;
  next_episode_to_air: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: SeasonDetails[];
  spoken_languages: Languages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
