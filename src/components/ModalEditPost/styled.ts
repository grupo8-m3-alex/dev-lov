import { createGlobalStyle } from "styled-components";

export const ModalEditContainer = createGlobalStyle`
  .Modal {
    position: absolute;
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
      height: 25rem;
    border-radius: 8px;
    max-width: 532px;
    display: flex;
    background-color: aliceblue;
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    align-items: center;
    flex-direction: column;

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
            .buttonDelete{
                background-color: rgba(0, 0, 0, 0.3);
                color: white;
                font-weight: 600;
                font-size: 1rem;
                border: none;
                border-radius: 4px;
                height: 3rem;
                width: 30%; 
                &:hover {
                    background-color: rgba(0, 0, 0, 0.5) 
                }
            }

            .buttonPubli{
                background-color: #F20171;
                opacity: 0.7;
                color: aliceblue;
                font-weight: 600;
                font-size: 1rem;
                border: none;
                border-radius: 4px;
                height: 3rem;
                width: 30%;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
     form> textarea {
        background-color: rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 10rem;
        margin-bottom: 10px;
        border: none;
        border-radius: 8px;
        color: black;
        font-size: 1rem;
        padding: 1rem;
        resize: none;
    }
  }

  .Modal > div > div {
      width: 90%;
      margin: auto;
  }

   .Modal> div > div >img {
        width: 4rem;
        border: 1px solid black;
        height: 4rem;
        border-radius: 50%;
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
