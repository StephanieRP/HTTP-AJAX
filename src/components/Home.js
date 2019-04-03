import React from "react";
import * as style from "../styles/homestyle";

const Home = props => {
  const seeFriends = e => {
    e.preventDefault();
    props.history.push("/friends-list");
  };
  return (
    <style.HomeStyle>
      <div className="main-container">
        <h1> Welcome </h1>
        <button onClick={seeFriends}>See my current friends</button>
      </div>
    </style.HomeStyle>
  );
};

export default Home;
