import { getFormattedDate } from '../../../../core/utils/getFormattedDate';
import { TVDetails } from '../../TV.types';
import { ButtonAction } from '../../../../components/ui/button/button-action/ButtonAction';
import { Poster } from '../../../../components/ui/poster/Poster';

interface BannerProps {
  tv: TVDetails;
}

export function TVBanner({ tv }: BannerProps) {
  const genresList = tv.genres.map((genre) => genre.name).join(', ');
  const releaseYear = tv.first_air_date.getFullYear();
  const releaseDate = getFormattedDate(tv.first_air_date);

  return (
    <div
      className="page-banner"
      style={{
        backgroundImage: `url(${tv.backdrop_path})`
      }}
    >
      <div className="page-banner-wrap">
        <Poster src={tv.poster_path} title={tv.name} classname="poster"></Poster>
        <div className="page-banner-info">
          <div className="page-banner-section">
            <h1 className="page-banner-title">
              <span>{tv.name}</span>
              <span> ({releaseYear}) </span>
            </h1>
            <ul className="page-banner-info-list">
              <li>{releaseDate}</li>
              <li>{genresList}</li>
              <li>{tv.number_of_seasons}</li>
            </ul>
          </div>
          <div className="page-banner-section is-row">
            <span className="page-banner-rate">{tv.vote_average}%</span>
            <span>User Score</span>

            <ButtonAction type="favorite"></ButtonAction>
            <ButtonAction type="rate"></ButtonAction>
          </div>
          <div className="page-banner-section">
            <p className="page-banner-tagline">{tv.tagline}</p>
            <p className="page-banner-subtitle">Overview</p>
            <p className="text-14 text-400">{tv.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
