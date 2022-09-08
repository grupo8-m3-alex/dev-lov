import styled from 'styled-components';

export const ContainerNoComment = styled.div`
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
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  .TextNoComment {
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
      color: #000;
    }
  }
`;
