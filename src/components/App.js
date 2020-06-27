import React from "react";
import Background from "./Background";
import Searchbar from "./Searchbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Background />
      </div>
    );
  }
}

export default App;
