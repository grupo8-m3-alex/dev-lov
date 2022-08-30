import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  padding: 0 2%;
  background-image: linear-gradient(to bottom, #f20171, #b01956, #731b3c, #3b1521, #000000);

  form {
    padding: 10px 0;
    max-width: 330px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

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

      button {
        background-color: white;
        color: black;
        padding: 8px 9px;
        border: 0;
        border-radius: 5px;
        font-weight: 800;
        font-size: 16px;
      }
    }

    h1 {
      font-size: 28px;
      text-align: center;
      font-weight: 300;
      margin: 30px 0;
    }
  }
`

export default Container;