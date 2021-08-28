import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import combineReducers from "./rootReducer";
import * as globalActions from './Global/actions';

const configureStore = (initialState, rootReducer) => {
  const middlewares = [];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(require("redux-immutable-state-invariant").default());
  }

  middlewares.push(thunk);

  if (process.env.NODE_ENV === "development") {
    const actionCreators = [...Object.values(globalActions)]

    const composeEnhancers = composeWithDevTools({
      actionCreators,
      trace: true,
      traceLimit: 25,
    })

    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middlewares))
    );
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

export const store = configureStore({}, combineReducers);
