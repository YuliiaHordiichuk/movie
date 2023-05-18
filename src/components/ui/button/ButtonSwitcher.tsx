interface ButtonSwitcherProps {
  handleClick: () => void;
  title: string;
  active?: boolean;
}

export function ButtonSwitcher({
  handleClick,
  title,
  active
}: ButtonSwitcherProps) {
  return (
    <button
      className={active ? 'is-active' : ''}
      type="button"
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
}
