import { MovieApi } from "../../api/MovieApi";
import { CastApi } from "../../api/types";
import { Cast } from "../types";

class MovieCreditsDataClass {
  private transformCastList({ profile_path, id, character, name }: CastApi) : Cast {
    return {
      id, 
      character,
      name,
      poster_path: profile_path,
    };
  }

  public getMovieCast( id: string ) {
    return MovieApi.getMovieCredits(id).then(credits => credits.cast.map(this.transformCastList));
  }

  public getTVCast( id: string ) {
    return MovieApi.getTVCredits(id).then(credits => credits.cast.map(this.transformCastList));
  }
}

const MovieCreditsData = new MovieCreditsDataClass();
export { MovieCreditsData };