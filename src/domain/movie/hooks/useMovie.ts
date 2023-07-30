import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { MovieRepository } from '../repository/MovieRepository';

import { MovieDetails } from '../Movie.types';
// import { ROUTES } from '../../../core/router/routes';

export function useMovie(id: string) {
  const [movie, setMovie] = useState<MovieDetails>();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await MovieRepository.getDetails(id);
        setMovie(response);
      } catch (error) {
        // console.error('Error occurred:', error);
        // navigate(`${ROUTES.NOT_FOUND}`);
      }
    }

    fetchMovie();
  }, []);

  return movie;
}
