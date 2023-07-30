import { TRENDING_TIME_WINDOW } from '../../enums/common';

import { ScrollList } from '../../components/ui/scroll-list/ScrollList';
import { ButtonSwitcher } from '../../components/ui/button/button-switcher/ButtonSwitcher';
import { SearchBanner } from '../../components/blocks/search-banner/SearchBanner';

import { useMainPageCtrl } from './hooks/useMainPageCtrl';

export function MainPage() {
  const { popularList, upcomingList, trendingList, currentTimeWindow, handleTrendingSwitch } =
    useMainPageCtrl();

  const trendingSwitcher = (
    <div className="button-switcher">
      <ButtonSwitcher
        handleClick={() => handleTrendingSwitch(TRENDING_TIME_WINDOW.DAY)}
        title="Today"
        active={currentTimeWindow === TRENDING_TIME_WINDOW.DAY}
      ></ButtonSwitcher>
      <ButtonSwitcher
        handleClick={() => handleTrendingSwitch(TRENDING_TIME_WINDOW.WEEK)}
        title="This Week"
        active={currentTimeWindow === TRENDING_TIME_WINDOW.WEEK}
      ></ButtonSwitcher>
    </div>
  );

  return (
    <div className="main-page">
      <SearchBanner></SearchBanner>
      <div className="container main-page-container">
        <ScrollList list={popularList} header={{ title: 'Popular' }}></ScrollList>
        <ScrollList
          list={trendingList}
          header={{
            title: 'Trending',
            switcher: trendingSwitcher
          }}
        ></ScrollList>
        <ScrollList list={upcomingList} header={{ title: 'Upcoming' }}></ScrollList>
      </div>
    </div>
  );
}
