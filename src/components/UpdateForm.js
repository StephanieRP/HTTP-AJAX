import React, { Component } from "react";
import PropTypes from "prop-types";
// import * as style from "../styles/friends-style";
export default class UpdateForm extends Component {
  state = {
    friend: this.props.activeFriend
  };

  inputHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.editFriend(this.state.friend);
    this.props.history.push("/friends-list");
  };
  render() {
    console.log(this.props);
    const { name, age, email } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.inputHandler}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={age}
            placeholder="Age"
            onChange={this.inputHandler}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.inputHandler}
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
