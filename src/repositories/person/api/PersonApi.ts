import { useGet } from '../../../core/http/hooks/useGet';
import { PersonCreditsAPI, PersonDetailsAPI } from '../Person.types';
class PersonAPIClass {
  public getDetails(id: string) {
    return useGet<PersonDetailsAPI>(`/person/${id}`);
  }

  public getCredits(id: string) {
    return useGet<PersonCreditsAPI>(`/person/${id}/combined_credits`);
  }
}

const PersonAPI = new PersonAPIClass();
export { PersonAPI };
