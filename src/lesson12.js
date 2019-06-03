import React, { Component } from "react";

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }
  handleInputChange = (e) =>{
      const target = e.target
      const value = target.type === 'checkbox'? target.checked : target.value
      const name = target.name

      this.setState({
          [name]:value
      })
  }
  render() {
    return (
      <div className="col-md-8">
        <form>
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            className="form-control"
          />
          <input
            type="number"
            name="numberOfGuests"
            onChange={this.handleInputChange}
            value={this.state.numberOfGuests}
            className="form-control"
          />
        </form>
      </div>
    );
  }
}

export default Reservation;
