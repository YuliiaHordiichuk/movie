import { API } from './API';
import { PersonCreditsApi, PersonDetailsApi } from './types';

class PersonApiClass {
  basePath = '/person';

  public async getPersonDetails(id: string): Promise<PersonDetailsApi> {
    const endpoint = `${this.basePath}/${id}`;
    return await API.request<PersonDetailsApi>(endpoint);
  }

  public async getPersonCredits(id: string): Promise<PersonCreditsApi> {
    const endpoint = `${this.basePath}/${id}/combined_credits`;
    return await API.request<PersonCreditsApi>(endpoint);
  }
}

const PersonApi = new PersonApiClass();
export { PersonApi };
