import styled from 'styled-components';

interface IButtonProps {
  bg?: 'gray';
}

export const Dropmenu = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;

  width: 200px;
  right: 0;
  padding: 10px 12px;

  background-color: #fff;
`;

export const Button = styled.div<IButtonProps>`
  background-color: ${({ bg }) => (bg === 'gray' ? '#EDEDED' : '#FFFFFF')};
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 13px 23px;
  transition: all 0.3s;
  cursor: pointer;
  svg {
    color: #000;
    font-size: 24px;
  }

  span {
    color: #000;
  }

  &:hover {
    background-color: #333;
    svg,
    span {
      color: #fff;
    }
  }
`;

export const HeaderStyled = styled.header`
  background: rgb(245, 0, 114);
  background: linear-gradient(
    184deg,
    rgba(245, 0, 114, 1) 0%,
    rgba(245, 1, 114, 1) 10%,
    rgba(245, 1, 114, 0.660084016516763) 100%
  );

  padding: 10px 15px;

  & > div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 46.875rem;

    .logo {
      width: 100%;
      max-width: 9.5rem;

      object-fit: contain;

      cursor: pointer;
    }

    .menuMobile {
      position: relative;
      > svg {
        color: #fff;
        font-size: 4rem;
      }

      &:hover > ${Dropmenu} {
        display: flex;
      }
    }

    .right {
      display: none;
      gap: 0.625rem;

      .heart {
        width: 3.5rem;
        height: 3.5rem;

        cursor: pointer;
      }
    }

    @media screen and (min-width: 700px) {
      .menuMobile svg {
        display: none;
      }
      .right {
        display: flex;
      }
    }
  }
`;

export const Figure = styled.figure`
  position: relative;

  cursor: pointer;

  .avatarUser {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover ${Dropmenu} {
    display: flex;
  }
`;
