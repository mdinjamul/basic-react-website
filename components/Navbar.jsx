import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

function Navbar() {
  // usestate for opening mobile menu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <Nav>
      <div className={openMobileMenu ? "menu-icon active" : "menu-icon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMobileMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMobileMenu(false)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMobileMenu(false)}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMobileMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            className="mobile-nav-icon"
            onClick={() => setOpenMobileMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            onClick={() => setOpenMobileMenu(false)}
            className="close-outline mobile-nav-icon"
          />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 20px;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  /* Responsive navbar */
  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  /* .mobile-navbar-btn[name="close-outline"] {
    display: none;
  } */

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        color: ${({ theme }) => theme.colors.black};
        font-size: 4.2rem;
      }
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
        }
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      z-index: 999;
    }
  }
`;

export default Navbar;
