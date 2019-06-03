import React from "react";
import ListItem from "./listItem";

const NumberList = props => {
  const numbers = props.numbers;
  /*  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  )); */
  const listItems = numbers.map(number => (
    <ListItem key={number.toString()} value={number} />
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default NumberList;
