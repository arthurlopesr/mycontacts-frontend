import { styled } from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 16px;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
