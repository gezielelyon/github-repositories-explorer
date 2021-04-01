import styled from 'styled-components';

export const Container = styled.div`
  div:first-child {
    width: 100%;
    max-width: 960px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #a8a8b3;
      display: flex;
      align-items: center;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: #666;
      }

      svg {
        margin-right: 5px;
        color: #a8a8b3;
      }
    }
  }
`;

export const UserProfile = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  padding: 5px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 50px;
  }

  div {
    margin-left: 30px;

    strong {
      font-size: 26px;
    }

    p {
      color: #737380;
      margin-top: 5px;
    }
  }
`;

export const RepositoryInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    & + li {
      margin-left: 50px;
    }

    strong {
      font-size: 18px;
      font-weight: bold;
      display: block;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        margin-top: 4px;
        font-size: 16px;
      }
    }
  }
`;
