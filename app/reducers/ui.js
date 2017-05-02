// import { VisibilityFilters } from '../actions/ui';
// const { SHOW_ALL } = VisibilityFilters;
/*
const initialState = {
  visibiltyFilter: VisibilityFilters.SHOW_ALL
};
*/
export type uiStateType = {
  ui: string
};

export type actionType = {
  type: string
};

export default function visibilityFilter(state: ui = '', action: actionType) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
