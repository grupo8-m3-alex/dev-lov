import styled from "styled-components";

export const All = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 max-width: 100vw;
 width: 100%;
 height: 100vh;
 background-image: linear-gradient(
  to bottom,
  rgba(255, 255, 255, 0.15),
  rgba(255, 255, 255, 0.15)
 );

 .EditModal {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  box-shadow: 0 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  height: 400px;

  .Head {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 92%;
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);

   div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;

    h2 {
     margin: 0 0 0 5px;
     font-size: 17px;
     animation-name: name;
     animation-duration: 1s linear infinite;
     animation-direction: alternate;
     animation-iteration-count: infinite;
     
      &:hover {
       cursor: none;
       background-size: auto auto;
       background-clip: border-box;
       background-size: 200% auto;
       background-image: linear-gradient(-225deg, #ff1361 0%, gray 100%);
       background-clip: text;
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       animation: name 1s linear infinite;
       @keyframes name {
        to {background-position: 200% center;}
        
       }
      }
     }
    }

    button {
     background: none;
     padding: 0;
     width: 20px;
     height: 20px;
     margin-right: 5px;
     border: none;

     &:active {
      color: white;
      background: #aeaeb5;
      border-radius: 2px;
     }

     &:hover {
      cursor: pointer;
     }

     svg {
      width: 20px;
      height: 20px;
     }
    }
   }
  }

 .InfoUser {
  display: flex;
  align-items: center;
  width: 92%;
  margin-top: 10px;

  img {
   width: 60px;
   height: 60px;
   border-radius: 100%;
   margin-left: 5px;
  }

  h2 {
   font-size: 18px;
   margin: 0 0 0 20px;
  }
 }

 form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  max-width: 449px;
  max-height: 240px;
  width: 100%;
  height: 100%;

  textarea {
   resize: none;
   background: #f1f1f1;
   border-radius: 0 0 10px 10px;
   border: 1px solid transparent;
   max-width: 449px;
   max-height: 205px;
   width: 100%;
   height: 100%;
   padding: 5px;
   transition: 0.2s;

   &:hover {
    border: 1px solid gray;
    transition: 0.2s;
   }
  }

  span {
   color: red;
   font-size: 12px;
   font-weight: bold;
  }

  button {
   background: #f20171;
   border-radius: 5px;
   max-width: 150px;
   width: 100%;
   height: 30px;
   margin-top: 10px;
   border: 2px solid transparent;
   color: white;
   
   &:hover {
    cursor: pointer;
    animation: backBtn 0.5s linear infinite alternate;
    animation-iteration-count: infinite;

    @keyframes backBtn {
     from {background-color: #f20171}
     to {background-color: #AC0050}
    }
   }
   
   &:active {
    box-shadow: 0 0 5px 2px gray;
   }
  }
 }
`