import { Genres, Languages, ListAPIResponse, UIList } from '../common.types';
import { MEDIA_TYPES } from '../../enums/common';

export { MEDIA_TYPES, GENDER_TYPES } from '../../enums/common';
export type { CastAPI, UIList, TrendingTimeWindow, CastItem, CreditsAPI } from '../common.types';
export type { QueryParams } from '../../core/http/HttpClient.types';
export type MovieListResponse = ListAPIResponse<MovieItemAPI>;

export interface MovieItemAPI {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  type: string;
}

export interface MovieDetailsAPI {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genres[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  type: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genres[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  revenue: number;
  runtime: string;
  spoken_languages: Languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
  type: MEDIA_TYPES.MOVIE;
}

export interface TrendingMoviesList {
  day: UIList;
  week: UIList;
}
