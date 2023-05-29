import { ListAPIResponse, Genres, Languages } from '../common.types';
import type { CreditsAPI } from '../common.types';
import type { QueryParams } from '../../core/http/HttpClient.types';

export { CreditsAPI, QueryParams };

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

export type MovieListResponse = ListAPIResponse<MovieItemAPI>;
