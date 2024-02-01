import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";

class Character extends Component {
  state = {};
  render() {
    return (
      <div className="character">
        {/* <img src={this.props.data.image} alt="Image of character" /> */}
        {/* <p>{this.props.data.character}</p> */}
        {/* <p>{this.props.data.quote}</p> */}
        <Name name={this.props.data.character} />
        <Quote quote={this.props.data.quote} />
      </div>
    );
  }
}

export default Character;
