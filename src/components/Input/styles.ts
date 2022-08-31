import styled, { css } from "styled-components";

interface IBoxInput {
  widthInput: number
}

const BoxInput = styled.div<IBoxInput>`
  width: ${({ widthInput }) => `${widthInput || 100}%`};
  display: flex;
  flex-direction: column;

  label {
    color: white;
    font-size: 1.25rem;
    margin: .625rem 0;
    font-weight: 600;
  }

  input {
    color: white;
    background-color: rgba(255, 255, 255, 0.51);
    height: 50px;
    border-radius: 18px;
    padding-left: 0.4375rem;
    color: white;
    border: 0;
    outline: none;
    font-size: 1.25rem;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: 2px solid white;
    }
  }

  span {
    color: yellow;
    margin-top: 5px;
  }

`;

export default BoxInput;
