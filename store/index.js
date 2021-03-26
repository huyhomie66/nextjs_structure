import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { rootSaga, rootReducer } from "saga-slice";
import { combineReducers } from "redux";
import slice from "./user/slice.js";
import { watcherSaga } from "./normal_saga/saga";

const modules = [slice];

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const normalSagaReducer = combineReducers({
  watcherSaga,
});
const appReducer = rootReducer(modules, normalSagaReducer);

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga(modules));

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
