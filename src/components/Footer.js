import React from "react";
import * as style from "../styles/homestyle";

const Footer = props => {
  const seeFriends = e => {
    e.preventDefault();
    props.history.push("/friends-list");
  };
  return <div>Made with love</div>;
};

export default Footer;
