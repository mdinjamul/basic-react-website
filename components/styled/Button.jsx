import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  min-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    box-shadow: ${({ theme }) => theme.colors.shadow};
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.8rem;
  }
`;
