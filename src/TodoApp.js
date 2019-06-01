import React, { Component } from "react";

class TodoApp extends Component {
  state = {
    todo: ""
  };

  formChanged = e => {
    this.setState({
      todo: e.target.value
    });
  };

  formSubmitted = e => {
    e.preventDefault();
    console.log(this.state.todo);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.formSubmitted}>
          <input
            type="text"
            name="todo"
            onChange={this.formChanged}
            value={this.state.todo}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
