import { ReactNode } from "react";
import styled from "styled-components";

interface IDevLovContainer {
  Container: ReactNode;
}

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(245, 1, 114, 1), #271d22);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
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
    img {
      width: 15rem;
    }
  }
`;
