import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 0.75rem;
  border: 0.0625rem solid #f2f2f2;
  background-color: #ffffff;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.125rem 3.375rem;
    border-bottom: 1px solid #f2f2f2;

    color: #000;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  p {
    word-wrap: break-word;
    margin: 20px 0;
    padding: 1.125rem 3.375rem;

    color: #000;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #f2f2f2;
  padding: 1.125rem 3.375rem;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.625rem;

    color: #000;

    div {
      cursor: pointer;
    }

    .enjoy {
      margin-right: 1.25rem;
    }
  }

  img {
    cursor: pointer;
  }
`;
