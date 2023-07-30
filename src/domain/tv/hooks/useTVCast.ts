import { useEffect, useState } from 'react';
import { TVRepository } from '../repository/TVRepository';
import { CastItem } from '../TV.types';

export function useTVCast(id: string) {
  const [castList, setCastList] = useState<CastItem[]>([]);

  useEffect(() => {
    async function fetchCastList() {
      try {
        const response = await TVRepository.getCast(id);
        setCastList(response);
      } catch (error) {
        // console.error('Error occurred:', error);
      }
    }

    fetchCastList();
  }, []);

  return castList;
}
