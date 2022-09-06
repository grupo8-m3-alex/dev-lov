import styled from 'styled-components';

interface Props {
  isFocused: boolean;
}

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    #f20171,
    #b01956,
    #731b3c,
    #3b1521,
    #000000
  );
  min-height: 100vh;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2.375rem;
    padding-bottom: 3.5rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 28.4375rem;
  padding: 0 1.4375rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
  label {
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .emailInput {
    display: flex;
    flex-direction: column;
    gap: 1.0625rem;

    input {
      width: 100%;
      padding: 1.0625rem 0.9375rem;
      border-radius: 20px;
      border: none;
      outline: none;

      color: rgba(255, 255, 255, 0.6);
      font-size: 1.25rem;
      font-weight: 600;
      background-color: rgba(255, 255, 255, 0.6);

      &:focus {
        border: 2px solid #ffffff;
      }
    }
  }

  .passwordError {
    color: rgb(255, 255, 0);
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #f20171;
  font-size: 20px;
  font-weight: 600;
  border: none;
  padding: 1.125rem;
  border-radius: 1rem;

  &:hover {
    background-color: #ffffff;
    color: #f20171;

    cursor: pointer;
  }
`;

export const Password = styled.div<Props>`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  outline: 2px solid ${({ isFocused }) => (isFocused ? '#FFF' : 'none')};
  padding: 0 0.4375rem;
  border-radius: 20px;
  height: 50px;

  color: white;

  background-color: rgba(255, 255, 255, 0.51);

  input {
    background-color: transparent;
    width: 100%;
    border: none;
    font-size: 1.25rem;
    outline: none;
    color: white;

    &::placeholder {
      color: white;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
