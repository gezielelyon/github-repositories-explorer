import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IFormProps {
  hasError: boolean;
}

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 433px;
  margin-top: 100px;
  line-height: 56px;
`;

export const Form = styled.form<IFormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 18px;

    &::placeholder {
      color: #a8a8b3;
    }

    ${props =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
        border-right: 0;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    padding: 5px;
    border-radius: 0 5px 5px 0;
    font-size: 18px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 5px;
  font-weight: 700;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 710px;
  height: 110px;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 16px;
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

    svg {
      margin-left: auto;
    }
  }
`;
