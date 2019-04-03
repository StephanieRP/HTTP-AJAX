import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import Friend from "./components/Friend";
import Home from "./components/Home";

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
        <header>
          <ul>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/add-friend">Add Friend</NavLink>
          </ul>
        </header>
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
      </div>
    );
  }
}

export default App;
