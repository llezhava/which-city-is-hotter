import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import game from "../reducers/global";
import initialState from "../reducers/initialState";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

let middleWare =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger);

const store = createStore(
  game,
  initialState,
  composeEnhancers(middleWare)
);

export default store;
