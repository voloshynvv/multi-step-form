import { createGlobalStyle } from 'styled-components';
import { rem } from '~/styles/mixins';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #022959;
    --secondary: #483EFF;
    --app-bg: #EFF5FF;
    
    --white: #FFFFFF;
    --gray: #9699AA;
    --light-gray: #F8F9FF;
    --sky-blue: #BEE2FD;
    --light-blue: #ABBCFF;

    --error: #EE374A;
    --border: #D6D9E6;

    --rounded: 0.5rem;
    --rounded-md: 0.625rem;
    --rounded-lg: 1rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }

  p {
    margin: 0;
  }

  #root {
    min-height: 100svh;

    @media (min-width: 768px) {
      padding: 1rem;
      display: flex;
      align-items: center;
    } 
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    padding: 0;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    background-color: var(--app-bg);
    color: var(--gray);
  }

  h1, h2, h3 {
    margin: 0;
    line-height: normal;
    color: var(--primary);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.625rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1rem;
  }

  /* Utils */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyle;
