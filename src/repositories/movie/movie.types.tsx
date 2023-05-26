import { Genres } from '../../api/common.types';
import { MEDIA_TYPES } from '../../configs/movie.config';
import { UIList } from '../common.types';

import type { QueryParams } from '../../core/http/http.types';
import type { TrendingTimeWindow, CastItem } from '../common.types';
import type {
  MovieItemAPI,
  MovieDetailsAPI
} from '../../api/movie/movie.types';
import type { CastAPI } from '../../api/common.types';

export { MEDIA_TYPES, GENDER_TYPES } from '../../configs/movie.config';

export {
  QueryParams,
  TrendingTimeWindow,
  CastItem,
  MovieItemAPI,
  MovieDetailsAPI,
  CastAPI
};

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
  spoken_languages: string[];
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
