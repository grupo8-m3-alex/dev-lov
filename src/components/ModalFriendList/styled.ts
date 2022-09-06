import { createGlobalStyle } from 'styled-components';

export const ModalFriendContainer = createGlobalStyle`
  .Modal1 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-color: transparent;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
  }
  .Modal1 > div {
      position: fixed;
      width: 100%;
      height: 100vh;
    border-radius: 8px;
    max-width: 532px;
    display: flex;
    background-color: rgba(242, 242, 242, 1);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    align-items: center;
    flex-direction: column;

  }


  .header {
      margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 5rem;
      h1{
          color: black;
      }
      button {
          border: none;
          background-color: transparent;
          color: black;
          font-weight: 600;
          font-size: 1rem;

          cursor: pointer;
          &:active{
              color: red;
          }
      }
  }

  .Modal1 > div {
      .MainContainer {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 2rem;

      }
      ul{
          width: 81%;
          overflow: scroll;
          max-height: 80vh;
          padding-bottom: 3.5rem;
      }
      li {
          position: relative;
          display: flex;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
          width: 100%;
          height: 5rem;
          justify-content: space-between;
          align-items: center;
          padding-left: 1rem;
          padding-right: 1rem;
          margin-bottom: 1rem;
          img{
              width: 4rem;
              height: 4rem;
              border: 1px solid black;
              border-radius: 50%;
              object-fit: cover;

              cursor: pointer;
          }
          div{
              display: flex;
              flex-direction: column;
              height: 3rem;
              align-items: flex-start;
              gap: 15px;
              justify-content: space-between;
            margin-top: -15px;
            width: 70%;
          }
          span {
              color: black;
              font-family: "Inter";
              font-size: 1.2rem;
              font-weight: 600;
          }
          svg{
              color: black;
              opacity: 0.7;
              display: flex;
            position: absolute;
            top: 6px;
            right: 10px;
            font-size: 1.5rem;
            cursor: pointer;
            &:hover{
                opacity: 1;
            }
            &:active{
                color: red;
            }
          }
      }
  }
`;
