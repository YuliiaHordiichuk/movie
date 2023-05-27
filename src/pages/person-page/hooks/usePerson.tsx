import { useEffect, useState } from 'react';
import { ALIASES, PersonDetails } from '../person-page.types';
import { PersonRepository } from '../../../repositories/person/PersonRepository';
import { useNavigate } from 'react-router-dom';

export function usePerson(id: string) {
  const [person, setPerson] = useState<PersonDetails>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPerson() {
      try {
        const response = await PersonRepository.getDetails(id);
        setPerson(response);
      } catch (error) {
        console.error('Error occurred:', error);
        navigate(ALIASES.NOT_FOUND);
      }
    }

    fetchPerson();
  }, []);

  return person;
}
