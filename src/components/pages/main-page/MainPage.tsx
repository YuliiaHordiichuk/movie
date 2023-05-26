// import { useEffect, useState } from 'react';
// import { MovieListData } from '../service/data/MovieListData';
// import {
//   Movie,
//   TrendingTimeWindow,
//   TrendingMovies,
//   UIList
// } from '../service/types';
// import {
// SearchBanner, UIScrollList, ButtonSwitcher } from '../components/index.d';

import { useEffect, useState } from 'react';
import { MovieListRepository } from '../../../repositories/movie/MovieListRepository';
import { TVListRepository } from '../../../repositories/tv/TVListRepository';
import { MEDIA_TYPES, Movie, TRENDING_TIME_WINDOW, TV, UIList } from './main-page.types';
import { ScrollList } from '../../ui/scroll-list/ScrollList';

export function MainPage() {
  const [popularList, setPopularList] = useState<UIList>([]);
  const [upcomingList, setUpcomingList] = useState<UIList>([]);
  const [trendingList, setTrendingList] = useState<UIList>([]);

  useEffect(() => {
    async function fetchPopular() {
      try {
        const movieResponse = await MovieListRepository.getPopular();
        const tvResponse = await TVListRepository.getPopular();
        const moviePopularList = transformMoviesToUIList(movieResponse.results);
        const tvPopularList = transformTVToUIList(tvResponse.results);
        setPopularList([...moviePopularList, ...tvPopularList]);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
    async function fetchUpcoming() {
      try {
        const movieResponse = await MovieListRepository.getUpcoming();
        const movieUpcomingList = transformMoviesToUIList(movieResponse.results);
        setUpcomingList([...movieUpcomingList]);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
    async function fetchTrending() {
      try {
        const movieResponse = await MovieListRepository.getTrending(TRENDING_TIME_WINDOW.DAY);
        const tvResponse = await TVListRepository.getTrending(TRENDING_TIME_WINDOW.DAY);
        const movieTrendingList = transformMoviesToUIList(movieResponse.results);
        const tvTrendingList = transformTVToUIList(tvResponse.results);
        setTrendingList([...movieTrendingList, ...tvTrendingList]);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }

    fetchPopular();
    fetchUpcoming();
    fetchTrending();
  }, []);

  const transformMoviesToUIList = (movies: Movie[]): UIList => {
    return movies.map((movie) => {
      return {
        poster_path: movie.poster_path,
        title: movie.title,
        detail: movie.release_date.toLocaleDateString(),
        vote_average: movie.vote_average,
        id: movie.id,
        path: `/${MEDIA_TYPES.MOVIE}/${movie.id}`
      };
    });
  };

  const transformTVToUIList = (tvs: TV[]): UIList => {
    return tvs.map((tv) => {
      return {
        poster_path: tv.poster_path,
        title: tv.name,
        detail: tv.first_air_date.toLocaleDateString(),
        vote_average: tv.vote_average,
        id: tv.id,
        path: `/${MEDIA_TYPES.TV}/${tv.id}`
      };
    });
  };

  // const [trendingMovies, setTrendingMovies] = useState<TrendingMovies>({
  //   day: [],
  //   week: []
  // });

  // const [trendingPeriod, setTrendingPeriod] =
  //   useState<TrendingTimeWindow>('day');
  // useEffect(() => {
  //   MovieListData.getPopularList().then((list) => {
  //     const transformedList = transformToUIList(list);
  //     setPopularList(transformedList);
  //   });
  //   MovieListData.getTrendingList(trendingPeriod).then((list) => {
  //     const transformedList = transformToUIList(list);
  //     setTrendingMovies({
  //       ...trendingMovies,
  //       [trendingPeriod]: transformedList
  //     });
  //   });
  //   MovieListData.getUpcomingList().then((list) => {
  //     const transformedList = transformToUIList(list);
  //     setUpcomingList(transformedList);
  //   });
  // }, []);
  // const switchTrendingPeriod = (period: TrendingTimeWindow) => {
  //   if (period === trendingPeriod) return;
  //   if (trendingMovies[period].length) {
  //     setTrendingPeriod(period);
  //     return;
  //   }
  //   MovieListData.getTrendingList(period).then((list) => {
  //     const transformedList = transformToUIList(list);
  //     setTrendingMovies({ ...trendingMovies, [period]: transformedList });
  //     setTrendingPeriod(period);
  //   });
  // };
  // const transformToUIList = (list: Movie[]): UIList => {
  //   return list.map(
  //     ({ poster_path, release_date, id, title, vote_average, type }) => {
  //       return {
  //         poster_path,
  //         title,
  //         detail: release_date,
  //         vote_average,
  //         id,
  //         path: `/${type}/${id}`
  //       };
  //     }
  //   );
  // };
  // const trendingSwitcher = (
  //   <div className="button-switcher">
  //     <ButtonSwitcher
  //       handleClick={() => switchTrendingPeriod('day')}
  //       title="Today"
  //       active={trendingPeriod === 'day'}
  //     ></ButtonSwitcher>
  //     <ButtonSwitcher
  //       handleClick={() => switchTrendingPeriod('week')}
  //       title="This Week"
  //       active={trendingPeriod === 'week'}
  //     ></ButtonSwitcher>
  //   </div>
  // );
  return (
    <div className="main-page">
      {/* <SearchBanner></SearchBanner> */}
      <div className="container main-page-container">
        <ScrollList list={popularList} header={{ title: 'Popular' }}></ScrollList>
        <ScrollList list={trendingList} header={{ title: 'Trending' }}></ScrollList>
        {/* <ScrollList
          list={trendingMovies[trendingPeriod]}
          header={{
            title: 'Trending',
            switcher: trendingSwitcher
          }}
        ></UIScrollList> */}
        <ScrollList list={upcomingList} header={{ title: 'Upcoming' }}></ScrollList>
      </div>
    </div>
  );
}
