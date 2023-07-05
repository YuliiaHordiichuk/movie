import { getImageSource } from '../../../core/utils/getImageSource';
import { PosterProps } from './Poster.types';

export function Poster({ src, title, loading, classname }: PosterProps) {
  if (!src) {
    return <div className="poster-stub"></div>;
  }

  const imageSource = getImageSource(src);

  return (
    <img
      src={imageSource}
      alt={title}
      loading={loading || 'lazy'}
      className={classname || ''}
    ></img>
  );
}
