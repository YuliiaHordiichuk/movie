import { useEffect, useState } from "react";
import { MovieListData } from "../service/data/MovieListData";
import { 
  Movie, 
  TrendingTimeWindow, 
  TrendingMovies, 
  UIList 
} from '../service/types'; 
import { SearchBanner, MainList, ButtonSwitcher } from "../components/index.d";

export function MainPage() {
  const [ popularList, setPopularList ] = useState<UIList>([]);
  const [ trendingMovies, setTrendingMovies ] = useState<TrendingMovies>({ day: [], week: [] });
  const [ upcomingList, setUpcomingList ] = useState<UIList>([]);
  const [ trendingPeriod, setTrendingPeriod ] = useState<TrendingTimeWindow>('day');
  
  useEffect(() => {
    MovieListData.getPopularList().then(list =>  {
      const transformedList = transformToUIList(list);
      setPopularList(transformedList);
    });
    MovieListData.getTrendingList(trendingPeriod)
      .then(list => {
        const transformedList = transformToUIList(list);
        setTrendingMovies( { ...trendingMovies, [trendingPeriod]: transformedList });
      });
      MovieListData.getUpcomingList().then(list => {
      const transformedList = transformToUIList(list);
      setUpcomingList(transformedList);
    });
  }, []);

  const switchTrendingPeriod = (period: TrendingTimeWindow) => {
    if(period === trendingPeriod) return; 
    if(trendingMovies[period].length) {
      setTrendingPeriod(period);
      return;
    }; 
    MovieListData.getTrendingList(period)
      .then(list => {
        const transformedList = transformToUIList(list);
        setTrendingMovies(
        { ...trendingMovies, [period]: transformedList }
        );
        setTrendingPeriod(period);
      });
  };
  const transformToUIList = (list: Movie[]) : UIList => {
    return list.map(({ poster_path, release_date, id,title, vote_average, type }) => {
      return {
        poster_path,
        title, 
        detail: release_date,
        vote_average,
        id,
        path: `/${type}/${id}`
      };
    });
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
      <SearchBanner></SearchBanner>
      <div className="container homepage__container">
        <MainList list={popularList} header={ {title: 'Popular'}}></MainList>
        <MainList 
          list={trendingMovies[trendingPeriod]} 
          header={{ 
            title: 'Trending', 
            switcher: trendingSwitcher,
        }}></MainList>
        <MainList list={upcomingList} header={ { title: 'Upcoming' } }></MainList>       
      </div>
    </div>
  );
}