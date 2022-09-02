import { ReactNode } from "react";
import styled from "styled-components";

interface IModalLoading {
  children: ReactNode;
}

const ModalLoadingStyle = styled.div<IModalLoading>`
  @keyframes pulseHeart {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    25% {
      transform: scale(1.3);
      opacity: 0.5;
    }
    50% {
      transform: scale(1);
      opacity: 0.5;
    }
    75% {
      transform: scale(1.6);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  @keyframes cicle {
    0% {
      transform: rotateZ(0deg);
      border-radius: 50%;
    }
    50% {
      transform: rotateZ(360deg);
      border-radius: 0%;
    }
    100% {
      transform: rotatez(0deg);
      border-radius: 50%;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(rgba(245, 1, 114, 1), #271d22);
  div {
    width: 5rem;
    height: 5rem;
    border: 3px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    background-color: aliceblue;
    animation: cicle 2s infinite;
    position: absolute;
    z-index: 1;
  }
  svg {
    color: red;
    font-size: 4rem;
    animation: pulseHeart 1s infinite;
    position: absolute;
    z-index: 1;
  }

  .heart {
    animation: pulseHeart 0.5s infinite;
  }
`;

export default ModalLoadingStyle;
