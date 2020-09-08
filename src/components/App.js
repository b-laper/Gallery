import React from "react";
import Background from "./Background";
import Searchbar from "./Searchbar";
import PicsSlider from "./PicsSlider";
class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Background />
        <PicsSlider />
      </div>
    );
  }
}

export default App;
