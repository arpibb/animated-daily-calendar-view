import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .menu-primary-right-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 200ms ease;
  }

  .menu-primary-left-enter, .menu-primary-right-enter  {
    opacity: 0;
    transform: translateX(0%);
  }

  .menu-primary-left-enter-active {
    opacity: 1;
    transform: translateX(100%);
    transition: all 200ms ease;
  }

  .menu-primary-right-exit,  .menu-primary-left-exit {
    opacity: 1;
    position: absolute;
    top: 0;
  }

  .menu-primary-right-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 200ms ease;
  }

  .menu-primary-left-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 200ms ease;
  }

  .menu-secondary-right-enter {
    transform: translateX(100%);
  }

  .menu-secondary-left-enter {
    transform: translateX(-100%);
  }

  .menu-secondary-right-enter-active, .menu-secondary-left-enter-active  {
    transform: translateX(0%);
    transition: all 200ms ease;
  }

  .menu-secondary-right-exit, .menu-secondary-left-exit {
    position: absolute;
  }

  .menu-secondary-right-exit-active, .menu-secondary-left-exit-active {
    transform: translateX(100%);
    transition: all 200ms ease;
  }
`

export default GlobalStyle

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
