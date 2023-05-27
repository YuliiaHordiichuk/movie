import { useParams } from 'react-router-dom';

import { MovieBanner } from '../../components/blocks/movie-banner/MovieBanner';
import { AsideBlock } from '../../components/ui/aside/AsideBlock';
import { ScrollList } from '../../components/ui/scroll-list/ScrollList';

import { useMoviePageCtrl } from './hooks/useMoviePageCtrl';

export function MoviePage() {
  const { id } = useParams();
  if (!id) return null;
  const { movie, castList } = useMoviePageCtrl(id);

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
              <AsideBlock title="Original Language" subtitle={movie.spoken_languages.join(' ,')} />
              <AsideBlock title="Original title" subtitle={movie.original_title}></AsideBlock>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
