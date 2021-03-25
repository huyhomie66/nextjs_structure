import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";

import { createWrapper } from "next-redux-wrapper";

import moduleReducer from "./module/reducer";
import moduleSaga from "./module/saga";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function* rootSaga() {
  yield all([fork(moduleSaga)]);
}

const rootReducer = combineReducers({
  moduleReducer,
});

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(moduleReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
