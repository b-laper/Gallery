import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSearchInput, onInputChange } from "./actions";
class Searchbar extends Component {
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

  render() {
    return (
      <div style={this.searchBarStyles}>
        <input
          style={{ width: "80%" }}
          type="text"
          value={this.props.input}
          onChange={() => this.props.onInputChange(this.props.input)}
        />
        <button onClick={() => this.props.submitSearchInput(this.props.input)}>
          Search
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pics: state.pics, input: state.input };
}

export default connect(mapStateToProps, { submitSearchInput, onInputChange })(
  Searchbar
);
