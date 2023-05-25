import { TVItemAPI } from '../../api/tv/tv.types';
import { TVListAPI } from '../../api/tv/TVListApi';
import { QueryParams } from '../../core/http/index.d';
import { TV } from './tv.types';
import { TrendingTimeWindow } from '../common.types';
import { MEDIA_TYPES } from '../../configs/movie.config';

class TVListRepositoryClass {
  private transformList(tv: TVItemAPI): TV {
    return {
      ...tv,
      vote_average: Math.round(tv.vote_average * 10),
      first_air_date: new Date(tv.first_air_date),
      type: MEDIA_TYPES.TV
    };
  }
  public async getPopular<T extends QueryParams>(config?: T) {
    const TVList = await TVListAPI.getPopular(config);
    const transformedList = TVList.results.map(this.transformList);
    return {
      ...TVList,
      results: transformedList
    };
  }
  public async getUpcoming<T extends QueryParams>(config?: T) {
    const TVList = await TVListAPI.getUpcoming(config);
    const transformedList = TVList.results.map(this.transformList);
    return {
      ...TVList,
      results: transformedList
    };
  }
  public async getTrending<T extends QueryParams>(
    time_window: TrendingTimeWindow,
    config?: T
  ) {
    const TVList = await TVListAPI.getTrending(time_window, config);
    const transformedList = TVList.results.map(this.transformList);
    return {
      ...TVList,
      results: transformedList
    };
  }
}

const TVListRepository = new TVListRepositoryClass();
export { TVListRepository };
