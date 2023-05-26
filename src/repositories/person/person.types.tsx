import type {
  PersonCreditsCastAPI,
  PersonDetailsAPI
} from '../../api/person/person.types';

export { GENDER_TYPES } from '../../configs/movie.config';
export { PersonCreditsCastAPI, PersonDetailsAPI };

export interface PersonDetails {
  birthday: Date;
  known_for_department: string;
  deathday: Date;
  id: number;
  name: string;
  also_known_as: string[];
  gender: string;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
  age: number;
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
  poster_path: string;
  first_air_date: Date;
  vote_average: number;
  vote_count: number;
  character: string;
  backdrop_path: string;
  popularity: number;
  credit_id: string;
}
