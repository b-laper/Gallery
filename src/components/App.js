import React from "react";

import Background from "./Background";
import Slider from "./Slider";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => [], {}, applyMiddleware());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Background />
        <Slider />
      </Provider>
    );
  }
}

export default App;
