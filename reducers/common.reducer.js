import ACTION_TYPES from '../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_USER_SUCCESS: {
      const user = Object.assign({}, action.user);
      return Object.assign({}, state, { user });
    }
    default:
      return state;
  }
}