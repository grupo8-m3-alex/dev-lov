import styled from "styled-components";

export const Header_ = styled.header`
 display: flex;
 position: sticky;
 top: 0;
 justify-content: space-evenly;
 align-items: center;
 max-width: 100vw;
 width: 100%;
 height: 80px;
 padding: 0;
 margin: 0;
 background-image: linear-gradient(
  to bottom,
  rgba(245, 0, 114, 1) 85%,
  rgba(255, 255, 255, 1)
 );
 @media (max-width: 390px) {
  height: 70px;
 }

 .HeadAux {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 750px;
  width: 100%;
  margin: 0 5px 0 10px;

  img {
   width: 150px;
   @media (max-width: 390px) {
    width: 120px;
   }
  }

  .Profile {
   display: flex;
   align-items: center;
   max-width: 150px;
   width: 100%;
   height: 56px;
   @media (max-width: 390px) {
    max-width: 120px;
    align-items: flex-start;
    margin-top: 5px;
   }

   #btnDevlov {
    display: flex;
    justify-content: center;
    border-radius: 100%;
    border: transparent;
    width: 50px;
    height: 45px;
    padding: 0;
    margin-right: 20px;
    transition: 0.2s;
    @media (max-width: 390px) {
     width: 45px;
     height: 40px;
     margin-right: 10px;
    }

    img {
     border-radius: 100%;
     border: none;
     width: 50px;
     height: 45px;
     margin: 0;
     padding: 0;
     @media (max-width: 390px) {
      width: 45px;
      height: 40px;
     }
    }
   }

   #btnDevlov:hover {
    cursor: pointer;
    box-shadow: 0 0 20px -2px black;
    transition: 0.2s;
   }

   #btnDevlov:active {
    box-shadow: 0 0 2px 2px white;
   }

   #btnProfile {
    display: flex;
    justify-content: center;
    border-radius: 100%;
    border: transparent;
    width: 55px;
    height: 50px;
    padding: 0;
    margin: 0;
    transition: 0.2s;
    @media (max-width: 390px) {
     width: 45px;
     height: 40px;
    }

    img {
     border-radius: 100%;
     border: none;
     width: 55px;
     height: 50px;
     margin: 0;
     padding: 0;
     @media (max-width: 390px) {
      width: 45px;
      height: 40px;
     }
    }
   }

   #btnProfile:hover {
    cursor: pointer;
    box-shadow: 0 0 20px -2px black;
    transition: 0.2s;
   }

   #btnProfile:active {
    box-shadow: 0 0 2px 2px white;
   }
  }
 }
`;
