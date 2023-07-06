import { styled, css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  color: #fff;
  font-size: 16px;
  font-weight: bold;

  transition: 0.3 ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark}
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark}
    }
  `}
`;
