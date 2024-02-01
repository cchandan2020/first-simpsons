import React, { Component } from "react";
import Character from "./Character";
class Characters extends Component {
  state = {};

  render() {
    return (
      <>
        {this.props.data &&
          this.props.data.map((item) => <Character data={item} />)}
      </>
    );
  }
}

export default Characters;
