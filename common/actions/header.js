import axios from 'axios';
import HTTPStatus from 'http-status';

export const LOGIN = 'LOGIN';
export const MENU_CLICK = 'MENU_CLICK';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';

export const login = () => async (dispatch, getState) => {
  const { username, password } = getState();
  const response = await axios.post('/login', {
    username,
    password,
  });

  if (response.status === HTTPStatus.ACCEPTED) {
    return {
      type: LOGIN,
      payload: {
        token: response.data.token,
      },
    };
  }

  return {
    type: LOGIN,
  };
};

export const menuClick = () => ({
  type: MENU_CLICK,
});

export const resize = () => ({
  type: WINDOW_RESIZE,
});

// export const set = value => ({
//   type: SET_COUNTER,
//   payload: value,
// });

// export const increment = () => ({
//   type: INCREMENT_COUNTER,
// });

// export const decrement = () => ({
//   type: DECREMENT_COUNTER,
// });

// export const incrementIfOdd = () => (dispatch, getState) => {
//   const { counter } = getState();

//   if (counter % 2 === 0) {
//     return;
//   }

//   dispatch(increment());
// };

// export const incrementAsync = (delay = 1000) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increment());
//   }, delay);
// };
