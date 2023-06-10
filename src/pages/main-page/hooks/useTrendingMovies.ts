import { useEffect, useState } from 'react';
import { ListAPIResponse, Movie, TrendingTimeWindow } from '../MainPage.types';
import { MovieListRepository } from '../../../repositories/movie/data/MovieListRepository';

export const useTrendingMovies = (initialTimeWindow: TrendingTimeWindow) => {
  // to do - do not send request after every switch => keep data for both time windows
  const [currentTimeWindow, setCurrentTimeWindow] = useState<TrendingTimeWindow>(initialTimeWindow);
  const [moviesData, setMoviesData] = useState<ListAPIResponse<Movie>>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  });

  useEffect(() => {
    async function fetchMovies(timeWindow: TrendingTimeWindow) {
      try {
        const response = await MovieListRepository.getTrending(timeWindow);
        setMoviesData(response);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }

    fetchMovies(currentTimeWindow);
  }, [currentTimeWindow]);

  const switchTimeWindow = (newTimeWindow: TrendingTimeWindow) => {
    if (newTimeWindow !== currentTimeWindow) {
      setCurrentTimeWindow(newTimeWindow);
    }
  };

  return {
    currentTimeWindow,
    moviesData,
    switchTimeWindow
  };
};
