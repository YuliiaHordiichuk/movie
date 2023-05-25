// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useRedirect } from '../hooks/useRedirect';
// import { ALIASES } from '../core/router/alias';
// import { PersonCreditsCast, PersonDetails, UIList } from '../service/types';
// import { PersonData } from '../service/data/PersonData';
// import { AsideBlock, MainList, Poster } from '../components/index.d';

export function PersonPage() {
  // const { id } = useParams();
  // const goToNotFound = useRedirect(ALIASES.NOT_FOUND);
  // const [person, setPerson] = useState<PersonDetails>();
  // const [movies, setMovies] = useState<UIList>([]);
  // useEffect(() => {
  //   if (!id) {
  //     goToNotFound();
  //     return;
  //   }
  //   PersonData.getPersonDetails(id).then((person) => setPerson(person));
  //   PersonData.getPersonMovieList(id).then((list) => {
  //     const slicedList = list.slice(0, 8);
  //     const UIList = transformToUIList(slicedList);
  //     setMovies(UIList);
  //   });
  // }, []);
  // const transformToUIList = (list: PersonCreditsCast[]): UIList => {
  //   return list.map(({ poster_path, id, title, media_type }) => {
  //     return {
  //       poster_path,
  //       title,
  //       id,
  //       path: `/${media_type}/${id}`
  //     };
  //   });
  // };
  // return (
  //   <div className="person-page">
  //     {person && (
  //       <>
  //         <div className="person-page__block person-page__block_left">
  //           <Poster
  //             classname="poster"
  //             src={person.poster_path}
  //             title={person.name}
  //           ></Poster>
  //           <div className="page-aside">
  //             <h3
  // className="text-primary text-700 text-18">Personal info</h3>
  //             <AsideBlock
  //               title="Known For"
  //               subtitle={person.known_for_department}
  //             />
  //             <AsideBlock title="Gender" subtitle={person.gender} />
  //             {person.birthday && (
  //               <AsideBlock title="Birthdate" subtitle={person.birthday}>
  //                 <span>( {person.age} years old )</span>
  //               </AsideBlock>
  //             )}
  //             {person.deathday && (
  //               <AsideBlock title="Deathday" subtitle={person.deathday} />
  //             )}
  //             {person.place_of_birth && (
  //               <AsideBlock
  //                 title="Place of Birth"
  //                 subtitle={person.place_of_birth}
  //               />
  //             )}
  //             {person.also_known_as.length > 0 && (
  //               <AsideBlock
  //                 title="Also Known As"
  //                 subtitle={person.also_known_as.join(' ,')}
  //               />
  //             )}
  //           </div>
  //         </div>
  //         <div className="text-primary person-page__block">
  //           <p className="text-700 text-36">{person.name}</p>
  //           {person.biography && (
  //             <div className="person-page__text">
  //               <p className="text-500 text-16">Biography</p>
  //               <p className="text-400 text-12">{person.biography}</p>
  //             </div>
  //           )}
  //           <div className="person-page__list">
  //             <MainList
  //               list={movies}
  //               header={{ title: 'Known For' }}
  //             ></MainList>
  //           </div>
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );
}
