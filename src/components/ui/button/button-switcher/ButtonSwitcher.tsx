import { ButtonSwitcherProps } from './ButtonSwitcher.types';

export function ButtonSwitcher({ handleClick, title, active }: ButtonSwitcherProps) {
  return (
    <button className={active ? 'is-active' : ''} type="button" onClick={handleClick}>
      <span>{title}</span>
    </button>
  );
}
