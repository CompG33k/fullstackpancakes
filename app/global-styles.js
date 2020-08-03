import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
  }

  .pdf-wrapper{
    position: relative;
    padding-top: 56.25%
  }

  .react-pdf-obj {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
  }

  .react-pdf-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
  }

`;

export default GlobalStyle;
