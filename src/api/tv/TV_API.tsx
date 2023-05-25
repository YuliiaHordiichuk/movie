import { HttpClient } from '../../core/http/HttpClient';
import { TVDetailsAPI } from './tv.types';
import { CreditsAPI } from '../common.types';

class TVApiClass {
  public getItem(id: string) {
    return HttpClient.get<TVDetailsAPI>(`/tv/${id}`);
  }
  public getCredits(id: string) {
    return HttpClient.get<CreditsAPI>(`/tv/${id}/credits`);
  }
}

const TV_API = new TVApiClass();
export { TV_API };
