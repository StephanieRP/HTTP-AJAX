import React from "react";
import Friends from "./Friends";
// import PropTypes from "prop-types";

function FriendsList(props) {
  // const { friends } = props.data;
  return (
    <div>
      <h2> Friends List </h2>

      {props.friends.map(friend => (
        <Friends key={friend.id} friends={friend} />
      ))}
    </div>
  );
}

FriendsList.propTypes = {};

export default FriendsList;
