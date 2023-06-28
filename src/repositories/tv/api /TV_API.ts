import { httpClient } from '../../../core/http/HttpClient';
import { TVDetailsAPI, CreditsAPI } from '../TV.types';

class TVApiClass {
  public getItem(id: string) {
    return httpClient.get<TVDetailsAPI>(`/tv/${id}`);
  }
  public getCredits(id: string) {
    return httpClient.get<CreditsAPI>(`/tv/${id}/credits`);
  }
}

const TV_API = new TVApiClass();
export { TV_API };
