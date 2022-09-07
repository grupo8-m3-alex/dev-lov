import styled, { keyframes } from 'styled-components';

interface animationLikeProps {
  animationLike: boolean;
}

const like = keyframes`
  0%{
    transform: scale(1);
  }

  100%{
    transform: scale(1.4);
  }

`;

export const Content = styled.div<animationLikeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 46.875rem;
  width: 100%;
  margin-bottom: 0.625rem;
  border-radius: 0 0 0.75rem 0.75rem;
  background-color: white;
  box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.2);

  .HeadPost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 46.875rem;
    width: 100%;
    margin: 0.125rem 0.3125rem 0.3125rem 0.3125rem;

    .InfoUser {
      display: flex;
      align-items: center;
      width: 300px;

      img {
        border-radius: 100%;
        width: 50px;
        height: 45px;
        margin-left: 30px;
      }

      h2 {
        margin-left: 30px;
        font-size: 20px;
        color: #000;

        @media screen and (max-width: 355px) {
          font-size: 15px;
        }
      }
    }

    .edit {
      border: none;
      background: none;
      padding: 0;

      svg {
        color: #a3a3a3;
        font-size: 25px;
        border-radius: 10px;
        border: 1px solid transparent;
        transition: 0.1s;

        &:hover {
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 0 2px 2px;
          transition: 0.1s;
        }

        &:active {
          background-color: #cc0066;
        }
      }
    }

    .delete {
      border: none;
      background: none;
      margin-left: 30px;
      padding: 0;

      @media screen and (max-width: 420px) {
        margin-left: 15px;
      }

      @media screen and (max-width: 420px) {
        margin: 0;
      }

      svg {
        color: #a3a3a3;
        font-size: 25px;
        border-radius: 10px;
        border: 1px solid transparent;
        transition: 0.1s;

        &:hover {
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 0 2px 2px;
          transition: 0.1s;
        }

        &:active {
          background-color: #cc0066;
        }
      }
    }
  }

  .Text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 728px;
    width: 100%;

    p {
      max-width: 720px;
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
      margin-right: 10px;
      margin-left: 10px;
      word-wrap: break-word;
      text-align: justify;
      color: #000;
    }
  }

  .Buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 750px;
    width: 100%;
    margin: 8px 0 10px 0;

    .LeftButtons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 450px;
      width: 100%;

      #btnOne {
        color: #000;
        display: flex;
        align-items: center;
        padding: 0;
        margin-left: 30px;
        width: max-content;
        background: none;
        border: none;
        border-bottom: 1px solid transparent;
        transition: 0.1s;
        position: relative;

        > span:first-child {
          margin-right: 25px;
        }
          
        .likeCount {
          position: absolute;
          right: -60px;

          @media screen and (max-width: 426px) {
            right: -50px;
          }
        }

        @media (max-width: 500px) {
          font-size: 12px;
        }
        @media (max-width: 360px) {
          font-size: 20px;
        }

        &:hover {
          cursor: pointer;
        }

        &:active {
          transition: 0.1s;
          color: blue;
          transition: 0.1s;
        }

        > svg {
          font-size: 18px;
          animation: ${({ animationLike }) => (animationLike ? like : '')} 0.3s;
          @media (max-width: 500px) {
            font-size: 15px;
          }
          @media (max-width: 360px) {
            font-size: 20px;
            width: 50px;
          }
        }

        span {
          font-size: 15px;
          margin-left: 5px;
          @media (max-width: 500px) {
            font-size: 12px;
          }
          @media (max-width: 360px) {
            display: none;
          }
        }
      }

      #btnTwo {
        color: #000;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        margin-left: 10px;
        border-bottom: 1px solid transparent;
        width: max-content;
        padding: 0;
        transition: 0.1s;
        @media (max-width: 500px) {
          font-size: 12px;
        }
        @media (max-width: 360px) {
          font-size: 20px;
          width: 50px;
        }

        &:hover {
          cursor: pointer;
        }

        &:active {
          color: #cc0066;
          transition: 0.1s;
        }

        svg {
          font-size: 18px;
          @media (max-width: 500px) {
            font-size: 15px;
          }
          @media (max-width: 360px) {
            font-size: 20px;
            width: 50px;
          }
        }

        span {
          font-size: 15px;
          margin-left: 5px;
          @media (max-width: 500px) {
            font-size: 12px;
          }
          @media (max-width: 360px) {
            display: none;
          }
        }
      }

      #btnThree {
        color: #000;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        max-width: 190px;
        width: 100%;
        background: none;
        border: none;
        padding: 0;
        margin-left: 5px;
        transition: 0.1s;
        @media (max-width: 500px) {
          font-size: 16px;
        }
        @media (max-width: 360px) {
          font-size: 20px;
          justify-content: flex-start;
          margin-left: 10px;
          margin-right: 15px;
          width: max-content;
        }

        &:active {
          transition: 0.1s;
          color: #989898;
        }

        &:hover {
          cursor: pointer;
        }

        svg {
          width: max-content;
          font-size: 20px;
          @media (max-width: 500px) {
            font-size: 19px;
          }
          @media (max-width: 360px) {
            font-size: 22px;
          }
        }
      }

      span {
        max-width: 200px;
        width: 100%;
        font-size: 15px;
        margin-left: 4px;
        text-align: left;
        @media (max-width: 500px) {
          font-size: 12px;
        }
        @media (max-width: 360px) {
          display: none;
        }
      }
    }
  }

  #addFriend {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cc0066;
    background: none;
    transition: 0.1s;
    border: none;
    width: max-content;
    margin-right: 30px;
    padding: 0;

    &:hover {
      transition: 0.1s;
      border-radius: 100%;
      cursor: pointer;
    }

    &:active {
      color: #99004c;
    }

    svg {
      font-size: 20px;
    }
  }
`;
