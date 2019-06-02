/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class App extends Component {
  state = {};

  handleClick = e => {
    e.preventDefault();
    console.log("Clicked");
  };
  render() {
    return (
      <div>
        <a href="#" onClick={this.handleClick}>
          Click me
        </a>
        
      </div>
    );
  }
}

export default App;
