import React from "react";
import styled from "styled-components";

export const HomeStyle = styled.div`
  .main-container {
    padding: 10rem;
    h1 {
      font-size: 5rem;
      text-align: center;
      font-weight: bold;
    }
    button {
      outline: none;
      background: #333333;
      font-weight: bold;
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
  }
`;
