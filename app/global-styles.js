import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  
  html,
  body {
      min-width: 0;
      min-height: 0;
      margin: 0;
      padding: 0;
      height: 100vh;
      width: 100vw;
      background: #0c0c0c;
  }
  
  body {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  }
  
  .dark {
      font-size: 14px;
      color: #f2f2f2;
      font-family: "Hilda", Helvetica, Arial, sans-serif;
      /* Better Font Rendering =========== */
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* Grid */
      /* Grid */
      /**
   * prism.js default theme for JavaScript, CSS and HTML
   * Based on dabblet (http://dabblet.com)
   * @author Lea Verou
   */
      /* Inline code */
  }

`

export default GlobalStyle
