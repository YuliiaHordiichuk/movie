import { httpClient } from '../../../core/http/HttpClient';
import { MovieDetailsAPI, CreditsAPI } from '../Movie.types';

class MovieApiClass {
  public getItem(id: string) {
    return httpClient.get<MovieDetailsAPI>(`/movie/${id}`);
  }
  public getCredits(id: string) {
    return httpClient.get<CreditsAPI>(`/movie/${id}/credits`);
  }
}

const MovieAPI = new MovieApiClass();
export { MovieAPI };
