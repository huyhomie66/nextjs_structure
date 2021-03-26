import { rootSaga, rootReducer } from "saga-slice";
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export { bindMiddleware };
