import React from "react";
import Friends from "./Friends";
import * as style from "../styles/friends-style";
import PropTypes from "prop-types";

function FriendsList(props) {
  // const { friends } = props.data;
  return (
    <style.FriendListStyle>
      <h2> Friends List </h2>

      {props.friends.map(friend => (
        <Friends
          key={friend.id}
          friends={friend}
          removeFriend={props.removeFriend}
          activeFriend={props.activeFriend}
        />
      ))}
    </style.FriendListStyle>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string
    })
  )
};

export default FriendsList;
