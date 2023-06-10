import { useEffect, useState } from 'react';
import { ListAPIResponse, Movie } from '../MainPage.types';
import { MovieListRepository } from '../../../repositories/movie/data/MovieListRepository';

export const useUpcomingMovies = () => {
  const [moviesData, setMoviesData] = useState<ListAPIResponse<Movie>>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await MovieListRepository.getUpcoming();
        setMoviesData(response);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
    fetchMovies();
  }, []);

  return moviesData;
};
