import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ simpsons: data }); // creating a label simpsons for the dataset returned
  };

  //we can create functions thre and pass a reference down to child objects

  cast = () => {
    console.log("cast ran");
  };

  render() {
    console.log(this.state);
    //return <>{this.state.simpsons}</>;
    return (
      <>
        <Interface data={this.state.simpsons} cast={this.cast} />
      </>
    );
  }
}

export default App;
