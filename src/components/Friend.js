import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as style from "../styles/friends-style";

const Friend = props => {
  console.log("Friend", props);
  const friends = props.friends.find(friend => {
    return `${friend.id}` === props.match.params.friendsid;
  });
  if (!friends) return <h3>Looking for your friends...</h3>;

  return (
    <style.IndvidFriend>
      <div>
        <h2>Name: {friends.name}</h2>
        <p>Age: {friends.age}</p>
        <p> Email: {friends.email}</p>
      </div>
      <Link to="/friends-list">Back to friends list</Link>
    </style.IndvidFriend>
  );
};

Friend.propTypes = {};

export default Friend;
