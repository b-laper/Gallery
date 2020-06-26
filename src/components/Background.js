import React, { Component } from "react";
import background from "../images/background.png";

class Background extends Component {
  render() {
    return (
      <div>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={background}
        />
      </div>
    );
  }
}

export default Background;
