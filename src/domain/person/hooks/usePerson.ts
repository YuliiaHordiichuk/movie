import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { PersonDetails } from '../Person.types';
import { PersonRepository } from '../repository/PersonRepository';
// import { ROUTES } from '../../../core/router/routes';

export function usePerson(id: string) {
  const [person, setPerson] = useState<PersonDetails>();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchPerson() {
      try {
        const response = await PersonRepository.getDetails(id);
        setPerson(response);
      } catch (error) {
        // console.error('Error occurred:', error);
        // navigate(`${ROUTES.NOT_FOUND}`);
      }
    }

    fetchPerson();
  }, []);

  return person;
}
