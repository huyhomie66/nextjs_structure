import { bindMiddleware } from "./utils";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga, rootReducer } from "saga-slice";
import { createWrapper } from "next-redux-wrapper";

import slice from "./slice";

const modules = [slice];

const appReducer = rootReducer(modules, {
  myExtraReducer: (state, action) => {},
});

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSaga(modules));

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
