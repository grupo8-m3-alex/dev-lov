import { ReactNode } from "react";
import styled from "styled-components";

interface IModalLoading {
  children: ReactNode;
}

const ModalLoadingStyle = styled.div<IModalLoading>`
  background-color: white;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    background-color: var(--color-0);
    max-width: 200px;
    width: 100%;
    height: 200px;
  }
`

export default ModalLoadingStyle;