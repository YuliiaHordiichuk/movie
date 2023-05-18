import { PersonApi } from '../../api/PersonApi';
import { PersonDetailsApi } from '../../api/types';
import { getAge } from '../../core/utils/getAge';
import { PersonCreditsCast, PersonDetails } from '../types';
import { imgPathBigSize } from '../variables';

class PersonDataClass {
  private transformPersonData(person: PersonDetailsApi): PersonDetails {
    const age = person.birthday ? getAge(new Date(person.birthday)) : null;
    const gender = person.gender === 1 ? 'Female' : 'Male';
    const {
      birthday,
      known_for_department,
      also_known_as,
      id,
      biography,
      place_of_birth,
      name,
      deathday,
      profile_path
    } = person;
    return {
      birthday,
      age,
      known_for_department,
      deathday,
      id: id,
      name,
      also_known_as,
      gender,
      biography,
      place_of_birth,
      poster_path: profile_path
    };
  }

  private transformPersonCreditsCastItem(
    movie: PersonCreditsCast
  ): PersonCreditsCast {
    return {
      ...movie,
      poster_path: movie.poster_path,
      backdrop_path: `${imgPathBigSize}/${movie.backdrop_path}`
    };
  }

  public getPersonDetails(id: string) {
    return PersonApi.getPersonDetails(id).then((person) =>
      this.transformPersonData(person)
    );
  }

  public getPersonMovieList(id: string) {
    return PersonApi.getPersonCredits(id).then(({ cast }) =>
      cast.map(this.transformPersonCreditsCastItem)
    );
  }
}

const PersonData = new PersonDataClass();
export { PersonData };
