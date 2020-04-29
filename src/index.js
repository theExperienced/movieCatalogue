import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";

import { GlobalStyle } from "./GlobalStyle";

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
  document.querySelector("#root")
);
