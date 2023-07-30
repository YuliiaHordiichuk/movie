import { useEffect, useState } from 'react';
import { ListAPIResponse, TV } from '../MainPage.types';
import { TVListRepository } from '../../../domain/tv/repository/TVListRepository';

export const usePopularTV = () => {
  const [moviesData, setMoviesData] = useState<ListAPIResponse<TV>>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  });

  useEffect(() => {
    async function fetchTV() {
      try {
        const response = await TVListRepository.getPopular();
        setMoviesData(response);
      } catch (error) {
        // console.error('Error occurred:', error);
      }
    }

    fetchTV();
  }, []);

  return moviesData;
};
