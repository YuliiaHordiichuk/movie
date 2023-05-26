import { ApiConfig } from '../../../configs/api.config';
import { PosterProps } from './poster.types';

export function Poster({ src, title, loading, classname }: PosterProps) {
  if (!src) {
    return <div className="poster-stub"></div>;
  }
  return (
    <img
      src={`${ApiConfig.imgPath}${src}`}
      alt={title}
      loading={loading || 'lazy'}
      className={classname || ''}
    ></img>
  );
}
