import { PersonAPI } from '../../api/person/PersonApi';
import { getAge } from '../../core/utils/getAge';

import {
  PersonCreditsCast,
  PersonDetails,
  PersonCreditsCastAPI,
  PersonDetailsAPI,
  GENDER_TYPES
} from './person.types';

class PersonRepositoryClass {
  private transformPersonData(person: PersonDetailsAPI): PersonDetails {
    const age = getAge(new Date(person.birthday));
    const gender = person.gender === 1 ? GENDER_TYPES.FEMALE : GENDER_TYPES.MALE;
    return {
      ...person,
      birthday: new Date(person.birthday),
      deathday: person.deathday ? new Date(person.deathday) : null,
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

const PersonRepository = new PersonRepositoryClass();
export { PersonRepository };
