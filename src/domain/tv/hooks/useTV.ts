import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TVRepository } from '../repository/TVRepository';

import { TVDetails } from '../TV.types';
import { ROUTES } from '../../../core/router/routes';

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
        navigate(`${ROUTES.NOT_FOUND}`);
      }
    }

    fetchTV();
  }, []);

  return tv;
}
