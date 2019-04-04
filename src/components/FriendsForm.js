import React, { Component } from "react";
import PropTypes from "prop-types";
import * as style from "../styles/friends-style";
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

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <style.FriendsForm>
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.inputHandler}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.inputHandler}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.inputHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </style.FriendsForm>
    );
  }
}

FriendsForm.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string
    })
  )
};
