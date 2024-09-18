import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #022959;
    
    --gray: #9699AA;
    --white: #ffffff;


    --red: hsl(231, 11%, 63%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);

    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);

    --rounded: 0.5rem;
    --rounded-md: 0.625rem;
    --rounded-lg: 1rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #root {
    min-height: 100svh;
    display: flex;
    align-items: center;
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

  body {
    font-family: 'Ubuntu', sans-serif;
    padding: 0;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    background-color: var(--magnolia);
    color: var(--gray);
  }
`;

export default GlobalStyle;
