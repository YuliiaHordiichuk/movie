import { 
  Creator, 
  Genres, 
  Languages, 
  LastEpisode, 
  PersonCreditsCast, 
  SeasonDetails 
} from "../service/types";

export type RequestConfig = Record<string, unknown>;
export interface ListAPIResponse<ListType> {
  "page": number, 
  "results": ListType[],
  "total_results": number, 
  "total_pages": number,
}
export interface MovieItemApi {
  "poster_path": string | null,
  "adult": boolean,
  "overview": string,
  "release_date": string,
  "genre_ids": number[],
  "id": number,
  "original_title": string,
  "original_language": string,
  "title": string,
  "backdrop_path": string,
  "popularity": number,
  "vote_count": number,
  "video": boolean,
  "vote_average": number,
  "type" : string,
};
export interface TVItemApi {
  "poster_path": string | null,
  "popularity": number,
  "id": number,
  "backdrop_path": string,
  "vote_average": number,
  "overview": string,
  "first_air_date": string,
  "origin_country": string[],
  "genre_ids": number[],
  "original_language": string,
  "vote_count": number,
  "name": string,
  "original_name": string,
  "type" : string,
};
export interface MovieDetailsApi {
  "adult": boolean,
  "backdrop_path": string | null,
  "belongs_to_collection": null | Record<string, unknown>,
  "budget": number,
  "genres": Genres[],
  "id": number,
  "original_language": string,
  "original_title": string,
  "overview": string | null,
  "popularity": number,
  "poster_path": null | string,
  "release_date": string,
  "revenue": number,
  "runtime": number | null,
  "spoken_languages": Languages[],
  "status": string,
  "tagline": string | null,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number,
};
export interface TVDetailsApi {
  "backdrop_path": string | null,
  "created_by": Creator[],
  "episode_run_time": number[],
  "first_air_date": string,
  "genres": Genres[],
  "id": number,
  "in_production": boolean,
  "languages": string[],
  "last_air_date": string,
  "last_episode_to_air": LastEpisode,
  "name": string,
  "next_episode_to_air": null,
  "number_of_episodes": number,
  "number_of_seasons": number,
  "origin_country": string[],
  "original_language": string,
  "original_name": string,
  "overview": string,
  "popularity": number,
  "poster_path": string | null,
  "seasons": SeasonDetails[]
  "spoken_languages": Languages[],
  "status": string,
  "tagline": string,
  "type": string,
  "vote_average": number,
  "vote_count": number
};
export interface CreditsApi {
  cast: CastApi[],
  crew: Record<string, unknown>[],
}
export interface CastApi {
  "adult": boolean,
  "gender": number | null,
  "id": number,
  "known_for_department": string,
  "name": string,
  "original_name": string,
  "popularity": number,
  "profile_path": string | null,
  "cast_id": number,
  "character": string,
  "credit_id": string,
  "order": number,
}

export interface PersonDetailsApi {
  "birthday": string | null,
  "known_for_department": string,
  "deathday": null | string,
  "id": number,
  "name": string,
  "also_known_as": string[],
  "gender": number,
  "biography": string,
  "popularity": number,
  "place_of_birth": string | null,
  "profile_path": string | null,
  "adult": boolean,
  "imdb_id": string,
  "homepage": null | string,
}

export interface PersonCreditsApi {
  "cast": PersonCreditsCast[],
  "crew": Record<string, unknown>[],
  "id": number,
}



