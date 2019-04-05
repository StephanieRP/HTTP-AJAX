import React from "react";
import PropTypes from "prop-types";
import * as style from "../styles/friends-style";
import { Route, NavLink, Link } from "react-router-dom";
import UpdateForm from "./UpdateForm";

const Friend = props => {
  //match id for each friend
  const friends = props.friends.find(friend => {
    return `${friend.id}` === props.match.params.friendsid;
  });
  if (!friends) return <h3>Looking for your friends...</h3>;

  const updateFriend = e => {
    e.preventDefault();
    props.activeFriend(friends);
    console.log(friends);
    props.history.push("/edit");
  };

  return (
    <style.IndvidFriend>
      <div>
        <button onClick={updateFriend}>Edit Friend</button>
        <div>
          <h2>Name: {friends.name}</h2>
          <p>Age: {friends.age}</p>
          <p> Email: {friends.email}</p>
        </div>
        <Link to="/friends-list">Back to friends list</Link>
      </div>
    </style.IndvidFriend>
  );
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string
    })
  )
};

export default Friend;
