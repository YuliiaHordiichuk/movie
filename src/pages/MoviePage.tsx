// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { MovieCreditsData } from '../service/data/MovieCreditsData';
// import { MovieItemData } from '../service/data/MovieItemData';
// import { ALIASES } from '../core/router/alias';
// import { useRedirect } from '../hooks/useRedirect';
// import { AsideBlock, MainList, MovieBanner } from '../components/index.d';
// import { MovieDetails, UIList, Cast } from '../service/types';

export function MoviePage() {
  // const [movie, setMovie] = useState<MovieDetails>();
  // const [castList, setCastList] = useState<UIList>([]);
  // const goToNotFound = useRedirect(ALIASES.NOT_FOUND);
  // const { id } = useParams();
  // useEffect(() => {
  //   if (!id) {
  //     goToNotFound();
  //     return;
  //   }
  //   MovieItemData.getMovieItem(id)
  //     .then((movie) => setMovie(movie))
  //     .catch(goToNotFound);
  //   MovieCreditsData.getMovieCast(id)
  //     .then((cast) => {
  //       const transformedCastList = transformToUIList(cast);
  //       setCastList(transformedCastList);
  //     })
  //     .catch(goToNotFound);
  // }, []);
  // const transformToUIList = (list: Cast[]): UIList => {
  //   return list.map(({ poster_path, id, name, character }) => {
  //     return {
  //       poster_path,
  //       title: name,
  //       detail: character,
  //       id,
  //       path: `${ALIASES.PERSON}/${id}`
  //     };
  //   });
  // };
  // return (
  //   <div className="movie-page">
  //     {movie && (
  //       <>
  //         <MovieBanner movie={movie} />
  //         <div className="movie-page__content">
  //           <div className="movie-page__list">
  //             <MainList list={castList} header={{ title: 'Top Billed Cast' }} />
  //           </div>
  //           <div className="page-aside">
  //             <AsideBlock title="Status" subtitle={movie.status}></AsideBlock>
  //             <AsideBlock
  //               title="Original Language"
  //               subtitle={movie.languages.join(' ,')}
  //             />
  //             <AsideBlock
  //               title="Original title"
  //               subtitle={movie.original_title}
  //             ></AsideBlock>
  //           </div>
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );
}
