import React from "react";

function App() {
  const user = {
    firstname: "Lahiru",
    lastname: "Amarathunga"
  };

  function welcome(user) {
    return user.firstname + " " + user.lastname;
  }

  //JSX is an Expression Too
  function welcomeNote(user) {
    if (user.firstname === "Madu") return <h1>Hello {welcome(user)}!</h1>;
    else return <h1>Hello Stranger!</h1>;
  }

  // /Embedding Expressions in JSX
  const element = <h3>I am {welcome(user)}</h3>;
  return (
    <div className="App">
      {element}
      <h2>{welcomeNote(user)}</h2>
    </div>
  );
}

export default App;
