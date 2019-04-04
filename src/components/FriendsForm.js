import React, { Component } from "react";
import PropTypes from "prop-types";
import * as style from "../styles/friends-style";
export default class FriendsForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const friend = { ...this.state };
    this.props.addFriend(friend);

    this.setState({
      name: "",
      age: "",
      email: ""
    });
    this.props.history.push("/friends-list");
  };
  render() {
    console.log(this.props);
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
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.inputHandler}
          />
        </div>
        <button type="submit" onClick={this.submitHandler}>
          Submit
        </button>
      </style.FriendsForm>
    );
  }
}

FriendsForm.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string
    })
  )
};
