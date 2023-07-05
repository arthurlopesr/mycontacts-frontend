import { styled } from 'styled-components';

export default styled.input`
  width: 100%;
  border: 2px solid #fff;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  height: 52px;
  padding: 16px;
  outline: none;
  margin-top: 24px;
  font-size: 16px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    transition: 0.2s ease-in;
  }

  & + & {
    margin-top: 16px ;
  }


`;
