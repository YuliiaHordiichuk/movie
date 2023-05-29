import { UICard } from '../../../repositories/common.types';

export interface ListProps {
  list: UICard[];
  header: {
    title: string;
    switcher?: JSX.Element;
  };
  modifier?: string;
}
