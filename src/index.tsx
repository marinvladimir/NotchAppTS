import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";

const store: Store<ContactState, ContactAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
