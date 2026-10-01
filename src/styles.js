import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  cream: '#FFF8F2',
  softCream: '#FFEBD9',
  white: '#FFFFFF',
  dark: '#1E1E1E',
  muted: '#6B5B5B',
  success: '#2E7D32'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    background: ${colors.cream};
    color: ${colors.salmon};
    font-family: Arial, Helvetica, sans-serif;
  }

  body.modal-open {
    overflow: hidden;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
  }

  .container {
    width: min(1024px, calc(100% - 32px));
    margin: 0 auto;
  }
`
