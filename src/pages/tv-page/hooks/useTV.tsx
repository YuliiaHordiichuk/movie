import { useEffect, useState } from 'react';
import { ALIASES, TVDetails } from '../TVPage.types';
import { TVRepository } from '../../../repositories/tv/TVRepository';
import { useNavigate } from 'react-router-dom';

export function useTV(id: string) {
  const [tv, setTV] = useState<TVDetails>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTV() {
      try {
        const response = await TVRepository.getDetails(id);
        setTV(response);
      } catch (error) {
        console.error('Error occurred:', error);
        navigate(ALIASES.NOT_FOUND);
      }
    }

    fetchTV();
  }, []);

  return tv;
}
