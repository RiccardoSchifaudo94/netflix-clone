import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Helvetica Nue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smooting:grayscale;
        background-color:black;
        color:#333333;
        font-size:16px;
    }
`;