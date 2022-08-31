import { ReactNode } from "react";
import styled from "styled-components";

interface IDevLovContainer {
  Container: ReactNode;
}

export const DevLovContainer = styled.div`
  * {
    font-family: "Inter";
  }
  padding-top: 2rem;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(245, 1, 114, 1), #271d22);
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 86%;
    max-width: 19rem;
    margin: auto;
    margin-bottom: 4rem;
    img {
      width: 12rem;
    }
  }
`;

export const CardContainer = styled.ul`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  > li {
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    width: 22.1875rem;
    height: 36.39rem;
    max-width: 17.1875rem;
    max-height: 24.2rem;

    border-radius: 8px;
    align-items: baseline;
    padding-top: 10px;

    .nameAndinfo {
      position: absolute;
      top: 250px;
      left: 10px;
      width: max-content;
    }

    > div {
      width: 87%;
      margin: auto;
      position: relative;
      span {
        margin-right: 4px;
      }
      svg {
        /* position: absolute;
        top: 256px;
        left: 126px; */
      }
      > img {
        width: 15rem;
        height: 18rem;
        object-fit: cover;
      }
    }
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
      }
    }
  }
`;
