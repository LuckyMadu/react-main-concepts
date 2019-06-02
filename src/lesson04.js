import React, { Component } from "react";
import ChildApp from "./childApp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      increment: 5
    };
  }
 

  render() {
    return (
      <div>
        <ChildApp increment={this.state.increment}/>
      </div>
    );
  }
}

export default App;
