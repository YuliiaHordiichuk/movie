import { getFormattedDate } from '../../../core/utils/getFormattedDate';
import { TVDetails } from '../../../repositories/tv/tv.types';
import { ButtonAction } from '../../ui/button/button-action/ButtonAction';
import { Poster } from '../../ui/poster/Poster';

interface BannerProps {
  tv: TVDetails;
}

export function TVBanner({ tv }: BannerProps) {
  const genresList = tv.genres.map((genre) => genre.name).join(', ');
  const releaseYear = tv.first_air_date.getFullYear();
  const releaseDate = getFormattedDate(tv.first_air_date);

  return (
    <div
      className="tv-banner"
      style={{
        backgroundImage: `url(${tv.backdrop_path})`
      }}
    >
      <div className="tv-banner-wrap">
        <Poster src={tv.poster_path} title={tv.name} classname="poster"></Poster>
        <div className="tv-banner-info">
          <div className="tv-banner-section">
            <h1 className="tv-banner-title">
              <span>{tv.name}</span>
              <span> ({releaseYear}) </span>
            </h1>
            <ul className="tv-banner-info-list">
              <li>{releaseDate}</li>
              <li>{genresList}</li>
              <li>{tv.number_of_seasons}</li>
            </ul>
          </div>
          <div className="tv-banner-section is-row">
            <span className="tv-banner-rate">{tv.vote_average}%</span>
            <span>User Score</span>

            <ButtonAction type="favorite"></ButtonAction>
            <ButtonAction type="rate"></ButtonAction>
          </div>
          <div className="tv-banner-section">
            <p className="tv-banner-tagline">{tv.tagline}</p>
            <p className="tv-banner-subtitle">Overview</p>
            <p className="text-14 text-400">{tv.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
