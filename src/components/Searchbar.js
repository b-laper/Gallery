import React, { Component } from "react";
import { submitSearchInput } from "./actions";
class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      pictures: [],
    };
  }
  searchBarStyles = {
    position: "absolute",
    top: "10%",
    zIndex: "10",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    textAlign: "center",
    opacity: "0.8",
  };

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <div style={this.searchBarStyles}>
        <input
          style={{ width: "80%" }}
          type="text"
          value={this.state.input}
          onChange={this.onInputChange.bind(this)}
        />
        <button onClick={submitSearchInput(this.state.input)}>Search</button>
      </div>
    );
  }
}

export default Searchbar;
