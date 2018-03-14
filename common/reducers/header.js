import { LOGIN, MENU_CLICK, WINDOW_RESIZE } from '../actions/header';

const header = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case MENU_CLICK:
      return !state;
    case WINDOW_RESIZE:
      return state;
    default:
      return state;
  }
};

export default header;
