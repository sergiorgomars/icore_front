import { injectGlobal } from "@emotion/css";

injectGlobal`
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
  }
  html {
  }
  body {
    min-height: 100vh;
    font-size: 1.6rem;
  }
`;
