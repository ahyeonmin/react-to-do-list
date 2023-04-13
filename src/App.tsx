import React from 'react';
import { createGlobalStyle } from "styled-components";
import ToDoList from './components/ToDoList';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  @font-face {
    font-family: 'DOSSaemmul';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSSaemmul.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    font-family: 'DOSSaemmul';
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    background-color: #F8F5F6;
    color: ${(props) => props.theme.textColor};
    font-size: 11px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  select {
    background-color: white;
    color: #444444;
    font-family: 'DOSSaemmul';
    font-size: 11px;
    border: 1px solid gray;
    border-radius: 0%;
    padding: 0 3px;
    margin-right: 5px;
    appearance: none;
  }
  input {
    width: 170px;
    font-family: 'DOSSaemmul';
    background-color: white;
    border: 1px solid gray;
    margin-right: 5px;
    padding: 5px 7px;
    :focus {
      border: 1px solid none;
    }
    ::placeholder {
      font-size: 11px;
    }
  }
  button {
    background-color: ${(prop) => prop.theme.btnColor};
    color: #444444;
    font-family: 'DOSSaemmul';
    font-size: 11px;
    padding: 6px 7px;
    border: 1px solid gray;
    margin-right: 5px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
