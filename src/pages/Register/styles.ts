import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 4%;
  background-image: linear-gradient(to bottom, #f20171, #b01956, #731b3c, #3b1521, #000000);

  form {
    padding: 10px 0;
    max-width: 520px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img {
        max-width: 220px;
        width: 100%;
      }

      @media screen and (max-width: 300px) {
        img {
          width: 120px;
        }
      }

      > button {
        background-color: white;
        color: black;
        padding: 8px 9px;
        border: 0;
        border-radius: 5px;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;

        :hover {
          color: gray;
        }
      }
    }

    h1 {
      font-size: 28px;
      text-align: center;
      font-weight: 300;
      margin: 18px 0;
    }

    .boxInputs {
      width: 100%;
      max-width: 520px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .boxSelect {
        display: flex;
        flex-direction: column;
        width: 48%;

        label {
          color: white;
          font-size: 1.25rem;
          margin: .625rem 0;
          font-weight: 600;
        }

        select {
          height: 50px;
          background-color: rgba(255, 255, 255, 0.51);
          border-radius: 18px;
          font-size: 1.25rem;

          option {
            color: black;
          }
        }
      }
    }

    > button {
      background-color: var(--color-0);
      width: 100%;
      border: none;
      border-radius: 18px;
      height: 50px;
      font-size: 1.25rem;
      margin: 35px 0;
      cursor: pointer;

      :hover {
        background-color: var(--color-1);
        color: var(--color-0);
      }

      :active {
        background-color: gray;
      }
    }
  }
`

export default Container;