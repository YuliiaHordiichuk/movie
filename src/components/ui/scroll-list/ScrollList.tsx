import { Card } from '../card/Card';
import { ListProps } from './scroll-list';

export function ScrollList({ list, header, modifier }: ListProps) {
  const content = list.map((item) => {
    return (
      <li key={item.id}>
        <Card
          id={item.id}
          image={item.poster_path}
          title={item.title}
          detail={item.detail}
          path={item.path}
          rate={item.vote_average}
        ></Card>
      </li>
    );
  });

  return (
    <div className={`scroll-list scroll-list_${modifier || ''}`}>
      <div className="scroll-list__header">
        <h3>{header.title}</h3>
        {header.switcher}
      </div>

      <ul className="scroll-list__list">{content}</ul>
    </div>
  );
}
