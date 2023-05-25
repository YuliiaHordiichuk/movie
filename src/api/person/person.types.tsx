export interface PersonDetailsAPI {
  birthday: string;
  known_for_department: string;
  deathday: string;
  id: number;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
}

export interface PersonCreditsAPI {
  cast: PersonCreditsCastAPI[];
  crew: Record<string, unknown>[];
  id: number;
}

export interface PersonCreditsCastAPI {
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
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  character: string;
  backdrop_path: string;
  popularity: number;
  credit_id: string;
}
