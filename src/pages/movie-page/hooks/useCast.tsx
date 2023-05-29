import { useEffect, useState } from 'react';
import { MovieRepository } from '../../../repositories/movie/MovieRepository';
import { CastItem } from '../MoviePage.types';

export function useCast(id: string) {
  const [castList, setCastList] = useState<CastItem[]>([]);

  useEffect(() => {
    async function fetchCastList() {
      try {
        const response = await MovieRepository.getCast(id);
        setCastList(response);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }

    fetchCastList();
  }, []);

  return castList;
}
