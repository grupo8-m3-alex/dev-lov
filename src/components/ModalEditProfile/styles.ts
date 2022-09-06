import styled, { createGlobalStyle } from 'styled-components';

export const ModalEditContainer = createGlobalStyle`
  .Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 4%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .Modal > div {
      position: fixed;
      width: 90%;
    border-radius: 8px;
    max-width: 532px;
    display: flex;
    background-color: aliceblue;
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    align-items: center;
    flex-direction: column;
    padding-bottom: 2rem;

    .Header_modalAdd{
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 20px;
        border-bottom: 1px solid gray;
        padding-bottom: 10px;
        button{
            border: none;
            background-color: transparent;
            color: black;
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
                border-radius: 4px;
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
        gap: 20px;
    }
`;

export const LabelInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 0.625rem;

  label {
    color: #000;
  }

  input {
    padding: 8px;
    border-radius: 10px;
    color: #000;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;

    &:focus {
      outline: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
`;
