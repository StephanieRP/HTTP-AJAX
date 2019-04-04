import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  background: #95b8d1;
  padding: 1rem;

  ul {
    display: flex;
    justify-content: space-between;
  }
  .active {
    color: #edafb8;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    background: #333333;
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      background: #edafb8;
      color: black;
    }
  }
`;
