import React, { Component } from "react";
import Welcome from "./welcome";
import User from "./user";
class App extends Component {
  render() {
    const comment = {
      title: "This is post01",
      author: {
        name: "Connon Doil",
        age:50
      }
    };

    return (
      <div>
        <Welcome title={comment.title} user={comment.author}/>
        <User user={comment.author} />
        {/*    <Welcome name="Kamal" />
        <Welcome name="Sunil" /> */}
      </div>
    );
  }
}

export default App;
