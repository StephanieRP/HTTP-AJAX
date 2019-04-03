import React, { Component } from "react";

export default class FriendsForm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      age: "",
      email: ""
    };
  }
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Name"
          />
        </div>
        <div>
          <input type="email" name="email" value={this.state.email} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
