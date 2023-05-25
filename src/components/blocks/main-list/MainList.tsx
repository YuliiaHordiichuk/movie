import { UICard } from '../../../repository/common.types';
import { Card } from '../../ui/card/Card';

interface ListProps {
  list: UICard[];
  header: {
    title: string;
    switcher?: JSX.Element;
  };
  modifier?: string;
}
export function MainList({ list, header, modifier }: ListProps) {
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
    <div className={`main-list main-list_${modifier || ''}`}>
      <div className="main-list__header">
        <h3>{header.title}</h3>
        {header.switcher}
      </div>

      <ul className="main-list__list">{content}</ul>
    </div>
  );
}
