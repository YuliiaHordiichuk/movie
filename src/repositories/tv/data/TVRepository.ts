import { TV_API } from '../api /TV_API';
import { TVDetails, TVDetailsAPI, GENDER_TYPES, MEDIA_TYPES, CastItem, CastAPI } from '../TV.types';

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
