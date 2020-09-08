import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSearchInput } from "./actions";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
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
  onInputChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    return (
      <div style={this.searchBarStyles}>
        <input
          style={{ width: "80%" }}
          type="text"
          value={this.state.input}
          onChange={this.onInputChange}
        />
        <button
          type="submit"
          onClick={() => this.props.submitSearchInput(this.state.input)}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pics: state.pics,
  };
};

export default connect(mapStateToProps, { submitSearchInput })(Searchbar);
