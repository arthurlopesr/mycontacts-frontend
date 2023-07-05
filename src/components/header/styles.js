import { styled } from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSeachContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    background: #FfF;
    height: 50px;
    padding: 0 16px;

    border: none;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));

    outline: 0;

    &::placeholder {
      color: #BCBCBC;
    }
  }

`;
