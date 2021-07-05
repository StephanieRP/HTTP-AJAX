import React from "react";
import styled from "styled-components";

export const FriendListStyle = styled.div`
  h2 {
    font-size: 2.6rem;
    ${"" /* text-decoration: underline; */}
    text-align: center;
    padding: 1rem 0;
  }
`;

export const FriendsStyle = styled.div`

div {
    justify-content: center;
    align-content: center
    display: flex;


  a {
    text-decoration: none;
    cursor: pointer;
    background: #95b8d1;
    text-align: center
    color: white;
    padding: 1rem 5rem;
    width: 40%;

    


    &:hover {
        background: #edafb8;
        color: black;
      }
  }

  h3 {
    font-size: 2rem;
  }
  span {
    background: #edafb8;
   text-align: center;
    color: #333333;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background: #333333;
        color: #edafb8;
      }

 }
}
`;

export const IndvidFriend = styled.div`
  width: 50%;
  margin: 5rem auto;
  text-align: center;

  div {
    font-size: 2rem;
    background: #95b8d1;
    color: white;
    padding: 2rem;
    margin-bottom: 5rem;
    border-radius: 5px;

    h2,
    p {
      margin: 1rem 0;
      font-weight: bold;
      &:hover {
        color: #e8ddb5;
      }
    }
  }
  a {
    text-decoration: none;
    background: #333333;
    padding: 1rem;
    border-radius: 5px;
    color: white;
    ctext-transform: uppercase;
    font-weight: bold;

    &:hover {
      background: #edafb8;
      color: black;
    }
  }
`;

export const FriendsForm = styled.div`
  width: 70%;
  margin: 2rem auto;
  background: #95b8d1;
  padding: 3rem;
  border-radius: 5px;
  div {
    width: 70%;
    margin: 1rem auto;

    input {
      width: 100%;
      padding: 2rem;
      margin: 0.8rem auto;
      font-size: 1.5rem;
      outline: none;

      &::placeholder {
        color: #333333;
      }

      &:focus {
        border: 0.5px solid #333333;
      }
    }
  }
  button {
    outline: none;
    background: #333333;
    color: white;
    border-radius: 6px;
    padding: 0.5rem;
    margin: 2rem auto;
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background: #edafb8;
      color: black;
    }
  }
`;
