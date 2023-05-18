import { MovieDetails } from '../../../service/types';
import { ButtonAction, Poster } from '../../index.d';

interface BannerProps {
  movie: MovieDetails;
}

export function MovieBanner({ movie }: BannerProps) {
  const genresList = movie.genres.map((genre) => genre.name).join(', ');
  const releaseYear = `${movie.release_date.getFullYear()}`;
  const formattedReleaseDate = `
    ${movie.release_date.getDay()}
    /${movie.release_date.getMonth()}
    /${releaseYear}
  `;
  return (
    <div
      className="movie-banner"
      style={{
        backgroundImage: `url(${movie.backdrop_path})`
      }}
    >
      <div className="movie-banner__wrap">
        <Poster
          src={movie.poster_path}
          title={movie.title}
          classname="poster"
        ></Poster>
        <div className="movie-banner__info">
          <div className="movie-banner__section">
            <h1 className="movie-banner__title">
              <span>{movie.title}</span>
              <span> ({releaseYear}) </span>
            </h1>
            <ul className="movie-banner__info-list">
              {formattedReleaseDate && <li>{formattedReleaseDate}</li>}
              <li>{genresList}</li>
              <li>{movie.duration}</li>
            </ul>
          </div>
          <div className="movie-banner__section is-row">
            <span className="movie-banner__rate">{movie.vote_average}%</span>
            <span>User Score</span>

            <ButtonAction type="favorite"></ButtonAction>
            <ButtonAction type="rate"></ButtonAction>
          </div>
          <div className="movie-banner__section">
            <p className="movie-banner__tagline">{movie.tagline}</p>
            {movie.overview && (
              <p className="movie-banner__subtitle">Overview</p>
            )}
            <p className="movie-banner__text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
