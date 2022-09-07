import styled from 'styled-components';

export const ContainerComment = styled.div`
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 750px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

  .HeadComment {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 750px;
    width: 100%;

    img {
      width: 50px;
      height: 45px;
      border-radius: 100%;
      margin-left: 30px;
    }

    h2 {
      font-size: 20px;
      margin-left: 20px;
      color: #000;
    }
  }

  .TextComment {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 700px;
    width: 100%;

    p {
      padding-right: 10px;
      max-width: 650px;
      margin-left: 40px;
      margin-right: 20px;
      width: 100%;
      word-wrap: break-word;
      text-align: justify;
      color: #000;
    }
  }
`;
