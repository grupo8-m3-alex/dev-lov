import styled from "styled-components";

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
 box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

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
  }
 }

 p {
  margin: 5px 30px 10px;
  text-align: justify;
 }
`