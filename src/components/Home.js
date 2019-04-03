import React from "react";

const Home = props => {
  const seeFriends = e => {
    e.preventDefault();
    props.history.push("/friends-list");
  };
  return (
    <div>
      <div className="main-container">
        <h1> Welcome </h1>
        <button onClick={seeFriends}>See my current friends</button>
      </div>
    </div>
  );
};

export default Home;
