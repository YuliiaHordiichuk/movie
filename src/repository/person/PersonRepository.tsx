import { PersonAPI } from '../../api/person/PersonApi';
import { getAge } from '../../core/utils/getAge';

import {
  PersonCreditsCastAPI,
  PersonDetailsAPI
} from '../../api/person/person.types';
import { GENDER_TYPES } from '../../configs/movie.config';
import { PersonCreditsCast, PersonDetails } from './person.types';

class PersonRepositoryClass {
  private transformPersonData(person: PersonDetailsAPI): PersonDetails {
    const age = getAge(new Date(person.birthday));
    const gender =
      person.gender === 1 ? GENDER_TYPES.FEMALE : GENDER_TYPES.MALE;
    return {
      ...person,
      birthday: new Date(person.birthday),
      deathday: new Date(person.deathday),
      gender,
      age
    };
  }
  private transformCast(movie: PersonCreditsCastAPI): PersonCreditsCast {
    return {
      ...movie,
      first_air_date: new Date(movie.first_air_date),
      vote_average: Math.round(movie.vote_average * 10)
    };
  }
  public async getDetails(id: string) {
    const person = await PersonAPI.getDetails(id);
    return this.transformPersonData(person);
  }
  public async getMovieList(id: string) {
    const credits = await PersonAPI.getCredits(id);
    return credits.cast.map(this.transformCast);
  }
}

const Person = new PersonRepositoryClass();
export { Person };
