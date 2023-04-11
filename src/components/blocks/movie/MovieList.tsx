import { Movie } from "../../../service/types";
import { Card } from "../shared/Card"; 

interface ListProps  {
  list: Movie[];
  header: {
    title: string,
    switcher?: JSX.Element
  },
}
export function MovieList({ list, header } : ListProps) {
  const content = list.map(item => {
    const rate = Math.round(item.vote_average * 10);
    
    return <li key={item.id}>
      <Card
        id={item.id}
        image={item.poster_path || ''} 
        title={item.title} 
        detail={item.release_date}
        type={item.type}
        rate={rate}
        place={'homepage'}></Card>
    </li>;
  });

  return ( 
    <div className="homepage-list">
      <div className="homepage-list__header">
        <h3 className="homepage-list__title">{header.title}</h3>
        { header.switcher }
      </div>

      <ul className="homepage-list__list">
        { content } 
      </ul>
    </div>
  );
};