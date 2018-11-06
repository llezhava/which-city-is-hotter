import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import game from "../reducers/global";
import initialState from "../reducers/initialState";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

const store = createStore(
  game,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;