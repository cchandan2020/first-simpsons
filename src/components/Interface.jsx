import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  state = {};
  render() {
    return (
      <>
        <button onClick={this.props.cast}>CastButton</button>
        <Characters data={this.props.data} />
      </>
    );
  }
}

export default Interface;
