import { useEffect, useState } from "react";
import { MovieList } from "../components/blocks/index.d";
import { MovieData } from "../service/MovieData";
import { Movie, TrendingTimeWindow, TrendingMovies } from '../service/types'; 
import { SearchBanner } from "../components/blocks/index.d";
import { ButtonSwitcher } from "../components/ui/index.d";

export function MainPage() {
  const [ popularMovies, setPopularMovies ] = useState<Movie[]>([]);
  const [ trendingMovies, setTrendingMovies ] = useState<TrendingMovies>({ day: [], week: [] });
  const [ upcomingMovies, setUpcomingMovies ] = useState<Movie[]>([]);
  const [ trendingPeriod, setTrendingPeriod ] = useState<TrendingTimeWindow>('day');
  
  useEffect(() => {
    console.log('effect');
    MovieData.getPopularList().then(list => setPopularMovies(list));
    MovieData.getTrendingList(trendingPeriod)
      .then(list => setTrendingMovies(
        { ...trendingMovies, [trendingPeriod]: list }
      ));
    MovieData.getUpcomingList().then(list => setUpcomingMovies(list));
  }, []);

  const switchTrendingPeriod = (period: TrendingTimeWindow) => {
    if(period === trendingPeriod) return; 
    setTrendingPeriod(period);
    if(trendingMovies[period].length) return; 
   
    MovieData.getTrendingList(period)
      .then(list => setTrendingMovies(
        { ...trendingMovies, [period]: list }
      ));
  };

  const trendingSwitcher = <div className="buttons-switcher">
    <ButtonSwitcher 
      handleClick={() => switchTrendingPeriod('day')} 
      title="Today" 
      active={trendingPeriod === 'day'}
    ></ButtonSwitcher>
    <ButtonSwitcher 
      handleClick={() => switchTrendingPeriod('week')}
      title="This Week"
      active={trendingPeriod === 'week'}
    ></ButtonSwitcher>
  </div>;
   
  return (
    <div className="homepage">
      <div className="homepage__search-bnr">
        <SearchBanner></SearchBanner>
      </div>
      <div className="container homepage__container">
        <MovieList list={popularMovies} header={ {title: 'Popular'}}></MovieList>
        <MovieList 
          list={trendingMovies[trendingPeriod]} 
          header={{ 
            title: 'Trending', 
            switcher: trendingSwitcher,
        }}></MovieList>
        <MovieList list={upcomingMovies} header={ {title: 'Upcoming'}}></MovieList>
        
        
      </div>
    </div>
  );
}