import React, { Component } from "react";
import PropTypes from "prop-types";
// import * as style from "../styles/friends-style";
export default class UpdateForm extends Component {
  state = {
    friend: this.props.friend
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.editFriend(this.state.friend);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.inputHandler}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.inputHandler}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.inputHandler}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

UpdateForm.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string
    })
  )
};
