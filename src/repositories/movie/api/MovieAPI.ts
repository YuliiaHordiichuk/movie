import { useGet } from '../../../core/http/hooks/useGet';
import { MovieDetailsAPI, CreditsAPI } from '../Movie.types';

class MovieApiClass {
  public getItem(id: string) {
    return useGet<MovieDetailsAPI>(`/movie/${id}`);
  }
  public getCredits(id: string) {
    return useGet<CreditsAPI>(`/movie/${id}/credits`);
  }
}

const MovieAPI = new MovieApiClass();
export { MovieAPI };
