import { TV_API } from '../../api/tv/TV_API';
import { TVDetailsAPI } from '../../api/tv/tv.types';
import { TVDetails } from './tv.types';
import { GENDER_TYPES, MEDIA_TYPES } from '../../configs/movie.config';
import { CastItem } from '../common.types';
import { CastAPI } from '../../api/common.types';

class TVRepositoryClass {
  private transformTVItem(tv: TVDetailsAPI): TVDetails {
    return {
      ...tv,
      first_air_date: new Date(tv.first_air_date),
      vote_average: Math.round(tv.vote_average * 10),
      type: MEDIA_TYPES.TV
    };
  }

  private transformCast(item: CastAPI): CastItem {
    const gender = item.gender === 1 ? GENDER_TYPES.FEMALE : GENDER_TYPES.MALE;
    return {
      ...item,
      gender
    };
  }

  public async getDetails(id: string) {
    const TV = await TV_API.getItem(id);
    return this.transformTVItem(TV);
  }

  public async getCast(id: string) {
    const credits = await TV_API.getCredits(id);
    return credits.cast.map(this.transformCast);
  }
}

const TVRepository = new TVRepositoryClass();
export { TVRepository };
