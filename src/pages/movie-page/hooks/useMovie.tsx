import { useEffect, useState } from 'react';
import { ALIASES, MovieDetails } from '../movie-page.types';
import { MovieRepository } from '../../../repositories/movie/MovieRepository';
import { useNavigate } from 'react-router-dom';

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
