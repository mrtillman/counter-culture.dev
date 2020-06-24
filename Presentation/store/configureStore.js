import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "../reducers/app.reducer";
import thunk from "redux-thunk";
import appState from "../reducers/app.state";
import { createWrapper } from "next-redux-wrapper";

// https://stackoverflow.com/questions/51512891
// nextjs-redux-thunk-and-getinitialprops-how-to-implement

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export default function configureStore() {
  return createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
}

export const wrapper = createWrapper(configureStore);
