import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #eee;

  a {
    text-decoration: none;
    color: #7159c1;
  }

  img {
    margin-top: 20px;
    width: 120px;
    border-radius: 50%;
  }

  h1 {
    margin-top: 10px;
    font-size: 24px;
  }

  p {
    margin-top: 5px;
    max-width: 400px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const IssueList = styled.ul`
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 5px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          font-size: 12px;
          font-weight: 600px;
          height: 20px;
          padding: 3px 4px;
          border-radius: 2px;
          margin-left: 10px;
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const FilterContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  select {
    flex: 1;
    background: none;
    border-radius: 2px;
    padding: 5px 10px;
    color: #999;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  button {
    background: #7159c1;
    border: none;
    border-radius: 2px;
    padding: 5px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: #5b479b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      &:hover {
        background: #7159c1;
      }
    }
  }
`;
