import React, { Component } from "react";

class ChildApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5 + this.props.increment
    };
  }
  incrementFunc = () => {
    this.setState(
      (state, props) => ({
        fullCount: state.count + props.increment
      }),
      () => alert(this.state.fullCount)
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementFunc}>Click</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default ChildApp;
