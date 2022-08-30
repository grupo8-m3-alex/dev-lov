import styled from "styled-components";

const BoxInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 330px;

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
    border-radius: 9px;
    padding-left: 0.4375rem;
    color: white;
    border: 0;
    outline: none;
    font-size: 1.25rem;

    &::placeholder {
      color: white;
    }
  }



`;

export default BoxInput;
