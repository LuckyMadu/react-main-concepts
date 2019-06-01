import React from "react";

const Welcome = props => {
  //props.title = "Kamal";   Cannot MOdify, READ-ONLY
  return (
    <div>
      <h4>{props.title} </h4>
      <h5>My name is {props.user.name} and My age is {props.user.age}</h5>
    </div>
  );
};

export default Welcome;
