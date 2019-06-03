import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "coconut"
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.value);
  };
  render() {
    return (
      <div className="col-md-4">
        <form action="" onSubmit={this.handleSubmit}>
          <select
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <button className="btn btn-primary btn-block mt-2" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default NameForm;
