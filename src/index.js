import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import authReducer from "./store/reducers/auth";
import postReducer from "./store/reducers/post";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
