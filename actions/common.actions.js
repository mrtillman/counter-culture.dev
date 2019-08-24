import ACTION_TYPES from '../constants/actionTypes';
import CounterCulture from 'counter-culture.client';

export const loadUserSuccess = user => {
  return {
    type: ACTION_TYPES.LOAD_USER_SUCCESS,
    user
  };
};

export const loadUser = () => dispatch => {
  return CounterCulture.client
        .getUser()
        .then(user => {
          dispatch(loadUserSuccess(user));
        }).catch(console.log);
}
