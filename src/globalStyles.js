import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Tajawal:400,700');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Tajawal', sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }
`