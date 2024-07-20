import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./public/images/logo.png" alt="logo" className="main-logo " />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 1rem 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  .main-logo {
    width: 150px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .main-logo {
      width: 150px;
      height: auto;
    }
  }
`;

export default Header;
