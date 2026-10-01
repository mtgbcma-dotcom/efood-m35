import { createGlobalStyle } from 'styled-components'
export const colors={salmon:'#E66767',cream:'#FFF8F2',softCream:'#FFEBD9',white:'#FFFFFF',darkText:'#4B3333'}
export const GlobalStyle=createGlobalStyle`*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background:${colors.cream};color:${colors.salmon};font-family:Roboto,Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased}button,input,textarea{font:inherit}img{max-width:100%;display:block}a{color:inherit}.container{width:min(1024px,calc(100% - 32px));margin:0 auto}`
