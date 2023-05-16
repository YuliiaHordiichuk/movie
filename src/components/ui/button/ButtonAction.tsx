// todo - update after authorization logic implementation
interface ButtonActionProps {
  type: 'favorite' | 'watchlist' | 'rate' | 'list'
}
const buttonData = {
  favorite: {
    text: 'Add to favorites',
  },
  rate: {
    text: 'Rate',
  },
  watchlist: {
    text: 'Add to watchlist',
  },
  list: {
    text: 'Add to list',
  }
};

export function ButtonAction({ type }: ButtonActionProps) {
  return (
    <div className={`button-action button-action_${type}`}>
      <button type="button" className="button-action__button"></button>
      <div className="button-action__tooltip">{buttonData[type].text}</div>
    </div>); 
}