import React, { Component } from "react";
import Blog from "./components/list_and_keys/blog";

class App extends Component {
  render() {
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm."
      }
    ];
    return <Blog posts={posts} />;
  }
}

export default App;
