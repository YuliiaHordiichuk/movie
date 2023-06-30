import { useEffect, useState } from 'react';
import { PersonCreditsCast } from '../Person.types';
import { PersonRepository } from '../repository/PersonRepository';

export function useCast(id: string) {
  const [movies, setMovies] = useState<PersonCreditsCast[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await PersonRepository.getMovieList(id);
        setMovies(response);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }

    fetchMovies();
  }, []);

  return movies;
}
