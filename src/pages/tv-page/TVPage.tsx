import { useParams } from 'react-router-dom';

import { TVBanner } from '../../components/blocks/tv-banner/TVBanner';
import { AsideBlock } from '../../components/ui/aside/AsideBlock';
import { ScrollList } from '../../components/ui/scroll-list/ScrollList';

import { useTVPageCtrl } from './hooks/useTVPageCtrl';

export function TVPage() {
  const { id } = useParams();
  if (!id) return null;
  const { tv, castList } = useTVPageCtrl(id);

  return (
    <div>
      {tv && (
        <>
          <TVBanner tv={tv} />
          <div className="tv-page-content">
            <div className="tv-page-list">
              <ScrollList list={castList} header={{ title: 'Top Billed Cast' }} />
            </div>
            <div className="page-aside">
              <AsideBlock title="Status" subtitle={tv.status}></AsideBlock>
              <AsideBlock title="Original Language" subtitle={tv.spoken_languages.join(' ,')} />
              <AsideBlock title="Original title" subtitle={tv.original_name}></AsideBlock>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
