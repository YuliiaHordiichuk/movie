import { Link } from "react-router-dom";

type CardProps = {
  id: number,
  image: string,
  title: string, 
  detail: string,
  type: string,
  rate?: number,
  place?: string,
};

export function Card({ id, image, title, detail, type, ...props }: CardProps) {
  const hasRate = typeof props?.rate === 'number';
  const linkPath = `/${type}/${id}`;

  return (
    <Link 
      to={ linkPath } 
      state={{ type }} 
      className={`card card_${ props.place || '' }`} 
    >
      <img src={image || ''} alt={title}></img>
      { hasRate && <p className="card__rate">{ props.rate }%</p> }
      <p className="card__title">{title}</p>
      <p className="card__detail">{detail}</p>
    </Link>
  );
  
}