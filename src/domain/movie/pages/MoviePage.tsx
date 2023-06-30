import { useParams } from 'react-router-dom';

import { MovieBanner } from '../../../components/blocks/movie-banner/MovieBanner';
import { AsideBlock } from '../../../components/ui/aside/AsideBlock';
import { ScrollList } from '../../../components/ui/scroll-list/ScrollList';

import { useMoviePageCtrl } from '../hooks/useMoviePageCtrl';

export function MoviePage() {
  const { id } = useParams();
  if (!id) return null;
  const { movie, castList } = useMoviePageCtrl(id);
  const languages = movie?.spoken_languages
    .map(({ iso_639_1 }) => iso_639_1.toUpperCase())
    .join(', ');

  return (
    <div>
      {movie && (
        <>
          <MovieBanner movie={movie} />
          <div className="movie-page-content">
            <div className="movie-page-list">
              <ScrollList list={castList} header={{ title: 'Top Billed Cast' }} />
            </div>
            <div className="page-aside">
              <AsideBlock title="Status" subtitle={movie.status}></AsideBlock>
              {languages && <AsideBlock title="Spoken Languages" subtitle={languages} />}
              <AsideBlock title="Original title" subtitle={movie.original_title}></AsideBlock>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
