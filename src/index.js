import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
