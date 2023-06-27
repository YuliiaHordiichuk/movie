import { useGet } from '../../../core/http/hooks/useGet';
import { TVDetailsAPI, CreditsAPI } from '../TV.types';

class TVApiClass {
  public getItem(id: string) {
    return useGet<TVDetailsAPI>(`/tv/${id}`);
  }
  public getCredits(id: string) {
    return useGet<CreditsAPI>(`/tv/${id}/credits`);
  }
}

const TV_API = new TVApiClass();
export { TV_API };
