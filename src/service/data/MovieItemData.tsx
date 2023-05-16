import { imgPathBigSize } from "../variables";
import { 
  MovieDetailsApi, TVDetailsApi, 
} from "../../api/types";
import { MovieApi } from "../../api/MovieApi";
import { MovieDetails } from "../types";

class MovieItemDataClass {
  private transformMovieItem(movie : MovieDetailsApi) : MovieDetails {
    return {
      backdrop_path: `${imgPathBigSize}${movie.backdrop_path}`,
      genres : movie.genres,
      id: movie.id,
      languages: movie.spoken_languages.map(lang => lang.name),
      poster_path: movie.poster_path,
      overview: movie.overview || '',
      popularity: movie.popularity,
      release_date: new Date(movie.release_date),
      duration: movie.runtime ? `${ Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '',
      status: movie.status,
      tagline: movie.tagline || '',
      title: movie.title,
      vote_average:  Math.round(movie.vote_average * 10),
      type: 'movie',
      original_title: movie.original_title 
    };
  };

  private transformTVItem(tv: TVDetailsApi) : MovieDetails {    
    return {
      backdrop_path: `${imgPathBigSize}${tv.backdrop_path}`,
      genres : tv.genres,
      id: tv.id,
      languages: tv.spoken_languages.map(lang => lang.name),
      poster_path: tv.poster_path,
      overview: tv.overview || '',
      popularity: tv.popularity,
      release_date: new Date(tv.first_air_date),
      duration: `${tv.seasons.length} seasons`,
      status: tv.status,
      tagline: tv.tagline || '',
      title: tv.name,
      vote_average:  Math.round(tv.vote_average * 10),
      type: 'tv',
      original_title: tv.original_name 
    };
  }

  public getMovieItem( id: string ) {
    return MovieApi.getMovieItem(id).then(movie => this.transformMovieItem(movie));
  }

  public getTVItem( id: string ) {
    return MovieApi.getTVItem(id).then(tv => this.transformTVItem(tv));
  }
}

const MovieItemData = new MovieItemDataClass();
export { MovieItemData };