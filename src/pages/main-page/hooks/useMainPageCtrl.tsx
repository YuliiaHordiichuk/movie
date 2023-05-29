import { TRENDING_TIME_WINDOW, TrendingTimeWindow } from '../MainPage.types';
import { usePopularMovies } from './usePopularMovies';
import { usePopularTV } from './usePopularTV';
import { useTransformMoviesToUIList } from './useTransformMoviesToUIList';
import { useTransformTVToUIList } from './useTransformTVToUIList';
import { useTrendingMovies } from './useTrendingMovies';
import { useUpcomingMovies } from './useUpcomingMovies';

export function useMainPageCtrl() {
  const popularMovies = usePopularMovies();
  const popularTV = usePopularTV();
  const popularMoviesList = useTransformMoviesToUIList(popularMovies.results);
  const popularTVList = useTransformTVToUIList(popularTV.results);
  const popularList = [...popularMoviesList, ...popularTVList];

  const upcomingMovies = useUpcomingMovies();
  const upcomingList = useTransformMoviesToUIList(upcomingMovies.results);

  const {
    moviesData: trendingMovies,
    switchTimeWindow,
    currentTimeWindow
  } = useTrendingMovies(TRENDING_TIME_WINDOW.DAY);

  const trendingList = useTransformMoviesToUIList(trendingMovies.results);

  const handleTrendingSwitch = (timeWindow: TrendingTimeWindow) => switchTimeWindow(timeWindow);

  return {
    popularList,
    upcomingList,
    trendingList,
    currentTimeWindow,
    handleTrendingSwitch
  };
}
