import React, { Component } from "react";
import Clock from "./clock";
class App extends Component {
  render() {
    return <Clock date={new Date()} />;
  }
}

export default App;
