import { getFormattedDate } from '../../../core/utils/getFormattedDate';
import { MovieDetails } from '../../../repositories/movie/movie.types';
import { ButtonAction } from '../../ui/button/button-action/ButtonAction';
import { Poster } from '../../ui/poster/Poster';

interface BannerProps {
  movie: MovieDetails;
}

export function MovieBanner({ movie }: BannerProps) {
  const genresList = movie.genres.map((genre) => genre.name).join(', ');
  const releaseYear = movie.release_date.getFullYear();
  const releaseDate = getFormattedDate(movie.release_date);
  return (
    <div
      className="movie-banner"
      style={{
        backgroundImage: `url(${movie.backdrop_path})`
      }}
    >
      <div className="movie-banner-wrap">
        <Poster src={movie.poster_path} title={movie.title} classname="poster"></Poster>
        <div className="movie-banner-info">
          <div className="movie-banner-section">
            <h1 className="movie-banner-title">
              <span>{movie.title}</span>
              <span> ({releaseYear}) </span>
            </h1>
            <ul className="movie-banner-info-list">
              <li>{releaseDate}</li>
              <li>{genresList}</li>
              <li>{movie.runtime}</li>
            </ul>
          </div>
          <div className="movie-banner-section is-row">
            <span className="movie-banner-rate">{movie.vote_average}%</span>
            <span>User Score</span>

            <ButtonAction type="favorite"></ButtonAction>
            <ButtonAction type="rate"></ButtonAction>
          </div>
          <div className="movie-banner-section">
            <p className="movie-banner-tagline">{movie.tagline}</p>
            <p className="movie-banner-subtitle">Overview</p>
            <p className="text-14 text-400">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
