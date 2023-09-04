import { injectGlobal } from "@emotion/css";

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    
    /* COLORS */
    --blue-one: #146C94; 

    --gray-one: #636769;
    
    /* FONTS */
    --principal-font: 'Manrope', sans-serif;

  }
  html {
  }
  body {
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: var(--principal-font);
  }
`;
