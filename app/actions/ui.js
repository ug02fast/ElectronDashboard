import type { uiStateType } from '../reducers/ui';

export const SET_VISIBILITY = 'SET_VISIBILITY';
export const TOGGLE_DIV = 'TOGGLE_DIV';

export const toggleDiv = targetDiv => {
  return (dispatch: () => void, getState: () => uiStateType) => {
    let { isSelected } = getState();
    if (isSelected) {
      isSelected = false;
    } else {
      isSelected = true;
    }

    dispatch({
      type: TOGGLE_DIV,
      targetDiv
    });
    dispatch({
      type: SET_VISIBILITY,
      isSelected
    });
  };
};
