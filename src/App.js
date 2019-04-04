import React, { Component } from "react";
import { Reset } from "styled-reset";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import Friend from "./components/Friend";
import Home from "./components/Home";
import styled from "styled-components";
import * as style from "./styles/header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        });
        // console.log(res);
      })
      .catch(err => {
        console.log("Something bad happened..", err);
      });
  }

  render() {
    return (
      <div>
        <Reset />
        <style.Header>
          <ul>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/add-friend">
              Add Friend
            </NavLink>
          </ul>
        </style.Header>
        <Route exact path="/" component={Home} />
        <Route
          path="/friends-list"
          render={() => <FriendsList friends={this.state.friends} />}
        />
        <Route
          path="/friend-list/:friendsid-friend_info"
          render={props => <Friend friends={this.state.friends} {...props} />}
        />
        <Route path="/add-friend" component={FriendsForm} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
