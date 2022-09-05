import styled from "styled-components";

interface IPropsDevLov {
  isChange: boolean;
}

export const DevLovContainer = styled.div`
  padding-top: 2rem;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(245, 1, 114, 1), #271d22);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 86%;
    max-width: 22.5rem;
    margin: auto;
    margin-bottom: 4rem;

    img {
      width: 12rem;
    }
  }

  @keyframes noFriends {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    85% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.1;
    }
  }
  @keyframes Friends {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.7;
    }
  }

  @keyframes noFriends2 {
    0% {
      opacity: 0.3;
    }
    10% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    80% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes noFriends3 {
    0% {
      opacity: 0.3;
    }
    20% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    70% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.1;
    }
  }
  @keyframes noFriends4 {
    0% {
      opacity: 0.3;
    }
    30% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
    60% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.1;
    }
  }

  .divImgFrinds {
    position: relative;
    width: 100vw;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .border1 {
      border: 0.5rem solid rgba(255, 255, 255, 0.7);
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
      animation: noFriends 1.5s infinite;
      position: absolute;
    }
    .border2 {
      border: 0.5rem solid rgba(255, 255, 255, 0.7);
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      animation: noFriends2 1.5s infinite;
      position: absolute;
    }
    .border3 {
      border: 0.5rem solid rgba(255, 255, 255, 0.7);
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      animation: noFriends3 1.5s infinite;
      position: absolute;
    }
    .border4 {
      border: 0.5rem solid rgba(255, 255, 255, 0.7);
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      animation: noFriends4 1.5s infinite;
      position: absolute;
    }
  }
  .imgNoFriends {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    position: absolute;
    object-fit: cover;
    animation: Friends 1.5s infinite;
    opacity: 0.7;
  }
  .searchNewUsers {
    position: absolute;
    font-family: "Inter";
    top: 280px;
    animation: Friends 1.5s infinite;
    font-weight: 600;
  }
`;

export const CardContainer = styled.ul<IPropsDevLov>`
  @keyframes identifier {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  animation-name: ${({ isChange }) => (isChange ? "identifier" : "")};
  animation-duration: 0.5s;

  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    width: 90%;
    height: 25.39rem;
    max-width: 22.1875rem;

    border-radius: 8px;
    align-items: baseline;
    padding-top: 10px;

    .nameAndinfo {
      position: absolute;
      top: 280px;
      left: 10px;
      width: max-content;
    }

    > div {
      width: 93%;
      position: relative;
      span {
        margin-right: 4px;
        font-weight: 600;
        color: aliceblue;
      }

      svg {
        cursor: pointer;
      }
    }
  }
  .AvatarImage {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 4px;
  }

  .button__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      border: none;
      padding: 0;
      background-color: transparent;
      width: 3.375rem;

      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 700px) {
    li {
      height: 30.39rem;
      .nameAndinfo {
        top: 360px;
      }
    }

    span {
      font-size: 1.5rem;
    }
    .AvatarImage {
      height: 25rem;
    }
  }
`;
