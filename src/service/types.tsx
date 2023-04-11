export interface Movie {
  "poster_path": string | null,
  "overview": string,
  "release_date": string,
  "id": number,
  "title": string,
  "popularity": number,
  "type" : string,
  "vote_average": number,
}

export type TrendingTimeWindow = 'day' | 'week';
export interface TrendingMovies {
  day: Movie[],
  week: Movie[],
}







