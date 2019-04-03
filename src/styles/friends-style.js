import React from "react";
import styled from "styled-components";

export const FriendListStyle = styled.div`
  h2 {
    font-size: 2rem;
    text-decoration: underline;
    text-align: center;
    padding-top: 0.5rem;
  }
`;

export const FriendsStyle = styled.div`

div {
    width: 20%;
    margin: 0 auto;

  a {
    text-decoration: none;
    cursor: pointer;
    background: blue;
    text-align: center
    display: block;
    color: white;
    margin: 1rem 0;


    &:hover {
      background: red;
    }
  }

  h3 {
    font-size: 1.5rem;
    padding: 1rem;
    /* background: black; */
  }
}
`;

export const IndvidFriend = styled.div`
  width: 50%;
  margin: 2rem auto;
  text-align: center;

  div {
    font-size: 2rem;
    background: blue;
    color: white;
    padding: 2rem;
    margin-bottom: 5rem;
    h2,
    p {
      margin: 1rem 0;
      &:hover {
        color: yellow;
      }
    }
  }
  a {
    text-decoration: none;
    background: green;
    padding: 1rem;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
  }
`;
