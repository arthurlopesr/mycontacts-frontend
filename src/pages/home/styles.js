import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 32px ;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;


  strong {
    font-size: 24px;
    font-weight: bold;
  }

  a {
    font-size: 16px;
    text-decoration: none;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.primary.main};

    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    .sort-button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        font-size: 16px;
        font-weight: 700;
        margin-right: 8px;
      }
    }
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};

        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const InputSeachContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #FfF;
    height: 50px;
    padding: 0 16px;

    border: none;
    border-radius: 25px;
   // filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));

    outline: 0;

    &::placeholder {
      color: #BCBCBC;
    }
  }

`;
