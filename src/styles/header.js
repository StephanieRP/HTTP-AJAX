import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  background: green;
  padding: 1rem;

  ul {
    display: flex;
    justify-content: space-between;
  }
  .active {
    color: red;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    background: blue;
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
  }
`;
