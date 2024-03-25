import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styled/Button";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;

export default Error;
