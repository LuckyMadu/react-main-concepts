import React, { Component } from "react";
import NumberList from "./numbers";

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const doubles = numbers.map(number => number * 2);
    const listItems = numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ));

    return (
      <div>
        {console.log(doubles)}
        <ul>{listItems}</ul>
        <NumberList numbers={numbers}/>
      </div>
    );
  }
}

export default App;
