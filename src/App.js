import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios.get();
    this.setState({
      friends: []
    });
  }

  render() {
    return (
      <div>
        <header>
          <ul>
            <NavLink to="/">Home</NavLink>
          </ul>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
