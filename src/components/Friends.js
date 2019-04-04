import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as style from "../styles/friends-style";

const Friends = props => {
  const deleteFriend = e => {
    e.preventDefault();
    props.removeFriend(props.friends.id);
  };
  return (
    <style.FriendsStyle>
      <div>
        <Link to={`/friend-list/${props.friends.id}-friend_info`}>
          <h3>{props.friends.name}</h3>
        </Link>
        <span onClick={deleteFriend}> x</span>
      </div>
    </style.FriendsStyle>
  );
};

Friends.propTypes = {};

export default Friends;
