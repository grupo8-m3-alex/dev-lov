import styled from "styled-components";

export const Dropdown = styled.div`
 position: absolute;
 display: flex;
 top: 70px;
 max-width: 750px;
 width: 100%;
 height: 70px;
 margin: 0;
 justify-content: center;
 

 .Menu {
  position: absolute;
  right: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 69px;
  margin: 0;
  outline: 1px solid #BCBCBC;
  box-shadow: 0 0 2px 4px #BCBCBC;
  background-image: linear-gradient(rgba(225, 225, 225, 1));
  border-radius: 4px;
  transition: 0.2s;
  opacity: 0.4;

  &:hover{
   background-color: rgba(213, 213, 213, 0.45);
   transition: 0.2s;
   opacity: 1;
  }

  #editProfile {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   background: none;
   width: 59px;
   height: 22px;
   border: none;
   padding: 0;
   transition: 0.2s;
   margin: auto;

   span {
     font-size: 13px;
     line-height: 22px;
     font-weight: bold;
     margin-left: 5px;
   }

   svg {
     font-size: 22px;
   }

   &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: 0.2s;
   }
   
   &:active {
     color: white;
   }
  }

  #logout {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   background: none;
   width: 50px;
   height: 22px;
   border: none;
   padding: 0;
   margin: auto;
   margin-left: 17px;
   transition: 0.2s;
   
   span {
     font-size: 13px;
     line-height: 22px;
     font-weight: bold;
     margin-left: 3.2px;
   }
   
   svg {
     font-size: 22px;
   }
   
   &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: 0.2s;
   }

   &:active {
     color: white;
   }
  }
 }
`