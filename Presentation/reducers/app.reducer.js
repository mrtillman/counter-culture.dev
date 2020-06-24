import ACTION_TYPES from "../actions/action-types";
import appState from "./app.state";
import { HYDRATE } from "next-redux-wrapper";

export default (state = appState, action) => {
  switch (action.type) {
    case ACTION_TYPES.BUST_CACHE: {
      const user = Object.assign({}, state.user, {
        cacheBuster: action.cacheBuster,
      });
      return Object.assign({}, state, { user });
    }
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    }
    case ACTION_TYPES.UPDATE_USER: {
      return Object.assign({}, state, { user: action.user });
    }
    default:
      return state;
  }
};
