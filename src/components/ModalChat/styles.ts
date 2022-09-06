import { createGlobalStyle } from "styled-components";

const ModalGlobal = createGlobalStyle`

  .Modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 900px;
    padding: 10px 4%;
    width: 100%;
    background-color: white;
    border-radius: 8px;
    border: none;
    outline: none;
    height: 600px;

    @media screen and (max-width: 950px){
      width: 90%;
    }
    

    .header {
      padding: 20px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          color: var(--color-0);
          font-size: 1.75rem;
          margin-right: 8px;
        }
      }

      button {
        cursor: pointer;
        color: #ff5757;
        background: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .boxChat {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      > ul {
        list-style: none;
        width: 100%;
        max-width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        

        > li {
          color: var(--color-2);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          cursor: pointer;
          margin: 5px 0;

          p {
            color: black;
            font-weight: 600;
            margin-right: 10px;
          }

          p.select {
            color: var(--color-0);
          }
        }
      }

      .containerChat {
        max-width: 700px;
        height: 500px;
        width: 100%;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        position: relative;


        h2 {
          text-align: center;
          color: var(--color-2);
          padding: 10px 0;
        }

        h3 {
          text-align: center;
          color: var(--color-2);
          font-size: 28px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          
          span {
            margin-left: 9px;
          }
        }

        .listMessages {
          list-style: none;
          box-shadow: inset 3px -3px 39px -2px rgba(0,0,0,0.75);
          height: 400px;
          border-radius: 8px 8px 0 0;
          padding: 20px;
          overflow: auto;

          > li {
            p {
              background-color: var(--color-2);
              margin: 10px 0;
              max-width: 48%;
              border-radius: 8px;
              padding: 5px;
            }
          }

          > li.me {
            display: flex;
            justify-content: flex-end;
            p {
              text-align: right;
              background-color: var(--color-0);
              width: 48%;
            }
          }
        }

        .boxMessageInput {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          padding: 5px 0;

          input {
            width: 70%;
            height: 45px;
            font-size: 1.125rem;
            background: none;
            outline: none;
            border: none;
            border-bottom: 1px solid black;
            color: black;

          }

          button {
            height: 45px;
            font-size: 1.125rem;
            width: 29%;
            border-radius: 8px;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.512)
  }
`;

export default ModalGlobal;