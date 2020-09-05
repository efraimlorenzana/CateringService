import React from "react";
import ReactDOM from "react-dom";
import App from "./layout/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import Store from "./store/storeContext";
import "semantic-ui-css/semantic.min.css";
import "./layout/style.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={Store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
