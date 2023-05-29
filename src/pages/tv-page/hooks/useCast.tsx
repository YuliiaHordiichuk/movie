import { useEffect, useState } from 'react';
import { TVRepository } from '../../../repositories/tv/TVRepository';
import { CastItem } from '../TVPage.types';

export function useCast(id: string) {
  const [castList, setCastList] = useState<CastItem[]>([]);

  useEffect(() => {
    async function fetchCastList() {
      try {
        const response = await TVRepository.getCast(id);
        setCastList(response);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }

    fetchCastList();
  }, []);

  return castList;
}
