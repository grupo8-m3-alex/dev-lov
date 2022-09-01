import styled from 'styled-components';

export const ContainerHome = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 min-height: 100vh;
 height: 100%;
 background-color: rgba(57,0,0,0.03);

 .NovaPublicacao {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 750px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 12px 12px 12px;
  margin: 30px 0 20px 0;

   img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: black;
    margin: 10px;
   }

   button {
    background-color: #F2F2F2;
    text-align: left;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    height: 40px;
    border: none;
    margin: 10px;
    transition: 0.1s;

    &:hover {
      transition: 0.1s;
      cursor: pointer;
    }

    &:active {
      box-shadow: 0 0 2px 2px black;
    }
  }
 }
` 