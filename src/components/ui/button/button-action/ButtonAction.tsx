// todo - update after authorization logic implementation
import { userActions } from '../../../../configs/user-action.config';
import { ButtonActionProps } from './button-action.types';

export function ButtonAction({ type }: ButtonActionProps) {
  return (
    <div className={`button-action button-action_${type}`}>
      <button type="button" className="button-action__button"></button>
      <div className="button-action__tooltip">{userActions[type].text}</div>
    </div>
  );
}
