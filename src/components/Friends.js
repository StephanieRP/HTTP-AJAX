import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as style from "../styles/friends-style";
const Friends = props => {
  return (
    <style.FriendsStyle>
      <div>
        <Link to={`/friend-list/${props.friends.id}-friend_info`}>
          <h3>{props.friends.name}</h3>
        </Link>
      </div>
    </style.FriendsStyle>
  );
};

Friends.propTypes = {};

export default Friends;
