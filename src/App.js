import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";

import { Main } from "./components";

import "./App.css";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
