import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const GoToTop = () => {
  const goToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [isVisible, SetIsVisible] = useState(false);

  const showScrollBtn = () => {
    let heightToHidden = 250;

    const pageScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (pageScroll > heightToHidden) {
      SetIsVisible(true);
    } else {
      SetIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showScrollBtn);
    return () => window.removeEventListener("scroll", showScrollBtn);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToTopBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    cursor: pointer;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }

    .top-btn--icon {
    }
  }
`;

export default GoToTop;
