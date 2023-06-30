import { useEffect, useState } from 'react';
import { MovieRepository } from '../repository/MovieRepository';
import { CastItem } from '../../common.types';

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
