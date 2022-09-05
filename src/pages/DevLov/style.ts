import { ReactNode } from "react";
import styled from "styled-components";

interface IPropsDevLov {
  isChange: boolean;
}

export const DevLovContainer = styled.div`
  padding-top: 2rem;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(245, 1, 114, 1), #271d22);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 86%;
    max-width: 22.5rem;
    margin: auto;
    margin-bottom: 4rem;

    img {
      width: 12rem;
    }
  }
`;

export const CardContainer = styled.ul<IPropsDevLov>`
  @keyframes identifier {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
<<<<<<< HEAD

=======
  transform-style: preserve-3d;
>>>>>>> 4c286bf0214bc9ccb206153a29c068545fb547c2
  animation-name: ${({ isChange }) => (isChange ? "identifier" : "")};
  animation-duration: 0.5s;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    width: 90%;
    height: 25.39rem;
    max-width: 22.1875rem;

    border-radius: 8px;
    align-items: baseline;
    padding-top: 10px;

    .nameAndinfo {
      position: absolute;
      top: 280px;
      left: 10px;
      width: max-content;
    }

    > div {
      width: 93%;
      position: relative;
      span {
        margin-right: 4px;
        font-weight: 600;
        color: aliceblue;
      }

      svg {
        cursor: pointer;
      }
    }
  }
  .AvatarImage {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 4px;
  }

  .button__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      border: none;
      padding: 0;
      background-color: transparent;
      width: 3.375rem;

      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 700px) {
    li {
      height: 30.39rem;
      .nameAndinfo {
        top: 360px;
      }
    }
    
    span {
      font-size: 1.5rem;
    }
    .AvatarImage {
      height: 25rem;
    }
  }
`;
