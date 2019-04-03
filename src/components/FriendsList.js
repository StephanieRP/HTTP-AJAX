import React from "react";
import Friends from "./Friends";
import * as style from "../styles/friends-style";
// import PropTypes from "prop-types";

function FriendsList(props) {
  // const { friends } = props.data;
  return (
    <style.FriendListStyle>
      <h2> Friends List </h2>

      {props.friends.map(friend => (
        <Friends key={friend.id} friends={friend} />
      ))}
    </style.FriendListStyle>
  );
}

FriendsList.propTypes = {};

export default FriendsList;
