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
    --blue: #164A8A;
    --purple: #928CFF;

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
    min-height: 100dvh;

    @media (min-width: 768px) {
      padding: ${rem(16)};
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
    font-size: ${rem(24)};
    font-weight: 700;
    margin-bottom: ${rem(10)};

    @media (min-width: 768px) {
      font-size: ${rem(32)};
    }
  }

  h3 {
    font-weight: 500;
    font-size: ${rem(16)};
  }
  
  a {
    color: var(--primary);
    text-decoration: underline;
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

  .flex-1 {
    flex: 1;
  }
`;

export default GlobalStyle;
