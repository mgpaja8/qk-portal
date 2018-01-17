import Actions from '../actions/action-types';

let initialState = {
  isOpen: true
};

let navigationReducer = function(navigation = initialState, action) {
  switch (action.type) {
    case Actions.OPEN_NAVIGATION:
      return handleOpenNavigation(navigation);
    case Actions.CLOSE_NAVIGATION:
      return handleCloseNavigation(navigation);
    default:
      return navigation;
  }
}

const handleOpenNavigation = function(state) {
  return Object.assign({}, initialState, { isOpen: true });
}

const handleCloseNavigation = function(state) {
  return Object.assign({}, initialState, { isOpen: false });
}

export default navigationReducer;
