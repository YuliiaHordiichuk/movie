import { HttpClient } from '../../core/http/HttpClient';
import { CreditsAPI } from '../common.types';
import { MovieDetailsAPI } from './movie.types';

class MovieApiClass {
  public getItem(id: string) {
    return HttpClient.get<MovieDetailsAPI>(`/movie/${id}`);
  }
  public getCredits(id: string) {
    return HttpClient.get<CreditsAPI>(`/movie/${id}/credits`);
  }
}

const MovieAPI = new MovieApiClass();
export { MovieAPI };
