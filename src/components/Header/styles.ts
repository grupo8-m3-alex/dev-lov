import styled from 'styled-components';

interface IButtonProps {
  bg?: 'gray';
}

export const HeaderStyled = styled.header`
  background: rgb(245, 0, 114);
  background: linear-gradient(
    184deg,
    rgba(245, 0, 114, 1) 0%,
    rgba(245, 1, 114, 1) 10%,
    rgba(245, 1, 114, 0.660084016516763) 100%
  );

  padding: 17px 15px;

  & > div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 56.25rem;

    .logo {
      width: 100%;
      max-width: 275px;
      height: 104px;
      object-fit: contain;
    }

    & > svg {
      color: #fff;
      font-size: 80px;
    }

    & > div {
      display: none;
      gap: 0.625rem;

      .heart {
        width: 80px;
        height: 80px;
      }
    }

    @media screen and (min-width: 700px) {
      & > svg {
        display: none;
      }
      & > div {
        display: flex;
      }
    }
  }
`;

export const Dropmenu = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;

  width: 200px;
  right: 0;
  padding: 10px 12px;

  background-color: #fff;
`;

export const Figure = styled.figure`
  position: relative;

  cursor: pointer;

  .avatarUser {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover ${Dropmenu} {
    display: flex;
  }
`;

export const Button = styled.div<IButtonProps>`
  background-color: ${({ bg }) => (bg === 'gray' ? '#EDEDED' : '#FFFFFF')};
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 13px 23px;
  svg {
    color: #000;
    font-size: 24px;
  }

  span {
    color: #000;
  }
`;
