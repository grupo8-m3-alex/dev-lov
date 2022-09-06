import styled from 'styled-components';

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
    box-shadow: 0 0rem 0.625rem 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 0.9375rem;
    max-width: 31.25rem;
    width: 100%;
    height: 25rem;

    .Head {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 92%;
      border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.2);

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.625rem;
        margin-top: 0.625rem;
        color: #000;

        h2 {
          margin: 0 0 0 0.3125rem;
          font-size: 1.0625rem;
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
              to {
                background-position: 200% center;
              }
            }
          }
        }
      }

      button {
        background: none;
        padding: 0;
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.3125rem;
        border: none;

        &:active {
          color: white;
          background: #aeaeb5;
          border-radius: 0.125rem;
        }

        &:hover {
          cursor: pointer;
        }

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }

  .InfoUser {
    display: flex;
    align-items: center;
    width: 92%;
    margin-top: 0.625rem;

    img {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 100%;
      margin-left: 0.3125rem;
      object-fit: cover;
    }

    h2 {
      font-size: 1.125rem;
      margin: 0 0 0 1.25rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.625rem;
    max-width: 28.0625rem;
    max-height: 15rem;
    width: 100%;
    height: 100%;

    textarea {
      resize: none;
      background: #f1f1f1;
      border-radius: 0 0 0.625rem 0.625rem;
      border: 0.0625rem solid transparent;
      max-width: 28.0625rem;
      max-height: 12.8125rem;
      width: 100%;
      height: 100%;
      padding: 0.3125rem;
      transition: 0.2s;
      color: #000;

      &:hover {
        border: 0.0625rem solid gray;
        transition: 0.2s;
      }
    }

    span {
      color: red;
      font-size: 0.75rem;
      font-weight: bold;
    }

    button {
      background-color: #f20171;
      border-radius: 0.3125rem;
      max-width: 9.375rem;
      width: 100%;
      height: 1.875rem;
      margin-top: 0.625rem;
      border: 0.125rem solid transparent;
      color: white;

      &:hover {
        cursor: pointer;
        animation: backBtn 0.5s linear infinite alternate;
        animation-iteration-count: infinite;

        @keyframes backBtn {
          from {
            background-color: #f20171;
          }
          to {
            background-color: #ac0050;
          }
        }
      }

      &:active {
        box-shadow: 0 0 0.3125rem 0.125rem gray;
      }
    }
  }
`;
