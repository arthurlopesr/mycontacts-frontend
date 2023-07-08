import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Sora', sans-serif;

    @media (max-width: 414px) {
    padding: 2px;
  }
  }


  body {
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }


`;
