import React from "react";

const User = props => {
  const { user } = props;
  return (
    <div>
      <h3> {user.name}</h3>
    </div>
  );
};

export default User;
