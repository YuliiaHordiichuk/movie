import { imgPath } from "../../../service/variables";

interface PosterProps {
  src: string | null,
  title: string, 
  loading?: 'lazy' | 'eager'
  classname?: string
}

export  function Poster({ src, title, loading, classname } : PosterProps) {
  if(!src) {
    return <div className="poster-stub"></div>;
  } 
  return (
    <img 
      src={ `${imgPath}${src}` }
      alt={ title } 
      loading={ loading || 'lazy' } 
      className={ classname || '' }
    ></img>
  );
};