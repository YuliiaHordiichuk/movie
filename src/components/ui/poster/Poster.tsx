import { config } from '../../../configs/app.config';
import { PosterProps } from './Poster.types';

export function Poster({ src, title, loading, classname }: PosterProps) {
  if (!src) {
    return <div className="poster-stub"></div>;
  }
  return (
    <img
      src={`${config.imgPath}${src}`}
      alt={title}
      loading={loading || 'lazy'}
      className={classname || ''}
    ></img>
  );
}
