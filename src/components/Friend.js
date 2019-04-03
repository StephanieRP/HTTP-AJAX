import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Friend = props => {
  console.log("Friend", props);
  const friends = props.friends.find(friend => {
    return `${friend.id}` === props.match.params.friendsid;
  });
  if (!friends) return <h3>Looking for your friends...</h3>;

  return (
    <div>
      <div>
        <h2>{friends.name}</h2>
        <p> {friends.age}</p>
        <p> {friends.email}</p>
      </div>
      <Link to="/friends-list">Back to friends list</Link>
    </div>
  );
};

Friend.propTypes = {};

export default Friend;
