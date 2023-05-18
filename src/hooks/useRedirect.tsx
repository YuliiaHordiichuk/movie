import { useNavigate } from 'react-router-dom';

export function useRedirect(route: string) {
  const navigate = useNavigate();
  return function () {
    navigate(route);
  };
}
