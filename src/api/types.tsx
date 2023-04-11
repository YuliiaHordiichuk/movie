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

export type RequestConfig =  Record<string, unknown>;


