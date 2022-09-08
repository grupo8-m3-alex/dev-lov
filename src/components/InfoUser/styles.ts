import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  padding: 0.8125rem 1.5625rem;

  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  margin-bottom: 0.625rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8125rem;

  figure {
    position: relative;
    cursor: pointer;

    img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    div {
      position: absolute;
      right: 5px;
      bottom: 10px;

      background-color: #f20171;
      padding: 5px;
      border-radius: 5px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    color: #000;
  }
`;

export const Bio = styled.div`
  background: #f2f2f2;
  box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;

  padding: 0.375rem 0.75rem;

  min-height: 5.8rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;
`;
