import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieRepository } from '../../../repositories/movie/data/MovieRepository';

import { MovieDetails } from '../MoviePage.types';
import { ALIASES } from '../../../enums/aliases';

export function useMovie(id: string) {
  const [movie, setMovie] = useState<MovieDetails>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await MovieRepository.getDetails(id);
        setMovie(response);
      } catch (error) {
        console.error('Error occurred:', error);
        navigate(ALIASES.NOT_FOUND);
      }
    }

    fetchMovie();
  }, []);

  return movie;
}
