import { useParams } from 'react-router-dom';

import { ScrollList } from '../../../components/ui/scroll-list/ScrollList';
import { Poster } from '../../../components/ui/poster/Poster';
import { AsideBlock } from '../../../components/ui/aside/AsideBlock';

import { getFormattedDate } from '../../../core/utils/getFormattedDate';
import { usePersonPageCtrl } from '../hooks/usePersonPageCtrl';

export function PersonPage() {
  const { id } = useParams();
  if (!id) return null;
  const { person, castList } = usePersonPageCtrl(id);
  if (!person) return null;

  const birthdayDate = getFormattedDate(person.birthday);
  const deathDay = person.deathday ? getFormattedDate(person.deathday) : '';

  return (
    <div className="person-page">
      {person && (
        <>
          <div className="person-page__block person-page__block_left">
            <Poster classname="poster" src={person.profile_path} title={person.name}></Poster>
            <div className="page-aside">
              <h3 className="text-primary text-700 text-18">Personal info</h3>
              <AsideBlock title="Known For" subtitle={person.known_for_department} />
              <AsideBlock title="Gender" subtitle={person.gender} />
              {person.birthday && (
                <AsideBlock title="Birthdate" subtitle={birthdayDate}>
                  <span>( {person.age} years old )</span>
                </AsideBlock>
              )}
              {person.deathday && <AsideBlock title="Deathday" subtitle={deathDay} />}

              <AsideBlock title="Place of Birth" subtitle={person.place_of_birth} />
              <AsideBlock title="Also Known As" subtitle={person.also_known_as.join(' ,')} />
            </div>
          </div>
          <div className="text-primary person-page__block">
            <p className="text-700 text-36">{person.name}</p>
            <div className="person-page__text">
              <p className="text-500 text-16">Biography</p>
              <p className="text-400 text-12">{person.biography}</p>
            </div>

            <div className="person-page__list">
              <ScrollList list={castList} header={{ title: 'Known For' }}></ScrollList>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
