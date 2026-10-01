import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  cream: '#FFF8F2',
  softCream: '#FFEBD9',
  white: '#FFFFFF',
  dark: '#1E1E1E',
  muted: '#6B5B5B'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    background: ${colors.cream};
    color: ${colors.salmon};
    font-family: Roboto, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body.modal-open {
    overflow: hidden;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
  }

  .container {
    width: min(1024px, calc(100% - 32px));
    margin: 0 auto;
  }
`
