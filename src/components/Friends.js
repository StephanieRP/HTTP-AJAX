import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Friends = props => {
  return (
    <div>
      <Link to={`/friend-list/${props.friends.id}-friend_info`}>
        <h3>{props.friends.name}</h3>
      </Link>
    </div>
  );
};

Friends.propTypes = {};

export default Friends;
