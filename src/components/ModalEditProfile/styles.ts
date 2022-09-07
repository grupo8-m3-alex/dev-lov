import styled, { createGlobalStyle } from 'styled-components';

export const ModalEditContainer = createGlobalStyle`
  .Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 4%;
    width: 100%;
    background-color: transparent;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Modal > div {
      position: fixed;
      width: 90%;
    border-radius: 0.5rem;
    max-width: 33.25rem;
    display: flex;
    background-color: aliceblue;
box-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.4);
    align-items: center;
    flex-direction: column;
    padding-bottom: 2rem;
    max-height: 32.125rem;

  overflow: scroll;

    .Header_modalAdd{
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 1.25rem;
        border-bottom: 0.0625rem solid gray;
        padding-bottom: 0.625rem;
        button{
            border: none;
            background-color: transparent;
            color: black;

            cursor: pointer;
        }
    }

    h3{
        color: black;
    }
    form {
        display: flex;
        flex-direction: column;
        .buttonContainer{
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;

            .buttonPubli{
                background-color: #F20171;
                opacity: 0.7;
                color: aliceblue;
                font-weight: 600;
                font-size: 1rem;
                border: none;
                border-radius: 0.25rem;
                height: 3rem;
                width: 100%;
                margin-top: 1.5rem;
                
                cursor: pointer;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
  }

  .Modal > div > div {
      width: 90%;
      margin: auto;
  }

   .Modal> div > div >img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;
    }

    .Modal> div > div >span {
        color: black;
        font-size: 2rem;
        font-weight: 500;
    }
.imgaAndName{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.25rem;
    }
`;

export const LabelInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;

  margin-top: 0.625rem;

  label {
    color: #000;
    font-size: 0.875rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 0.625rem;
    color: #000;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;

    &:focus {
      outline: 0.0625rem solid rgba(0, 0, 0, 0.5);
    }
  }

  span {
    font-size: 0.75rem;
    color: red;
  }
`;
