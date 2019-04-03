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
        <div class="form-group">
          <input type="text" name="name" value="" />
        </div>
        <div>
          <input type="text" name="" value="" />
        </div>
        <div>
          <input type="text" name="" value="" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
