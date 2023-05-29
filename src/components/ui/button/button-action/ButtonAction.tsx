// todo - update after authorization logic implementation
import { userActions } from '../../../../configs/user-action.config';
import { ButtonActionProps } from './ButtonAction.types';

export function ButtonAction({ type }: ButtonActionProps) {
  return (
    <div className={`button-action button-action_${type}`}>
      <button type="button"></button>
      <div className="button-action-tooltip">{userActions[type].text}</div>
    </div>
  );
}
