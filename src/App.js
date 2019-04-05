import React, { Component } from "react";
import { Reset } from "styled-reset";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import Friend from "./components/Friend";
import UpdateForm from "./components/UpdateForm";
import Home from "./components/Home";
import * as style from "./styles/header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
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

  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });

        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  editFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data,
          deleteMessage: "Successfully removed friend :(",
          deleteError: ""
        });
        console.log(res);
      })
      .catch(err => {
        this.setState({
          deleteError: "Something went wrong, try again",
          deleteMessage: ""
        });
        console.log(err);
      });
  };

  activeFriend = friend => {
    this.setState({ activeFriend: friend });
  };

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
          render={() => (
            <FriendsList
              friends={this.state.friends}
              removeFriend={this.removeFriend}
            />
          )}
        />
        <Route
          path="/friend-list/:friendsid-friend_info"
          render={props => (
            <Friend
              friends={this.state.friends}
              {...props}
              editFriend={this.editFriend}
              activeFriend={this.activeFriend}
            />
          )}
        />
        <Route
          path="/add-friend"
          render={props => (
            <FriendsForm
              friends={this.state.friends}
              {...props}
              addFriend={this.addFriend}
              errorMessage={this.state.errorMessage}
              successMessage={this.state.successMessage}
            />
          )}
        />

        <Route
          path="/edit"
          render={props => (
            <UpdateForm
              editFriend={this.editFriend}
              activeFriend={this.state.activeFriend}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
