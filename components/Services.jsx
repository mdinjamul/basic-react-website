import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styled/Button";
import styled from "styled-components";
import { AppContext } from "../src/context";

const Services = () => {
  const { our_services } = useContext(AppContext);
  // console.log(our_services);
  return (
    <Wrapepr className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {our_services.map((currentElement) => {
          const { id, name, image, description } = currentElement;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapepr>
  );
};

const Wrapepr = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    .card {
      border: 0.1rem solid #ddd;
      .card-data {
        padding: 0 2rem;
        h3 {
          margin: 2rem auto;
          font-size: 2.4rem;
          font-weight: 300;
        }
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem auto;
        }
      }
    }
  }

  .container.grid {
    gap: 2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      width: 100%;
      margin: 2rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
`;

export default Services;
